export const scrollBlock = () => {
    const scrollBlock = document.querySelector('.reviews_area')
    const blurBlock = document.querySelector('.blur_block')


    scrollBlock.addEventListener('scroll', (e) => {
        const isEndReached = e.target.scrollTop + e.target.clientHeight

        if(isEndReached >= e.target.scrollHeight - 150){
            blurBlock.style.opacity = '0'
        } else{
            blurBlock.style.opacity = '1'
        }
    })
}