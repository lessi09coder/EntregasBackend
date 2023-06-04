class TokenDTO {
    constructor(_id, token, userId, expiresAt) {
        this._id = _id
        this.token = token;
        this.userId = userId;
        this.expiresAt = expiresAt;
    }
}
module.exports = TokenDTO;