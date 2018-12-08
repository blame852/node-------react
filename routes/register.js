var express = require('express');
var router = express.Router();
var userModel = require('../model/user.js');

router.post('/',(req,res,next)=>{
	console.log(req.body.phone)
	userModel.find({phone:req.body.phone}).then((info)=>{
		// console.log(info)
		if(info.length === 1){
			res.send({state:0});
		} else {
			userModel.create({
				phone:req.body.phone,
				password:req.body.password
			}).then((infos)=>{
				res.send({state:1});
			}).catch(()=>{
				res.send({state:2});
			})
		}
	})
})

module.exports = router;