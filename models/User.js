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
 thoughts: [],
 friends: [],
},
{
 toJSON: {
   virtuals: true,
 },
 id: false,
}
);

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });

const User = model('User', UserSchema);
module.exports = User;