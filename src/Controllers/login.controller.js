const { loginFunc } = require("../Services/login.service");

const handleLogin = async(req, res) =>{
    try{
        const { username, password} = req.body;
        
        //Call the function to authenticate
        const {getLoginResponse, error} = loginFunc(username, password)
        if(getLoginResponse != null && error == null){
            res.json({success: 'OK', result: getLoginResponse.data})
        }else{
            res.json({success:'error', message: error})
        }
    }catch (error){
        res.json({success: 'error', message: error.message})
    }
}

module.exports = { handleLogin }