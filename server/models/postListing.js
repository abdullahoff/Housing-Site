import mongoose from 'mongoose';


//following initialises the schema for each post
//each posts must have the following values
//creator
const postSchema = mongoose.Schema({
    title: String, 
    Description: String,
    Poster: String,
    Price: Number,
    selectedFile: String,//will convert image to string ie using base64
    Term: String,
    views:{
        type: Number,
        default: 0
    },
    Date_Posted: {
        type: Date,
        default: new Date()
    }
});

//turns the schema for into a model
//1st param takes in PostListing file along
//2nd param is post schema 
const PostListing = mongoose.model('PostListing', postSchema);


export default PostListing;