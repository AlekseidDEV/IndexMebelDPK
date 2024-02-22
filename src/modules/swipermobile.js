import Swiper from "swiper";

export const swiperMobile = () => {
    const swiper = new Swiper('.container_swiper_wrapper', {
        wrapperClass: 'card_block_target',
        slideClass: 'card_target',
    })
}