import httpStatus from 'http-status';
import { User } from '../module/user.module.js';
import bcrypt from 'bcrypt';
import crypto from 'crypto'; // Importing crypto for token generation

const login = async (req, res) => {
    const {username, password} = req.body; //Gets data from the frontend form

    if (!username || !password) {
        return res.status(400).json({message: 'Username and password are required'});
    }

    try {
        const foundUser = await User.findOne({ username });
        if(!foundUser) {
            return res.status(httpStatus.NOT_FOUND).json({message: 'User not found'});
        }

        const isPasswordValid = await bcrypt.compare(password, foundUser.password); // Compare the provided password with the hashed password in the database
        if(bcrypt.compare(password, foundUser.password)) {
            let token = crypto.randomBytes(20).toString('hex'); //Generate a token
            foundUser.token = token; //Assign the token to the user
            await foundUser.save(); //Save the user with the new token
            return res.status(httpStatus.OK).json({token: token}); //Send the token back to the client
        } else {
            return res.status(httpStatus.UNAUTHORIZED).json({message: 'Invalid password'});
        }
    }
    catch (e)
    {
        return res.status(500).json({message: `something went wrong: ${e.message}`});
    }    
};



const register = async (req, res) => {
    const {name, username, password} = req.body;  //Gets data from the frontend form

    try {
        const existingUser = await User.findOne({ username }); //Checks if username already exists in database
        
        if (existingUser) {
           return res.status(httpStatus.FOUND).json({ message: 'Username already exists' });

           const hashedPassword = await bcrypt.hash(password, 10); //hashin the pass. through bcrypt

           const newuser = new User({
                name: name,
                username: username,
                password: hashedPassword
           });
              await newuser.save(); //Save to database
              res.status(httpStatus.CREATED).json({ message: 'User registered successfully' });  //Send success response
        }
    } catch (error) {
        res.json({message: `something went wrong: ${error.message}`});
    }
};

export { login, register };