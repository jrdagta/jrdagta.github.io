const playSound = function () {
    let element = document.createElement('div');
    element.setAttribute('style', 'display: none');
    element.innerHTML = `
      <audio autoplay loop>
        <source src="0YP2LsPHKI8_160.ogg" type="audio/ogg">
      </audio>
    `;
    document.body.appendChild(element);
    document.removeEventListener('click', playSound);
}
document.addEventListener('click', playSound);