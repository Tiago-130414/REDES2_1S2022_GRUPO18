const { Router } = require('express');
const router = Router();
const Item = require('../../database/imagen')

router.get('/home',async(req,res)=>{
    let home = await retornarVal()
    res.json({"home" : home})
});

async function retornarVal (){
    var arreglo = []

    await Item.find({ tipo : 'Imagen' }, (err, data) => {
        if (err) {
            console.log("problema al obtener desarrolladores",err);
        } else {
            arreglo = data
        }
    }).clone();
    return arreglo;
}

module.exports = router;