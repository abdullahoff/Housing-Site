import postListing from '../models/postListing.js';

//this allows for routing logic to be seperate from the actual routing 

//2nd param is callback funcion which is exected when someone visits local host 5000
//params are requesta nd response and will be the same for all callback functions inside router.get
export const getPosts = async (req, res) => {
    try {
        const postListings = await postListing.find();


        res.status(200).json(postListings);

    } catch (error) {
        res.status(404).json({message: error.message});
    }
    
    res.send('THIS WORKS');
}

export const createPost = async (req, res) => {
    const body = req.body;

    const newPost = new postListing(post);
    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }

}