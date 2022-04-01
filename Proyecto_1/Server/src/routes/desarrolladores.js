const { Router } = require('express');
const router = Router();
const Item = require('../../database/usuario')

router.get('/developers',async (req,res)=>{
    let desarrolladores = await retornarVal()
    res.json({"server": process.env.SERVER,"desarrolladores":desarrolladores});
});

async function retornarVal (){
    var arreglo = []

    await Item.find({ tipo : 'Desarrollador' }, (err, data) => {
        if (err) {
            console.log("problema al obtener desarrolladores",err);
        } else {
            arreglo = data
        }
    }).clone();
    return arreglo;
}

module.exports = router;