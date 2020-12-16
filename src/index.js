import { fun1 } from './es6_module';
import moment from 'moment';
import css from './css_module.css';
import pic from './images/apollo.png';
console.log(fun1(1, 2));
console.log(pic);
const div = document.createElement('div');
const div1 = document.createElement('div');
div1.className = css.test;
div1.innerText = 'css test';
const img = document.createElement('img');
img.src = pic;
div.appendChild(div1);
div.appendChild(img);
const html = `
    <div class="${css.test}">css test</div>
    <img src="${pic}" alt="">
`;
window.onload = () => {
    document.getElementById('content').appendChild(div);
    console.log(moment());
};
