const textappear = document.getElementById('change-it');


setInterval(() => {
    textappear.dispatchEvent(new MouseEvent('click'));
}, 10000);

textappear.addEventListener('click', () => {
    const text = document.createElement('h1');
    var redText = Math.floor(Math.random() * 256);
    var greenText = Math.floor(Math.random() * 256);
    var blueText = Math.floor(Math.random() * 256);
    var colorText = "#" + redText.toString(16) + greenText.toString(16) + blueText.toString(16);
    text.textContent = 'deu certo :]';
    text.style.color = colorText;
    text.style.fontSize = '100px';
    text.style.textAlign = 'center';
    text.style.fontFamily = 'sans-serif';
    text.style.position = 'absolute';
    text.style.top = '300px';
    document.body.appendChild(text);

    
    const btn = document.createElement('button');
    var redBg = Math.floor(Math.random() * 256);
    var greenBg = Math.floor(Math.random() * 256);
    var blueBg = Math.floor(Math.random() * 256);
    var colorBg = "#" + redBg.toString(16) + greenBg.toString(16) + blueBg.toString(16);
    document.body.style.backgroundColor = colorBg;
    btn.textContent = 'que bom';
    document.body.appendChild(btn);

    const circle = document.createElement('div');
    var redCircle = Math.floor(Math.random() * 256);
    var greenCircle = Math.floor(Math.random() * 256);
    var blueCircle = Math.floor(Math.random() * 256);
    var colorCircle = "#" + redCircle.toString(16) + greenCircle.toString(16) + blueCircle.toString(16);
    circle.style.width = '500px';
    circle.style.height = '500px';
    circle.style.borderRadius = '50%';
    circle.style.position = 'absolute';
    circle.style.top = '150px';
    circle.style.backgroundColor = colorCircle;
    circle.style.zIndex = '-1';
    document.body.appendChild(circle);


    setInterval(() => {
        btn.dispatchEvent(new MouseEvent('click'));
    },5000);


    btn.addEventListener('click', () => {
        setTimeout(() => {
    
            text.style.transition = 'opacity 1s, top 1s';
            text.style.opacity = '0%';
            text.style.top = '100px';

            circle.style.transition = 'scale 1s, opacity 1s';
            circle.style.scale = '0%';
            circle.style.opacity = '0%';

        },1000)
        
        setTimeout(() => {
            if (text.parentNode === document.body){
                document.body.removeChild(text);
            }
            if (btn.parentNode === document.body){
                document.body.removeChild(btn);
            }
            if (circle.parentNode === document.body){
                document.body.removeChild(circle);
            }
        }, 1500)
        
    });
   
});
