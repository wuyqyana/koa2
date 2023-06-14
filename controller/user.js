
const { register, findUserByUserName } = require('../model/user');
const jwt = require('jsonwebtoken')

module.exports.login = async (ctx) => {
	const account = ctx.request.body.account;
	const pwd = ctx.request.body.pwd;
	const result = await findUserByUserName(account)
	if (result.length) {
		// 能找到对应的账号
		if (result[0].pwd == pwd) {
			// 账号密码正确，返回token
			ctx.body = {
				token: result[0].token,
				msg: '登录成功',
				account
			};
		} else {
			// 密码错误
			ctx.body = {
				msg: '密码错误',
				account
			};
		}
	} else {
		// 找不到对应的账号，直接插入一个
		const token = jwt.sign({ account, pwd }, 'secret', { expiresIn: 3600 })
		const res = await register(account, pwd, token)
		if (res) {
			ctx.body = {
				token,
				msg: '注册并登录成功',
				account
			}
		}
	}
}