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
let selected;
const createDropDown = () => {
    let keystmp = '';
    let valstmp = '';
    Object.keys(state).forEach(key => {
            if(selected === key){
                keystmp += `<option value="${key}" selected>${key}</option>`;
                valstmp += `<option value="${key}" selected>${state[key]}</option>`;
            } else {
                keystmp += `<option value="${key}">${key}</option>`;
                valstmp += `<option value="${key}">${state[key]}</option>`;
            }
            
    });
    render(keyele, keystmp);
    render(valele, valstmp);
}

createDropDown();

keyele.addEventListener('change', e => {
    selected = e.target.value;  
    createDropDown();
});
valele.addEventListener('change', (e) => {
    selected = e.target.value;
    createDropDown();
});

