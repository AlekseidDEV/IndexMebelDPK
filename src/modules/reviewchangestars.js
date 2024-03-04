export const reviewChange = () => {
   const starsBlock = document.querySelector('.put_stars')
   const allStars = document.querySelectorAll('.star_grey')

   let activeStars = document.querySelectorAll('.activeStar')

   let idnexLevel = -1
   let prevIndex = 0

    const effectVisibleStars = (indexActive) => {
        activeStars = document.querySelectorAll('.activeStar')
        prevIndex = activeStars.length -1

        if(indexActive > prevIndex){
            for(let i = 0; i <= indexActive; i++){
                allStars[i].classList.add('activeStar')
            }
        } else if(indexActive < prevIndex){
            for(let i = +indexActive + 1; i <= prevIndex; i++){
                allStars[i].classList.remove('activeStar')
            }
        }
    }

   const changeStars = (targetStar) => {
        activeStars = document.querySelectorAll('.activeStar')
        
        allStars.forEach((star, index) => {
            if(targetStar === star){
                idnexLevel = index
            }
        })

        if(idnexLevel >= activeStars.length - 1){
            for(let i = 0; i <= idnexLevel; i++){
                allStars[i].classList.add('activeStar')
            }
        } else if(idnexLevel < activeStars.length - 1){
            for(let i = idnexLevel + 1; i < activeStars.length; i++){
                allStars[i].classList.remove('activeStar')
            }
        } 
   }

starsBlock.addEventListener('click', (e) => {
    if(e.target.closest('.put_stars')){
        changeStars(e.target)
    } 
   })
starsBlock.addEventListener('mouseover', (e) => {
    if(e.target.matches('.star_grey')){
        effectVisibleStars(e.target.dataset['index_vidible'])
    } 
})

starsBlock.addEventListener('mouseleave', (e) => {
    activeStars = document.querySelectorAll('.activeStar')

    activeStars.forEach((star) => {
         star.classList.remove('activeStar')
    })
    changeStars()
})
}