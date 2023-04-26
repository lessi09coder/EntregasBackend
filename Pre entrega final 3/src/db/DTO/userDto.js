class UserDto {
    constructor(_id, user, email, cartId, password, rol) {
        this._id = _id;
        this.user = user;
        this.email = email;
        this.cartId = cartId;
        this.password = password;
        this.rol = rol;
    }
}
module.exports = UserDto;