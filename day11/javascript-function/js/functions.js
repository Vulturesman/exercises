const setHeadline = () => {
    let element = document.getElementById('headline');
    element.innerHTML = ('JavaScript functions')
}

// const input = prompt('Write your input');

// const changeOther = () => {
//     let head = document.getElementById('headline-other')
//     head.innerHTML = (input)
// }

const test = (id, text) => {
    let checkElement = document.getElementById(id);
    checkElement.innerHTML = text;
}