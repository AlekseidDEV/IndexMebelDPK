export const scrollBlock = () => {
    const scrollBlock = document.querySelector('.reviews_area')
    const blurBlock = document.querySelector('.blur_block')

    const openDescription = (linktarget, reviewItem, clicker) => {
        const textItem = reviewItem.querySelector('.all_text_reviews')

        if(clicker){
            linktarget.classList.add('grey_hide')
            linktarget.textContent = 'Свернуть'
            textItem.style.maxHeight = `${textItem.scrollHeight}px`
        } else{
            linktarget.classList.remove('grey_hide')
            linktarget.textContent = 'Развернуть'
            textItem.style.maxHeight = `90px`
        }
    }
    
    scrollBlock.addEventListener('click', (e) => {
        e.preventDefault()
        if(e.target.className === 'review_ext'){
            console.log(1);
            openDescription(e.target, e.target.closest('.reviews_item'), true)
        } else if(e.target.matches('.review_ext.grey_hide')){
            openDescription(e.target, e.target.closest('.reviews_item'), false)
        }
    })
    scrollBlock.addEventListener('scroll', (e) => {
        const isEndReached = e.target.scrollTop + e.target.clientHeight

        if(isEndReached >= e.target.scrollHeight - 150){
            blurBlock.style.opacity = '0'
        } else{
            blurBlock.style.opacity = '1'
        }
    })
}