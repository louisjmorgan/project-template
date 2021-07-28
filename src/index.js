import './styles.css';

const dropDownBtn = document.querySelector('.dropDownBtn');
const dropDownList = document.querySelector('.dropDownList');
dropDownBtn.addEventListener('click', () => {
    dropDownList.style.display = 'block';
});