const UserRepository = require('../db/repository/userRepo.js');
const userRepo = new UserRepository();
const { createCartService } = require('../services/cartsService.js')

const createUserService = async (user) => {
    const newCart = await createCartService();

    const newUs = await userRepo.createUserRepo(user, newCart._id)
    return newUs
};

const loginUserService = async (user) => {
    const userMongoDb = await userRepo.findUserRepo(user);
    return userMongoDb;
};

const getUserEmailService = async (userEmail) => {
    const username = await userRepo.getUserByEmailRepo(userEmail)
    return username
};

const getUserIdService = async (id) => {
    const username = await userRepo.getUserByIdRepo(id)
    return username
};

const getUserByEmailPassportService = async (email) => {
    const username = await userRepo.getUserByEmailPassportRepo(email)
    return username
};

const updatePasswordService = async (idUser, newPassword) => {
    const res = await userRepo.updatePasswordRepo(idUser, newPassword)
    return res
};

const deleteUserService = async (uid) => {
    const res = await userRepo.deleteUserRepo(uid)
    return res
};

const updateDocumentsService = async (uid, documentStatus) => {
    const validDocumentNames = ["IDENTIFICACION", "DOMICILIO", "ESTADO"];
    const invalidDocuments = documentStatus.filter(doc => !validDocumentNames.includes(doc.name.toUpperCase()));
    if (invalidDocuments.length > 0) {
        const errorDocumentText = invalidDocuments.length > 1 ? "Nombres de documentos no válidos" : "Nombre de documento no válido";
        throw new Error(`${errorDocumentText}: ${invalidDocuments.map(doc => doc.name).join(', ')}`);
    }
    const result = await userRepo.updateDocumentsStatus(uid, documentStatus);
    if (result.duplicateDocuments.length > 0) {
        const errorDocumentText = result.duplicateDocuments.length > 1 ? "Documentos existentes" : "Documento existente";
        throw new Error(`${errorDocumentText}: ${result.duplicateDocuments.join(', ')}`);
    }
    return result.user;
}

const generateDocumentURL = (file, userName) => {
    const baseUrl = `${userName}/`;
    const fileName = file.filename;
    const documentURL = baseUrl + fileName;
    return documentURL; 
}

module.exports = { createUserService, loginUserService, getUserEmailService, getUserIdService, getUserByEmailPassportService, updatePasswordService, deleteUserService, updateDocumentsService, generateDocumentURL };



/* const updateDocumentsService = async (uid, documentStatus) => {
    const validDocumentNames = ["IDENTIFICACION", "DOMICILIO", "ESTADO"];
    const invalidDocuments = documentStatus.filter(doc => !validDocumentNames.includes(doc.name.toUpperCase()));
    if (invalidDocuments.length > 0) {
        const errorDocumentText = invalidDocuments.length > 1 ? "Nombres de documentos no válidos" : "Nombre de documento no válido";
        throw new Error(`${errorDocumentText}: ${invalidDocuments.map(doc => doc.name).join(', ')}`);
    }
    const result = await userRepo.updateDocumentsStatus(uid, documentStatus);
    if (result.duplicateDocuments.length > 0) {
        const errorDocumentText = result.duplicateDocuments.length > 1 ? "Documentos existentes" : "Documento existente";
        throw new Error(`${errorDocumentText}: ${result.duplicateDocuments.join(', ')}`);
    }
    return result.user;
} */