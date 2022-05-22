const technologiesButtons = document.querySelectorAll('.portfolio__button'),
    technologiesList = document.querySelectorAll('.portfolio__technologies')

technologiesButtons.forEach((buttons, buttonsIdx) => {
    buttons.addEventListener('click', () => {
        technologiesList[buttonsIdx].classList.toggle('portfolio__technologies-active')
    })
})