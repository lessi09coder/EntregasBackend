const tokenRamdon = () => {
    let tokenRan = '';
    for (let i = 0; i < 6; i++) {
        const num = Math.floor(Math.random() * 9) + 1; 
        tokenRan += num;
    }
    return tokenRan.toString();
};

module.exports = {tokenRamdon}