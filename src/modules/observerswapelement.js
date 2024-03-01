export const swapObserverElem = () => {
    const arrElemSwap = [
        {elem : document.querySelector('.wrapper_swap')},
        {elem : document.querySelector('.wrapper_cause_swap')},
        {elem : document.querySelector('.wrapper_invite_texts_block')},
        {elem : document.querySelector('.showroom_slider_block')},
        {elem : document.querySelector('.block_leave_review')},
        {elem : document.querySelector('.block_approah_cont')},
        {elem : document.querySelector('.block_support_service')},
        {elem : document.querySelector('.get_swap')},
        {elem : document.querySelector('.block_stages_worker')},
        {elem : document.querySelector('.block_addres_mag')},
        {elem : document.querySelector('.block_slider_text')},
        {elem : document.querySelector('.swap_stil_wrapp')},
        {elem : document.querySelector('.block_reviews_areas')},
        {elem : document.querySelector('.slider_container_work ')}
    ]

    const swapElemAnimate = (entries, observer) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.style.cssText = `
                opacity: 1;
                transform: translateY(0);
                transition: opacity 1s, transform 1s;
                `
                observer.unobserve(entry.target)
            }
        })
    }

    const observerSwap = new IntersectionObserver(swapElemAnimate, {
        rootMargin: "100px",
        threshold: 0.2
    })

    arrElemSwap.forEach((elem) => {
        observerSwap.observe(elem.elem)
    })
}