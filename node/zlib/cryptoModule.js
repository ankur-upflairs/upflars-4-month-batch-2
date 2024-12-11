const crypto= require('crypto');


let key= crypto.randomBytes(32);
// console.log(key.toString('hex'));

let iv= crypto.randomBytes(16);
let text = 'hello world'
const algorithm = 'aes-256-cbc';
const encrypt = (text) => {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  };

  const encryptedText = encrypt(text)

  const decrypt = (encryptedText) => {
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  };

const decryptedText = decrypt(encryptedText)
// console.log(decryptedText)

const password = 'userpassword';
const salt = crypto.randomBytes(16);

crypto.scrypt(password, salt, 64, (err, derivedKey) => {
  if (err) throw err;
  console.log(`Hashed Password: ${derivedKey.toString('hex')}`);
});



