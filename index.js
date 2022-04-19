const state = {
    a: "apple",
    b: "banana",
    c: "city",
    d: "dom",
    e: "end",
    f: "forEach"
};

// w3 select option

const render = (ele, tmp) => {
    ele.innerHTML = tmp;
}
const keyele = document.getElementById('key');
const valele = document.getElementById('val');

const eventListener = (element) => {
    element.addEventListener('change', (e) => {
        selected = e.target.value;
        createDropDown();
    });
}

let selected;
const createDropDown = () => {
    let keystmp = '';
    let valstmp = '';
    Object.keys(state).forEach(key => {
        keystmp += `<option value="${key}" ${selected === key ? 'selected' : ''}>${key}</option>`;
        valstmp += `<option value="${key}" ${selected === key ? 'selected' : ''}>${state[key]}</option>`;  
    });
    render(keyele, keystmp);
    render(valele, valstmp);
}

createDropDown();
eventListener(keyele);
eventListener(valele);


