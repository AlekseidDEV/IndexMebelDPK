import Swiper from "swiper";

export const sliderWorker = (container, wrapper, slide) => {
    const slider = new Swiper('.swiper', {
        
    })

    const blockArrowSlider = document.querySelector('.wrapper_our_slide_arr')
    const slides = document.querySelectorAll(slide)

    const addFractionSlideBar = () => {
        for(let fraction = 0; fraction <= slides.length; fraction++){
            const newFraction = document.createElement('div')
        }
    }

    addFractionSlideBar()
}