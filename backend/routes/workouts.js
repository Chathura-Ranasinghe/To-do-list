// require express package 
const express = require('express')

const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

// create instance of the router
const router = express.Router()

//------request handlers------

// GET all workouts 
router.get('/', getWorkouts) 

// GET a single workouts 
router.get('/:id', getWorkout) 

// POST a new workouts 
router.post('/', createWorkout) 

// DELETE a workout
router.delete('/:id', deleteWorkout) 

// UPDATE a workout
router.patch('/:id', updateWorkout) 

module.exports = router