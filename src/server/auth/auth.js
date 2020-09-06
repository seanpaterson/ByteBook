const sql = require('../server');
const jwt = require('jsonwebtoken');

function auth(token, callback)
{
    let date;
    if(token == null||token =='')
        callback(-1);
    console.log(token);
    try {
        token = jwt.verify(token, 'privateKey');
    } catch(err) {
        console.log(err);
        return callback(-1);
    }
    sql.sql.query(`SELECT * from USER where username = '${token.username}';`, function(err, result) {
        if (err){
            console.log(err);
            return callback(-1);
        }
        else {
            if(result.length == 1)
            {
                sql.sql.query(`SELECT * from TOKEN WHERE user_id = ${result[0].user_id}`, function(err, result) {
                    if(err) {
                        console.log(err);
                        return callback(-1);
                    }
                    else{
                        if(result.length == 1)
                        {
                            date = new Date();
                            let t = date.getTime() % 10000000;
                            if(token.tokenNum == result[0].token_num && result[0].auth_time > t)
                            {
                                return callback(1);
                            }
                            else
                            {
                                console.log('Token disabled.');
                                return callback(0);
                            }
                        }
                        else{
                            console.log(err);
                            return callback(-1);
                        }
                    }
                });
            }
            else {
                return callback(-1);
            }
        }
    });
}

exports.auth = auth;