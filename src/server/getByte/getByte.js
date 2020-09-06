const sql = require('../server');
const jwt = require('jsonwebtoken');

function getByte(byteID, callback){
    let byte;
    if(byteID == null||byteID == '')
        return callback(-1);
    sql.sql.query(`SELECT * FROM BYTE WHERE byte_id=${byteID}`, (err, result) => {
        if(err){
            console.log(err);
            return callback(-1);
        }
        else if(result.length == 0)
            return callback(-1);
        byte = result[0];
        sql.sql.query(`SELECT * FROM INGREDIENT WHERE byte_id=${byteID}`, (err, result) => {
            if(err){
                console.log(err);
                return callback(-1);
            }
            byte.ingredients = result;
            return callback(byte);
        });
    });
}

exports.getByte = getByte;