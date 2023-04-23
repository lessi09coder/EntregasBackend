const passport = require('passport');
//const localStrategy = require('passport-local');
const gitHubStrategy = require('passport-github2');
const userSchema = require('../db/model/userModel.js')
const {
    getUserByUsernameService,
    getUserByIdService,
    createUserService,
    loginUserService,
} = require("../services/userServices.js");

const initPassport = () => {
    passport.serializeUser((user, done) => {
        console.log(user)
        done(null, user._id);
    });
    passport.deserializeUser(async (id, done) => {
        //console.log(id)
        let user = await userSchema.findOne ({ _id : id});
        //const user = await getUserByIdService(id);
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
               console.log("profile:",profile)
                try {
                    let user = await getUserByUsernameService(profile._json.login)
                    console.log("user traido:",user)
                    if (!user) {
                        let newUser = {
                            user: profile._json.login,                            
                            password: "",
                        };
                        let userAdded = await createUserService(newUser);
                        console.log("userAdded", userAdded);
                        done(null, userAdded);
                    } else {
                        console.log("ya existe el user en git:", user)
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
