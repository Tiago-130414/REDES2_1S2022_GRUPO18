const { Router } = require('express');
const router = Router();

router.get('/developers',(req,res)=>{
    res.send('Desarrolladores')
});

module.exports = router;