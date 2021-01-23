//routes for Posts
import express from 'express';

//imports the getPosts object from posts.js in controllers
import { getPosts} from '../controllers/posts.js'
//sets up the router
const router = express.Router();

//reached using localhost:5000/posts
router.get('/', getPosts);

//exports the router
export default router;