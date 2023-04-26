class UserDto {
    constructor(_id, user, email, password, rol, cartId) {
        this._id = _id
        this.user = user        
        this.email = email
        this.rol = rol        
        this.password = password
        this.cartId = cartId
    }
}
module.exports = UserDto;