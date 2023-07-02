const passport = require('passport');
//const localStrategy = require('passport-local');
const gitHubStrategy = require('passport-github2');
const UserModel = require('../db/model/userModel.js')


//Cree "getUserByEmailPassportService" porque el dto de user me devolvia data._id era null (?
const {   
    createUserService,
    getUserIdService,
    getUserByEmailPassportService
} = require("../services/userServices.js");

const initPassport = () => {
    passport.serializeUser((user, done) => {
        //console.log("El user de github :" ,user)
        done(null, user._id);
    });
    passport.deserializeUser(async (id, done) => {
        //console.log(id)
        let user = await getUserIdService(id);
        
        done(null, user);
    });  
    
passport.use(
        "github",
        new gitHubStrategy(
            {
                clientID: "Iv1.e5f56889f479f838",
                clientSecret: "0deaf2b7f4e3e93119ccc56c562ce278544f14c8",
                callbackUrl: "http://localhost:8080/api/session/githubcallback",
                scope: ["user: email"]          
            },
            async (accessToken, refreshToken, profile, done) => {
               console.log("profile:",profile.username)
                try {
                    let user = await getUserByEmailPassportService(profile.username)
                    console.log("user traido:",user)
                    if (user == null) {
                        let newUser = {                            
                            user: profile.username,
                            email: profile.username,                            
                            password: "",
                        };
                        let userAdded = await createUserService(newUser);
                        console.log("userAdded", userAdded);
                        done(null, userAdded);
                    } else {
                        //console.log("ya existe el user en git:", user)
                        done(null, user);
                    }
                } catch (error) {
                    return done(error);
                }
            }
        )
    );
};

module.exports = {initPassport};
