const sql = require('../server');
const jwt = require('jsonwebtoken');

function checkByteInput(byteInfo)
{
    if (byteInfo == null || byteInfo.title == null || byteInfo.title == '')
    {
        console.log('Title Error');
        return false;
    }
    else if (byteInfo.time == null || byteInfo.time == '')
    {
        console.log('Time Error');
        return false;
    }
    else if (byteInfo.timeUnit != 'min' && byteInfo.timeUnit != 'hr')
    {
        console.log('Time Unit Error');
        return false;
    }
    else if (isNaN(byteInfo.servings) || byteInfo.servings < 1 || byteInfo.servings > 10)
    {
        console.log('Servings Error');
        return false;
    }
    else if (byteInfo.description == null || byteInfo.description == '')
    {
        console.log('Description Error');
        return false;
    }
    else if (byteInfo.directions == null || byteInfo.directions == '')
    {
        console.log('Directions Error');
        return false;
    }
    else if (byteInfo.ingredients == null)
    {
        console.log('Ingredients Error');
        return false;
    }
    return true;
}

function createByte(byteInfo, token, callback) {
    let username;
    let userID;
    let byteID;
    let query;
    try {
        token = jwt.verify(token, 'privateKey');
    } catch(err) {
        console.log(err);
        return callback(-1);
    }
    username = token.username;
    if(checkByteInput(byteInfo) == false)
        {
            console.log("Input in incorrect format.");
            return callback(-1);
        }
    sql.sql.query(`SELECT user_id FROM USER WHERE username='${username}'`, (err, result) => {
        if(err)
        {
            console.log(err);
            return callback(-1);
        }
        if(result.length == 0)
            return callback(-1);
        userID = result[0].user_id;
        sql.sql.query(`SELECT * FROM BYTE WHERE owner_id=${userID} AND byte_title='${byteInfo.title}'`, (err, result) => {
            if(err)
            {
                console.log(err);
                return callback(-1);
            }
            if(result.length > 0)
                return callback(-1);
            sql.sql.query(
                `INSERT INTO BYTE (byte_title, owner_id, byte_description, byte_directions, byte_servings, byte_time_amount, byte_time_unit)` +
                `VALUES ('${byteInfo.title}', '${userID}', '${byteInfo.description}', '${byteInfo.directions}', '${byteInfo.servings}', '${byteInfo.time}', '${byteInfo.timeUnit}');`, (err) => {
                if(err)
                {
                    console.log(err);
                    return callback(-1);
                }
                sql.sql.query(`SELECT byte_id FROM BYTE WHERE owner_id=${userID} AND byte_title='${byteInfo.title}'`, (err, result) => {
                    if(err)
                    {
                        console.log(err);
                        return callback(-1);
                    }
                    else if(result.length == 0)
                        return callback(-1);
                    byteID = result[0].byte_id;
                    if(byteInfo.ingredients.length > 0)
                    {
                        query = `INSERT INTO INGREDIENT (byte_id, ingredient_name, ingredient_measurement) VALUES `;
                        for(i = 0; i < byteInfo.ingredients.length; ++i)
                        {
                            query += `(${byteID}, '${byteInfo.ingredients[i].name}', '${byteInfo.ingredients[i].measurement}')`;
                            if(i + 1 < byteInfo.ingredients.length)
                                query += ', ';
                        }
                        console.log(query);
                        sql.sql.query(query, (err) => {
                            if(err)
                            {
                                console.log(err);
                                return callback(-1);
                            }
                            return callback(byteID);
                        })
                    }
                    else
                        return callback(byteID);
                });
            });
        });
    });
}

exports.createByte = createByte;