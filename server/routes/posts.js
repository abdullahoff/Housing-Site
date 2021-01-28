//routes for Posts
import express from 'express';

//imports the getPosts and createPost object from posts.js in controllers
import { getPosts, createPost} from '../controllers/posts.js'
//sets up the router
const router = express.Router();

//reached using localhost:5000/posts
router.get('/', getPosts);


router.post('/', createPost);


//exports the router
export default router;