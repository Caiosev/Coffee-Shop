/* Show menu */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

function clickMenuLink(){
   navMenu.classList.remove('show-menu')
}
  
navLink.forEach(n => n.addEventListener('click',clickMenuLink))

function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY>=50){
    header.classList.add('scroll-header')
    }else{
        header.classList.remove('scroll-header')
    }
}

window.addEventListener('scroll', scrollHeader)

var mixerProd = mixitup('.produtos__content', {
    selectors: {
        target: '.produtos__card'
    },
    animation: {
        duration: 350
    }
})

mixerProd.filter('.igua')

const linkPod = document.querySelectorAll('.produtos__item')

function activeProducts(){
    linkPod.forEach(l=> l.classList.remove('produtos__ativo'))
    this.classList.add('produtos__ativo')
}

linkPod.forEach(l => l.addEventListener('click', activeProducts))


function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY>=350){
        scrollUp.classList.add('show-scroll')
    }else{
        scrollUp.classList.remove('show-scroll')
    }
}

window.addEventListener('scroll', scrollUp)

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')
              console.log(sectionId)
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

onload = () =>{
    const load = document.getElementById('load')

    setTimeout(()=>{
        load.style.display = 'none'
    },2300)
}
