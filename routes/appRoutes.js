 const express =  require('express')
 //for to get controller
const { getPosts, addPosts, delPost, updateById } = require('../controlers/appController')
 const router = express.Router()


//routes
router.get('/',getPosts)
router.post('/add',addPosts)
router.delete('/:id',delPost)
router.post('/:id',updateById)


module.exports = router