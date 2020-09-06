let url = "http://localhost:8080/";
let username = "PaladinPaterson";
let ByteBook = {
    getBytes()
    {
        const requestOptions = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization' : window.sessionStorage.token
            },
        };
        return fetch(url + `getBytes/${username}`, requestOptions)
        .then(response => response.json())
        .then(response => {
            if(!response) {
                return [];
            }
            return response;
        })
    },
    getByte(byteID)
    {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
            'Authorization' : window.sessionStorage.token },
        };
        return fetch(url + `getByte/${byteID}`, requestOptions)
        .then(response => response.json())
        .then(response => {
            if(!response) {
                return null;
            }
            return response.byte;
        })
    },
    createByte(byteInfo)
    {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
            'Authorization' : window.sessionStorage.token },
            body: JSON.stringify(byteInfo)
        };
        return fetch(url + `createbyte`, requestOptions)
        .then(response => response.json())
        .then(response => {
            if(!response) {
                return null;
            }
            return response.byteID;
        })
    },
    login(loginInfo)
    {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginInfo)
        };
        return fetch(url + `login`, requestOptions)
        .then(response => response.json())
        .then(response => {
            if(!response || !response.token) {
                return -1;
            }
            console.log(response.token);
            window.sessionStorage.token = response.token;
            return 0;
        })
    },
    auth()
    {
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type' : 'application/json',
                'Authorization' : window.sessionStorage.token
            }
        };
        return fetch(url + `auth`, requestOptions)
        .then(response => response.json())
        .then(response => {
            if(!response || !response.authenticated) {
                return -1;
            }
            console.log(response);
            return response.authenticated;
        })
    }
}

export default ByteBook;