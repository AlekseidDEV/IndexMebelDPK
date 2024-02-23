import { sliderWorker } from "./modules/sliderworker";
import { showRoomSlider } from "./modules/showroomslider";
import { swiperMobile } from "./modules/swipermobile";
import { scrollBlur } from "./modules/scrollblur";
import { reviewChange } from "./modules/reviewchange";

import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


const swiperTargetSetting = {
    centerSwiper : true, 
    spaceBetween : 30, 
    slidesView : 'auto'
}

const swiperCauseSetting = {
    centerSwiper : true, 
    spaceBetween : 30, 
    slidesView : 'auto'
}


sliderWorker()
showRoomSlider()
scrollBlur()
reviewChange()

swiperMobile(".container_swiper_wrapper", ".card_block_target", ".card_target", '.dots_mobile_wrapper', 601, swiperTargetSetting)
swiperMobile(".container_swiper_cause", ".block_cause_card", ".cause_card", '.wrapper_dots_cause', 727, swiperCauseSetting)


// document.addEventListener('click', (e) => {
//     e.preventDefault()
// })

