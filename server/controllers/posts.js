

//this allows for routing logic to be seperate from the actual routing 

//2nd param is callback funcion which is exected when someone visits local host 5000
//params are requesta nd response and will be the same for all callback functions inside router.get
export const getPosts = (req, res) => {
    res.send('THIS WORKS');
}