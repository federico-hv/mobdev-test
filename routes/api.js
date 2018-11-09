const express = require('express');
const router  = express.Router();
const { dogService } = require('../services');

/* GET dog info by :breedname */
router.get('/:breedname', async function(req, res, next){
  try {
    const { breedname } = req.params;    
    const data = await dogService.getDogInfo(breedname);
    res.json(data);
  }catch(err){
    next(err);
  }
});

module.exports = router;
