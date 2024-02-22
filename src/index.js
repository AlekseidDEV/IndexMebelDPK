import { sliderWorker } from "./modules/sliderworker";
import { showRoomSlider } from "./modules/showroomslider";
import { swiperMobile } from "./modules/swipermobile";

import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';



sliderWorker()
showRoomSlider()
swiperMobile()
// if(window.innerWidth <= 785){
//     swiperMobile()
// }

