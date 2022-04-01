const { Router } = require('express');
const router = Router();

router.get('/admins',(req,res)=>{
    res.send('Administradores')
});

module.exports = router;