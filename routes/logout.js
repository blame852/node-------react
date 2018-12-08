var express = require('express');
var router = express.Router();

router.get('/',(req,res,next)=>{
	req.session.destroy(()=>{
		res.send({state:0});
	})
	
})

module.exports = router;