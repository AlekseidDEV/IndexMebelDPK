import { changeOption } from "./changeoption"
import { animateFunc } from "./helpers/animate"

export const dropDownmenu = () => {
    const dropDownArrow = document.querySelector('.dropp_down')
    const options = document.querySelector('.options')
    const listOption = document.querySelector('.options_list')

    let clicker = false

    const dropMenu = (e) => {
        clicker = !clicker

        let initialOpacity = 1
        let initialtransform = 180

        if(clicker){
            listOption.style.visibility = 'visible'
            animateFunc({
                duration: 200, 
                timing(timeFraction){
                  return timeFraction
                },
                draw(progress){
                    dropDownArrow.style.transform = `rotate(${progress * -180}deg)`
                    listOption.style.top = `${progress * 53}px`
                    listOption.style.opacity = `${progress}`
                } 
              })
        } else {
            animateFunc({
                duration: 150, 
                timing(timeFraction){
                  return timeFraction
                },
                draw(progress){
                    listOption.style.opacity = `${initialOpacity - progress}`
                    dropDownArrow.style.transform = `rotate(${initialtransform - progress * -180}deg)`
                } 
              })
              listOption.style.visibility = 'hidden'
        }
    }

    options.addEventListener('click', (e) => {
        e.preventDefault()

        if(e.target.closest('.active_option')){
            dropMenu()
        } else if(e.target.closest('.options_list')){
            changeOption(e, e.target.closest('div[data-socials]'))
            dropMenu()
        }
    })
}