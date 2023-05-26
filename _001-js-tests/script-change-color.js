const changeit = document.getElementById('change-it');

changeit.addEventListener('click', () => {
    const vermelho = Math.floor(Math.random() * 256);
    const verde = Math.floor(Math.random() * 256);
    const azul = Math.floor(Math.random() * 256);
    const color = "#" + vermelho.toString(16) + verde.toString(16) + azul.toString(16);
    document.body.style.backgroundColor = color;
    console.log(color);
});