const express = require('express');

const router = express.Router();
const Post  = require('../models/Post');


router.get('/:postId',async (req,res) => {
  console.log(req.params.postId);
try {
  const post = await Post.findById(req.params.postId);
  res.json(post);
}catch(err) {
 res.json({message : err});
}
})
// router.get("/",(req,res) => {
//   res.send("We are on posts");
// });
router.get('/', async (req,res) => {
  try{
    const posts = await Post.find();
    res.json(posts);
  }catch(err) {
      res.json({message : err});
  }
});
// router.get("/specific",(req,res) => {
//   res.send("We are on specific");
// });
router.delete('/:postId', async(req,res) => {
 
  try {
    const post = await Post.remove({ _id : req.params.postId});
    res.json(post);
  }catch(err){
    res.json({
      message: err
    });
  }
});
router.post('/', (req,res) => {
  const post = new Post({
    title: req.body.title,
    description : req.body.description
  });

  post.save().then(data => {
    res.json(data);
  })
  .catch(err => {
    res.json({message : err});
  });

  console.log(req.body);


});


module.exports = router;

