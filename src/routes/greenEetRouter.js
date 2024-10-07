const { createPool,getNotifiction,
    getPoolById,
    reply,
    deletePool} = require('../controllers/greenEyeController');

const router = require('express').Router();

router.post('/',createPool);

router.get('/my',getNotifiction)

router.get('/:id',getPoolById)

router.post('/reply',reply)

router.delete('/:id',deletePool)

module.exports =  router 