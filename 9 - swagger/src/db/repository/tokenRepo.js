const TokenDao = require('../DAO/token.dao.js');

class TokenRepository {
    constructor() {
        this.tokenDao = new TokenDao();
    }

    async findTokenByUserId(userId) {
        try {
            return await this.tokenDao.findTokenByUserId(userId);            
        } catch (error) {
            return { error: error.message };
        }
    }

    async deleteTokenById(tokenId) {
        try {
            await this.tokenDao.deleteTokenById(tokenId);
        } catch (error) {
            return { error: error.message };
        }
    }

    async updateToken(tokenReset) {
        try {
            return await this.tokenDao.updateToken(tokenReset);
        } catch (error) {
            return { error: error.message };
        }
    }

    async createToken(token, userId, expiresAt) {
        try {
            return await this.tokenDao.createToken(token, userId, expiresAt);
        } catch (error) {
            return { error: error.message };
        }
    }
}

module.exports = TokenRepository;