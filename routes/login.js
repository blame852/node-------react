var express = require('express');
var router = express.Router();
var userModel = require('../model/user.js');

router.post('/',(req,res,next)=>{
	userModel.find({phone:req.body.phone}).then(infos=>{
		if(infos.length === 0) {
			//用户名不存在
			res.send({state:0});
			return;
		} else {
			userModel.find({
				phone:req.body.phone,
				password:req.body.password
			}).then(info=>{
				if(info.length === 1){
					//登录成功
					req.session.userInfo = info[0];
					res.send({
						state:2,
						user:info[0].phone,
						id:info[0]._id
					});
				} else {
					//密码手机号不正确
					res.send({state:1});
				}
			})
		}
	})
})

//检测用户是否登录

router.get('/',(req,res,next)=>{
	if(req.session.userInfo){
		res.send({
			user:req.session.userInfo.phone,
			id:req.session.userInfo._id
		})
	} else {
		//用户未登录
		res.send({state:0});
	}
})

module.exports = router;