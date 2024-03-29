import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    isAdmin:Boolean,
    isBanned:Boolean,
    name: {type: String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    id: {type:String},
    credits:Number,
    createdEvents: [{eventId:String, eventTitle:String}],
    joinedEvents: [{eventId:String, eventTitle:String}],
    notifications: [{description:String, isSeen:Number}],
    averageRate:Number,
    rates:[Number],
    profileImage:String
})

let User = mongoose.model("User", userSchema);

export default User;