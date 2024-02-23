import Swiper from "swiper";

export const swiperMobile = (contClass, wrappClass, slideClass, dotsWrapper, widthWind, setting) => {
    const dotsBlock = document.querySelector(dotsWrapper)
    const slides = document.querySelectorAll(slideClass)
    const {centerSwiper, spaceBetween, slidesView} = setting

    let swiper = null

    const changeDots = (index) => {
        const activeDots = dotsBlock.querySelector('.dotActive')
        const allDots = dotsBlock.querySelectorAll('div')
        
        activeDots.classList.remove('dotActive')
        allDots[index].classList.add('dotActive')
    }

    const initSwiper = () => {
        swiper = new Swiper(contClass, {
                wrapperClass: wrappClass.slice(1),
                slideClass: slideClass.slice(1),
                spaceBetween: spaceBetween,
                slidesPerView: slidesView,
                centeredSlides: centerSwiper,
                init: true,
            });

          swiper.on('slideChange', () => {
            changeDots(swiper.activeIndex)
          })
    }

    const destroySwiper = () => {
        if(swiper){
            swiper.destroy()
        }
    }

    const debounce = (func, ms) => {
        let timeOut

        return function(){
            clearTimeout(timeOut)
            timeOut = setTimeout(func, ms)
        }
    }

    const watherWindowWidth = () => {
        if(window.innerWidth > widthWind){
                destroySwiper()
                swiper = null
        } else if(window.innerWidth <= widthWind && swiper === null){
                initSwiper()
        }
    }

    const addDots = () => {
        for(let item = 0; item <= slides.length - 1; item++){
            const newDot = document.createElement('div')

            dotsBlock.append(newDot)
        }

        dotsBlock.querySelectorAll('div').forEach((dot, index) => {
            if(index === 0){
                dot.classList.add('dot', 'dotActive')
            } else{
                dot.classList.add('dot')
            }
        })
    }

    addDots()

    window.addEventListener('load',  watherWindowWidth())
    window.addEventListener('resize', debounce(watherWindowWidth, 1000))
}