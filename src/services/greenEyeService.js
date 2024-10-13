const geenEyeModle = require("../models/greenEyeModel");


const createNewPool = async (pool,poolBody)=>{
    try{
       console.log(pool + ' created');
       const { length, population } = poolBody; 
    if (population) {
    const { areas, units } = population;
    }         
    const dbPool = new geenEyeModle({
    create_by:pool.id,
    length,
    population
    
    
    });
       await dbPool.save()
    }catch(err){
        console.log(err);
       throw err
    }
}
module.exports = {
    createNewPool
};