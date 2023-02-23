import { getUsersService, createUserService } from "../services/userService.js";


const getUsers = async (req, res) => {
    let users = await getUsersService()
    //console.log(users)
    /* let usersMapped = users.map(user=> {
        let newUser = {}
        newUser.name = user.name 
        newUser.lastname = user.lastname
        newUser.email = user.email }) */
    //console.log(usersMapped)
    //res.render('user', { users })
    
    //console.log(users)
    res.send(users)
};
    
const createUser= (req, res) => {
    let response = createUserService(req.body)
    res.send(response)
};


export { getUsers , createUser}