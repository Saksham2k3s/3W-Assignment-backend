const jwt = require('jsonwebtoken');

const generateToken = (user, statusCode, res) => {
   
    //Paylod to be include in token
    const payload = {
        id: user._id,
        name: user.name,
        email: user.email,
        username: user.username,
        gender: user.gender
    };
    
    //Token Options
    const tokenOptions = {
        expiresIn: process.env.JWT_EXPIRES_IN
    }

    //Generating Token
    const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

    if(!JWT_EXPIRES_IN){
        console.error("JWT_EXPIRES_IN is not defined in environment variables!");
    };

    const JWT_SECERET = process.env.JWT_SECERET;
    if(!JWT_SECERET){
        console.error("JWT_SECERET is not defined in environment variables!");
    };
    const token = jwt.sign(payload, JWT_SECERET, tokenOptions);

    // Cookie Options
    const COOKIE_EXPIRES = process.env.COOKIE_EXPIRES;

    if(!COOKIE_EXPIRES){
        console.error("COOKIE_EXPIRES is not defined in environment variables!");
    }
    const cookieOptions = {
        expires : new Date(
            Date.now() + COOKIE_EXPIRES * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        Lax: 'None'
    }

    //Saving the token into cookie and return the response
    res
    .status(statusCode)
    .cookie("token", token, cookieOptions)
    .json({
      success: true,
      user,
      token,
    });

}

module.exports = generateToken