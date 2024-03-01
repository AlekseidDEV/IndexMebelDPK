export const addObserverClass = () => {
    const deskObsElement = document.querySelectorAll('.desk_obs')

    deskObsElement.forEach((elem) => {
        elem.classList.remove('.desk_obs')
        elem.classList.add('.mobile_visible')
    })
    
    console.log('add class');
    window.stateFunc = true
}