const buttons = document.querySelectorAll('.ripple');
buttons.forEach(buton => {
    buton.addEventListener('click', function (e) {
        const x = e.clientX;
        const y = e.clientY;
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circleEl = document.createElement('span');
        circleEl.classList.add('circle');
        circleEl.style.top = yInside + 'px';
        circleEl.style.left = xInside + 'px';

        this.appendChild(circleEl);

        setTimeout(()=> circleEl.remove(),500)
    })
})






