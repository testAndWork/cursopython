document.addEventListener('DOMContentLoaded',() => {
    document.addEventListener('click',(event) => {  
        const circulo = document.createElement('div');
        circulo.className = 'circulo';
        circulo.style.left = `${event.clientX -25}px`; 
        circulo.style.top = `${event.clientY -25}px`;

        circulo.addEventListener('mouseenter', () =>{
            circulo.style.transform = 'scale(1.5)'; 
        });

        circulo.addEventListener('mouseleave', () =>{
            circulo.style.transform = 'scale(1)'; 
        });
        document.body.appendChild(circulo);

    });
});