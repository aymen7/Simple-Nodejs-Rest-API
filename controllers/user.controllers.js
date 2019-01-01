// get the user model
const User = require('../models/users.model');

// handle th user login logic 
exports.loginUser  = (req, res) => {
    let userData = req.body;
    // find the user with the corresponding email 
    User.findOne({email: userData.email},(err,user)=>{
        // log the error if any
        if (err) console.log(`error was found: ${err}`);
        else{
            // send a 401 status if there is no user with te enter email
            if(!user) res.status(401).send('invalid email or password');
            else {
                // send a 401 status if the password oes not match the email
                if(userData.password !== user.password){
                    res.status(401).send('invalid email or password');
                }
                else{
                    // send 200 status if both the email and password matches
                    res.status(200).send(user);
                }
            }
        }
    });
    

}
// handle the user registering logic
exports.registerUser = (req,res)=>{
    // get the userData sent from the client
    let userData = req.body;
    // initialize a user instance with this data
    let user = new User(userData);
    // save the user to tha database
    user.save((err,registeredUser)=>{
        if (err) console.log(`failed to register the user err: `);
        // if success send status 200 and the registeredUser data to the client
        res.status(200).send(registeredUser);
    });
}

