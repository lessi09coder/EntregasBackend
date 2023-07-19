const multer = require('multer');
const path = require('path');

/* const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let destinationPath = path.join(__dirname, '../uploads/documents')            
        cb(null, destinationPath);
    },
    filename: (req, file, cb) => {      
        console.log(file)  
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage: storage }); */

const uploadFilesMulter = () => {

    const storage = multer.diskStorage({
        destination: './upload/documents'
       ,
        filename: (req, file, cb) => {
            //console.log(null, Date.now() + path.extname(file.originalname))
            cb(null, Date.now() + path.extname(file.originalname));
        }
    });

    const upload = multer({ storage: storage }).array('files')
    return upload
}

module.exports = uploadFilesMulter;

//module.exports = upload;

/*  destination: (req, file, cb) => {
            let destinationPath = ''
            console.log(path.join(__dirname, '../uploads/documents'))
            destinationPath = path.join(__dirname, '../uploads/documents')
            cb(null, destinationPath);
        }*/

/* 
if (file.fieldname == "document") {
    destinationPath = path.join(__dirname, '../uploads/profiles')
}
  */
/* switch (file.fieldname) {
    case 'profile':
        destinationPath = path.join(__dirname, '../uploads/profiles');
        break;
    case 'product':
        destinationPath = path.join(__dirname, '../uploads/products');
        break;
    case 'document':
        destinationPath = path.join(__dirname, '../uploads/profiles';
        break;
} */