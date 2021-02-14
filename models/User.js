const { Schema, model } = require('mongoose');
// const ThoughtSchema = require('./Thought');

const UserSchema = new Schema({
 username : {
     type: String,
     trim: true,
     required: 'Please provide your username',
     unique: true
 },

 email: {
     type: String,
     required: 'email is required',
     unique: true,
     match: [/.+@.+\..+/]
 },
//  thoughts: [ThoughtSchema],
//  friends: [UserSchema]
},
{
 toJSON: {
   virtuals: true,
 }
}
);

//vitrual to get the length of the friends array
// UserSchema.virtual('friendCount').get(function() {
//     return this.friends.length;
//   });

const User = model('User', UserSchema);

module.exports = User;