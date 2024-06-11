let currentFontSize = 16;

function increaseFontSize() {
    currentFontSize += 2;
    document.body.style.fontSize = currentFontSize + 'px';
}

function decreaseFontSize() {
    currentFontSize -= 2;
    document.body.style.fontSize = currentFontSize + 'px';
}

function changeColorScheme() {
    const scheme = document.getElementById('colorBlindness').value;
    document.body.className = '';
    if (scheme !== 'normal') {
        document.body.classList.add(scheme);
    }
}




