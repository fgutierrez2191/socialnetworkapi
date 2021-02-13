const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
 username : {
     type: String,
     trim: true,
     required: 'Username is required',
     unique: true
 },

 email: {
     type: String,
     required: 'email is required',
     unique: true,
     match: [/.+@.+\..+/]
 },
 thoughts: [
     {
         type: Schema.Types.ObjectId,
         ref: 'Thought'
     }
 ],
 friends: [
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
]

});

const User = model('User', UserSchema);
module.exports = User;