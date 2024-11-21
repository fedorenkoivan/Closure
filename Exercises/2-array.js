'use strict';

const array = () => {
    const array = [];
    const iwantto = (n) => array[n];
    iwantto.push = (e) => array.push(e);
    iwantto.pop = () => array.pop();

    return iwantto;
};

module.exports = { array };
