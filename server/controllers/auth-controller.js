const otpService = require('../services/otp-service.js');
const hashService = require('../services/hash-service.js');
class AuthController{
      async sendOtp(req,res){ 
			
		const { phone} = req.body; 
		if(!phone)
		{
			res.status(400).json(
				{
					message:"Phone Feild is required"
				}
			);
		}
		const otp = await otpService.generateOtp();
		// hashing the otp  
		const ttl = 1000 * 60 * 2; // expiry time of 2 minutes 
		const expires = Date.now() + ttl; 
		const data = `${phone}.${otp}.${expires}`;  
		const hash = hashService.hashedOtp(data); 

		
		res.status(200).json();
	  }
}



module.exports = new AuthController();