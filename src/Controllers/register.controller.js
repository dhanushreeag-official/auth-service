const { registerFunc } = require('../Services/register.service')

const handleRegister = async(req, res) =>{
    try{
        const { fullname, email, password } = req.body;
        
        //Call the function to add the user
        const {getRegisterResponse, error} = registerFunc( fullname, email, password );
        if(getRegisterResponse != null && error == null){
            res.json({success: 'OK', result: getRegisterResponse.data})
        }else{
            res.json({success:'error', message: error})
        }
    }catch (error){
        res.json({success: 'error', message: error.message})
    }
}

module.exports = { handleRegister }