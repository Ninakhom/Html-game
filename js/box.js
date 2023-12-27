let x = 0
let y = 0

let fx = 0
let fy = 0

let score=0
const box = document.getElementById('box')
const frog = document.getElementById('frog')


function frogJump() {
    fx = Math.floor(Math.random() * 130) * 10;
    fy = Math.floor(Math.random() * 76) * 10;

    frog.style.top = fy + 'px'
    frog.style.left = fx + 'px'
}


function move(direction) {
    const xx= `: x: ${x}, y: ${y}, fx: ${fx}, fy: ${fy} `
    document.getElementById('Score').innerHTML = score+xx
    if(x==fx && y==fy){
        score++
        
        frogJump()
    }
    switch (direction) {
        case 'up':
            y -= 10
            break;
        case 'down':
            y += 10
            break;
        case 'right':
            x += 10
            break;
        case 'left':
            x -= 10
            break;

    }
    box.style.top = y + 'px'
    box.style.left = x + 'px'
}

document.addEventListener('keydown', function (event) {
    console.log(event.key)
    switch (event.key) {
        case 'ArrowUp':
            move('up')
            break;
        case 'ArrowDown':
            move('down')
            break;
        case 'ArrowLeft':
            move('left')
            break;
        case 'ArrowRight':
            move('right')
            break;
        case 'j':
            frogJump()
            break;

    }


})



