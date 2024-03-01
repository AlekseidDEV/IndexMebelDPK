export const addObserverClass = () => {
    const deskObsElement = document.querySelectorAll('.desk_obs')

    deskObsElement.forEach((elem) => {
        if(elem.classList.contains('desk_obs')){
            elem.classList.remove('desk_obs')
            elem.classList.add('mobile_visible')
        }
    })
}