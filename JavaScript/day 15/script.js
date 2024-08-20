let count = 0;
function increaseCounter() {
    count++;
    document.getElementById('counterP').innerText = count;
    document.getElementById('counterDiv').style.backgroundColor = getRandomColor();
    document.getElementById('counterP').style.color = getRandomColor();
}


function switchImage() {
    let img = document.getElementById('switchImage');
    img.src = img.src.endsWith('image1.jpg') ? 'images/image2.jpg' : 'images/image1.jpg';
}

function generateRandomNumbers() {
    for (let i = 1; i <= 5; i++) {
        document.getElementById('random' + i).innerText = Math.floor(Math.random() * 10) + 1;
    }
}



function changeLink() {
    document.getElementById('changeableLink').href = "http://changed.com";
    document.getElementById('linkDiv').style.backgroundColor = getRandomColor();
}


function changeBorderColor() {
    let elements = document.getElementsByClassName('borderClass');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.borderColor = getRandomColor();
    }
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
