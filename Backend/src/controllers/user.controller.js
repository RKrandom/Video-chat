import httpStatus from 'http-status';
import {user} from '../models/user.model.js';

    
const register = async (req, res) => {
    const {name, username, password} = req.body;  //Gets data from the frontend form

    try {
        const existingUser = await user.findOne({ username }); //Checks if username already exists in database
        
        if (existingUser) {
           return res.status(httpStatus.FOUND).json({ message: 'Username already exists' });

           const hashedPassword = await bcrypt.hash(password, 10); //hashin the pass. through bcrypt

           const newuser = new user({
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
