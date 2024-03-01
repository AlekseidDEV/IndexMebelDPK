export const linkExtend = (targetLink, selector, clicker) => {
    const blockExtended = document.querySelector(selector)

    if(clicker){
        targetLink.textContent = 'Скрыть'
        targetLink.classList.add('grey_hide')
        blockExtended.classList.add('expended')
    } else{
        targetLink.textContent = 'Развернуть'
        targetLink.classList.remove('grey_hide')
        blockExtended.classList.remove('expended')
    }
}