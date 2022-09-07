// click show nav bar
let bar = document.querySelector('.bar')
let sect = document.querySelector('.sect')
let list = document.querySelector('.list')
let close = document.querySelector('.close')

window.onload = () => {
    sect.classList.remove('list')
}


bar.addEventListener('click', () => {
    sect.classList.add('list')
    close.onclick = () => {
        sect.classList.remove('list')
    }
})

// Loading Section

// let gif = document.querySelectorAll('.loading img');
// let active = document.querySelector('.active');


// window.onload = ()=>{
//     gif.classList.remove('activ')
// }

// ------------ Scroll to the top 

let span = document.querySelector('.Top')
let topblk = document.querySelector('.blk')

window.onscroll = () => {
    console.log(this.scrollY)

    if (this.scrollY >= 1577) {
        span.classList.add('blk')
    } else {
        span.classList.remove('blk')

    }

}