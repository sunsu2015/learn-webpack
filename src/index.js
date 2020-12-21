import { fun1, getInfo } from './es6_module';
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
    <div class="${css.test}" id="test">css test</div>
    <img src="${pic}" alt="">
`;
window.onload = async () => {
    document.getElementById('content').appendChild(div);
    const test = document.getElementById('test');
    test.addEventListener('click', (e) => {
        e.target.innerText = fun1(1, 2);
    });
    console.log(await getInfo());
    /**
     * 将es6_module设置为热更新模块
     * */
    if (module.hot) {
        module.hot.accept('./es6_module', () => {
            console.log('es6_module reload');
        })
        // module.hot.accept('./index', () => { // 不可能对本身做热更新
        //     console.log('index reload');
        // })
    }
};
