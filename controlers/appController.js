//controller
const DbTask = require("../model/appModel");

//for to get allposts
const getPosts = async (req,res) => {
  try {
    const DBTASKS = await DbTask.find();
    res.status(200).json(DBTASKS);
  } catch (err){
    res.status(500).json({ message:"server error" });
  }
};


//for add posts
const addPosts = async (req, res) => {
  try {
    const { title, content } = req.body;

    // Validate input
    if (!title || !content) {
      return res.status(400).json({ message: "title and content are required" });
    }

    // Optional: check for duplicate titles
    const is_title_exist = await DbTask.findOne({ title });
    if (is_title_exist) {
      return res.status(400).json({ message: "title already exists" });
    }

    // Save new post
    const newPost = new DbTask({ title, content });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    console.error("Error in addPosts:", err);
    res.status(500).json({ message: "server error" });
  }
};


///for delete post
const delPost= async (req,res)=>{
    try{
const deleted = await DbTask.findByIdAndDelete(req.params.id)

//if there is not get the id & give message
if(!deleted) return res.status(404).json({
    message:"todo not found"
})
//if deleted successfull give message
res.status(200).json({message:"todo deleted successfully"})

    }catch(err){
 res.status(500).json({ message:"server error" });
    }
}



///for update
const updateById= async (req,res)=>{
    try{
const updatedPost = await DbTask.findByIdAndUpdate(req.params.id,req.body)

if(!updatedPost) return res.status(404).json({
    message:"todo not found"
})
res.status(200).json(updatedPost)

    }catch(err){
 res.status(500).json({ message:"server error" });
    }
}


//exporting
module.exports = { getPosts,addPosts,delPost,updateById};
