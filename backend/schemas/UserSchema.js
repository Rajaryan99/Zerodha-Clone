const mongoose  = require('mongoose'); 
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        require: [true, "Your email address is required"],
        unique: true,
    },
    username: {
        type: String,
        require: [true, "Your email username is required"],
        
    },
    password: {
        type: String,
        require: [true, "Your email password is required"],
        
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

UserSchema.pre("save", async() => {
    this.password = await bcrypt.hash(this.password, 12);
})

module.exports = UserSchema;