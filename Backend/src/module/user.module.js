import mongoose, {schema} from 'mongoose';

const username = new schema(
    {
    name: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    token: {type: String},
    }
)

const user = mongoose.model("user", userSchema);

export {user};

