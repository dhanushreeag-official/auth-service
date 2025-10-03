const handleRegister = async(req, res) =>{
    try{
        const { firstname, lastname, email, username, password} = req.body;
        
        //Call the function to add the user
        const {getRegisterResponse, error} = ;
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