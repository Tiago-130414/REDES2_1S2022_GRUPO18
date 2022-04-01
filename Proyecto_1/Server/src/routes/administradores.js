const { Router } = require('express');
const router = Router();
const Item = require('../../database/usuario')

router.get('/admins',async(req,res)=>{
    let administradores = await retornarVal()
    res.json({"administradores":administradores});
});

async function retornarVal (){
    var arreglo = []

    await Item.find({ tipo : 'Administrador' }, (err, data) => {
        if (err) {
            console.log("problema al obtener administradores",err)
        } else {
            arreglo = data
        }
    }).clone();
    return arreglo;
}

module.exports = router;