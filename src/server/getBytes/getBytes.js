//import data from "../database/database";
const data = require('../database/database');

function getBytes(username) {
    let database = data.data;
    const BytesFound = [];
    if(database == null|| database.UserBytes.length == 0)
        return null;

    for(let i = 0; i < database.UserBytes.length; ++i)
    {
        if(database.UserBytes[i].user == username)
            BytesFound.push(database.UserBytes[i]);
    }
    return BytesFound;
}

exports.getBytes = getBytes;