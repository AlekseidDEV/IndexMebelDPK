import Swiper from "swiper";
import {Navigation,Pagination} from 'swiper/modules';

export const sliderWorker = () => {
    const blockArrowSlider = document.querySelector('.wrapper_our_slide_arr')

    const slider = new Swiper('.slider_container_work', {
        slidesPerView: 1,
        grabCursor: true,
        spaceBetween: 20,
        passiveListeners: true,
        slideClass: 'worker_card',
        wrapperClass: 'block_card_work',
        modules: [Navigation, Pagination],
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        updateOnWindowResize: true,
        breakpoints: {
            480: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            830: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1190: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1300: {
                slidesPerView: 4,
                spaceBetween: 60,
            },
            1500: {
                slidesPerView: 4,
                spaceBetween: 80,
            },
        },
    })

    blockArrowSlider.addEventListener('click', (e) => {
        e.preventDefault()
        if (e.target.id === 'left_arrow1') {
            slider.slidePrev()
        } else if (e.target.id === 'right_arrow1') {
            slider.slideNext()
        }
    })
}