class UserDto {
    constructor(_id, user, email, idCart, password, rol) {
        this._id = _id;
        this.user = user;
        this.email = email;
        this.idCart = idCart;
        this.password = password;
        this.rol = rol;
    }
}
module.exports = UserDto;