const express = require ("express");
const {handleGetAllUsers,handleGetUserById, handleUpdateUserById,handleDeleteUserById,handleCreateUser} = require('../controllers/user');

const router = express.Router();

// router.get('/users', async(req,res)=>{
//     const allDbUsers = await User.find({});
//     const html = `
//     <ul>
//     ${allDbUsers.map((user)=>`<li> ${user.firstName} - ${user.email} </li>`).join("")}
//     </ul>
//     `;
//     res.send(html);
// })

router.get('/',handleGetAllUsers)

router.route('/:id')
.get(handleGetUserById).patch(handleUpdateUserById).delete(handleDeleteUserById)

router.post('/', handleCreateUser)
    
module.exports = router;