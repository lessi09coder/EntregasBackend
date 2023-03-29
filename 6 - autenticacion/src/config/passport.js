const passport = require('passport');
//const localStrategy = require('passport-local');
const gitHubStrategy = require('passport-github2');
const userModel = require('../db/model/userModel.js')
const {
    getUserByIdService,
    createUserService,
    loginUserService,
} = require("../services/userServices.js");

const initPassport = () => {
    passport.serializeUser((user, done) => {
        done(null, user._id);
    });
    passport.deserializeUser(async (id, done) => {
        console.log(id)
        const user = await getUserByIdService(id);
        done(null, user);
    });
    passport.use(
        "github",
        new gitHubStrategy(
            {
                clientID: "Iv1.d79dab02884d99d1",
                clientSecret: "f5e54478c42388a0080c044713bd455a5daaaab6 ",
                callbackUrl: "http://localhost:8080/api/session/githubcallback",
                scope: ["user: email"]          
            },
            async (accessToken, refreshToken, profile, done) => {
                console.log("profile:",profile)
                try {
                    let user = await loginUserService(profile.user)
                    if (!user) {
                        let newUser = {
                            user: profile._json.login,                            
                            password: "",
                        };
                        let userAdded = await createUserService(newUser);
                        console.log("userAdded", userAdded);
                        done(null, userAdded);
                    } else {
                        done(null, user);
                    }
                } catch (error) {
                    return done(error);
                }
            }
        )
    );
};

module.exports = initPassport;
