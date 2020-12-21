import axios from 'axios';
const fun1 = (a, b) => {
    return a / b;
}

const fun2 = (a, b) => {
    return a - b;
}

const getInfo = async () => {
    return await axios.get('/api/info');
}

export {
    fun1,
    fun2,
    getInfo
};