const { createPool,getNotifiction,
    getPoolById,
    reply,
    deletePool} = require('../controllers/greenEyeController');
    
const {onlyCommaders,onlySellersAndCommanders} = require('../middlewarers/authMiddlewarse');

const router = require('express').Router();

router.post('/',onlyCommaders,createPool);

router.get('/my',onlySellersAndCommanders,getNotifiction)

router.get('/:id',getPoolById)

router.post('/reply',reply)

router.delete('/:id',onlyCommaders,deletePool)

module.exports =  router 