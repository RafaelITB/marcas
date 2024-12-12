
// Exercici 1
document.getElementById('change-text-button').onclick = () => {
    if (document.getElementById('text-paragraph').textContent == 'Aquest és el text canviat.') {
        document.getElementById('text-paragraph').textContent = 'Aquest és el text original.';
    } else { 
        document.getElementById('text-paragraph').textContent = 'Aquest és el text canviat.';
    }
};
// Exercici 2
document.getElementById('change-bg-button').onclick = () => {
    const color = document.getElementById('color-input').value;
    document.getElementById('background-div').style.backgroundColor = color;
};
// Exercici 3
document.getElementById('alert-button').onclick = () => {
    const text = document.getElementById('alert-input').value;
    alert(text);
};
// Exercici 4
document.getElementById('validate-email-button').onclick = () => {
    const email = document.getElementById('email-input').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const errorMessage = document.getElementById('email-error');

    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Adreça de correu electrònic no vàlida!';
    } else {
        errorMessage.textContent = '';
    }
};
// Exercici 5
document.getElementById('hide-button').onclick = () => {
    document.getElementById('hide-me').style.display = 'none';
};
// Exercici 6
document.getElementById('toggle-button').onclick = () => {
    const toggleDiv = document.getElementById('toggle-div');
    toggleDiv.style.display = (toggleDiv.style.display === 'none') ? 'block' : 'none';
};
// Exercici 7
document.getElementById('add-item-button').onclick = () => {
    const itemText = document.getElementById('list-item-input').value;
    const li = document.createElement('li');
    li.textContent = itemText;
    document.getElementById('item-list').appendChild(li);
};
// Exercici 8
document.getElementById('increment-button').onclick = () => {
    const counter = document.getElementById('counter');
    counter.textContent = parseInt(counter.textContent) + 1;
};
// Exercici 9
// script.js
document.getElementById('hover-div').onmouseover = () => {
    document.getElementById('hover-paragraph').textContent = 'Ratolí sobre el div!';
};
// Exercici 10
// script.js
document.getElementById('change-image-button').onclick = () => {
    const imageUrl = document.getElementById('image-url-input').value;
    document.getElementById('image').src = imageUrl;
};