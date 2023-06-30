const express= require('express')
const router= express.Router()
const {protect}= require('../middleware/authMiddleware')
const{getGoals,setGoal, updateGoal,deleteGoal}=require('../controllers/goalControllers')

router.get('/',protect, getGoals)

router.post('/',protect, setGoal)

router.put('/:id',protect, updateGoal)

router.delete('/:id',protect, deleteGoal)

//router.route('/').get(getGoals).set(setGoal)
module.exports=router