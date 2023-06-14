const {query} = require('../utils/db')

// 用户查询
module.exports.findUserByUserName = async ( account ) => {
  return await query('SELECT * FROM users WHERE account=?', [account]);
}


// 登录
module.exports.register = async (account, pwd, token) =>{
  return await query(`INSERT INTO users (account, pwd, token) values ('${account}', '${pwd}', '${token}')`);
}  