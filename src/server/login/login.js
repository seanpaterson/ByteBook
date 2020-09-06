const sql = require('../server');
const SHA256 = require('../SHA256');
const jwt = require('jsonwebtoken');

function login(username, password, callback)
{
    let token;
    password = SHA256.SHA256(password);
     sql.sql.query(`SELECT * FROM USER WHERE username='${username}' AND password='${password}';`, function (err, result) {
        let date, currentMS, authTimeSlice, authTime, tokenNum;
        if (err){
            console.log(err);
            return callback(-1);
        }
        else {
            date = new Date();
            currentMS = date.getTime() % 10000000;
            console.log(currentMS);
            authTimeSlice = 1000 * 60 * 120;
            authTime = currentMS + authTimeSlice;
            console.log(authTime);
            tokenNum = Math.random() * 1000;
            tokenNum = Math.floor(tokenNum);
            if(result.length == 0){
                return callback(-1);
            }
            token = jwt.sign({ username: result[0].username, tokenNum: tokenNum }, 'privateKey');
            sql.sql.query(`UPDATE TOKEN SET token_num= ${tokenNum}, auth_time=${authTime} WHERE user_id = ${result[0].user_id}`, function(err, result) {
                if(err){
                    console.log(err);
                    return callback(-1);
                }
                else {
                    console.log(token);
                    return callback(token);
                }
            });
        }
    });
}

exports.login = login;