document.addEventListener('DOMContentLoaded', () => {
    const squeres = document.querySelectorAll('.grid div');
    const scoreDisplay = document.querySelector('.score span');
    const startBtn = document.querySelector('.start');

    const width = 10
    let currnteIndex = 0;
    let appleIndex = 0;
    let currentSnake = [2, 1, 0];
    let direction = 1;
    let score = 0;
    let speed = 0.9;
    let intervalTime = 0;
    let interval = 0;

    /* Iniciando e reinicianto o jogo */
    function startGame() {
        currentSnake.forEach(index => squeres[index].classList.remove('snake'));
        squeres[appleIndex].classList.remove('apple');
        clearInterval(interval)
        score = 0;
    }


    function control(e) {
        squeres[currentIndex].classList.remove('snake'); /* estamos removendo a classe de cobra de todos os quadrados */

        if(e.keyCode === 39) { /* Capturando evento de tecla das setas, definindo a direção da cobra */
            direction = 1;
        } else if(e.keyCode === 38) {
            direction = -width;
        } else if(e.keyCode === 37) {
            direction = -1;
        } else if(e.keyCode === 40) {
            direction = +width;
        }
    }

    document.addEventListener('keyup', control)
})