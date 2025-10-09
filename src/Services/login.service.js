const Users = require('../Json/RegisterUser.json');

async function loginFunc (username, password) {
    try{
        //Call Db to get the user
        const response = {data: {message: 'Login Success'}}
        return response
        //Set the response
            
    }catch(error){
        return {error: error}
    }
}

module.exports = { loginFunc }