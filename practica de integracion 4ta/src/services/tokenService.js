const TokenRepository = require('../db/repository/tokenRepo.js');

const tokenRepository = new TokenRepository();

const getTokenByUserIdService = async (userId) => {
    try {
        return await tokenRepository.findTokenByUserId(userId);
    } catch (error) {
        return { error: error.message };
    }
};

const deleteTokenByIdService = async (tokenId) => {
    try {
        await tokenRepository.deleteTokenById(tokenId);
    } catch (error) {
        return { error: error.message };
    }
};

const updateTokenService = async (tokenReset) => {
    try {
        return await tokenRepository.updateToken(tokenReset);
    } catch (error) {
        return { error: error.message };
    }
};

const createTokenService = async (token, userId, expiresAt) => {
    try {
        return await tokenRepository.createToken(token, userId, expiresAt);
    } catch (error) {
        return { error: error.message };
    }
};

module.exports = {
    getTokenByUserIdService,
    deleteTokenByIdService,
    updateTokenService,
    createTokenService,
};
