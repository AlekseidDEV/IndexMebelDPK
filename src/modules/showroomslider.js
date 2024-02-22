import Swiper from "swiper";
import {EffectFade} from "swiper/modules";

export const showRoomSlider = () => {
    const sliderArrow = document.querySelector('.slider_arrow')
    const slideBar = document.querySelector('.block_slidebar_arrows .slide_bar')

    const slider = new Swiper('.cont_slider-show_room', {
        slideClass: 'slide_show',
        modules: [EffectFade],
        allowTouchMove: false,
        effect: "fade",
    })

    const prevFraction = (fractions, index) => {
        const activeFraction = slideBar.querySelector('.active_bar')
        
        activeFraction.classList.remove('active_bar')
        fractions[index].classList.add('active_bar')
    }

    const nextFraction = (fractions, index) => {
        const activeFraction = slideBar.querySelector('.active_bar')
        
        activeFraction.classList.remove('active_bar')
        fractions[index].classList.add('active_bar')
    }

    const addFraction = () => {
        for(let item = 0; item <= slider.slides.length - 1; item++){
            const newDiv = document.createElement('div')
            slideBar.appendChild(newDiv)
        }

        slideBar.querySelectorAll('div').forEach((elem, index) => {
            if(index === 0){
                elem.classList.add('progress_bar', 'active_bar')
            } else{
                elem.classList.add('progress_bar')
            }
        })
    }

    addFraction()

    sliderArrow.addEventListener('click', (e) => {
        e.preventDefault()

        if(e.target.id === 'left_arrow'){
            slider.slidePrev()
            prevFraction(slideBar.querySelectorAll('div'), slider.activeIndex)
        } else if(e.target.id === 'right_arrow'){
            slider.slideNext()
            nextFraction(slideBar.querySelectorAll('div'), slider.activeIndex)
        }
    })
}