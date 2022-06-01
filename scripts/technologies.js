const technologiesButtons = document.querySelectorAll('.portfolio__button'),
    technologiesList = document.querySelectorAll('.portfolio__technologies')

technologiesButtons.forEach((buttons, buttonsIdx) => {
    buttons.addEventListener('click', () => {
        technologiesList[buttonsIdx].classList.toggle('portfolio__technologies-active')
    })
})

const buttonAll = document.querySelector('.navigations-all'),
    buttonReact = document.querySelector('.navigations-react'),
    listAll = document.querySelector('.portfolio-all'),
    listReact = document.querySelector('.portfolio-react')

listAll.classList.remove('portfolio-all')

buttonAll.addEventListener('click', () => {
    listReact.classList.add('portfolio-react')
    listAll.classList.remove('portfolio-all')
})

buttonReact.addEventListener('click', () => {
    listReact.classList.remove('portfolio-react')
    listAll.classList.add('portfolio-all')
})