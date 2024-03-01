export const delObserverClass = () => {
    const deskObsElement = document.querySelectorAll('.mobile_visible')

    deskObsElement.forEach((elem) => {
        if(elem.classList.contains('mobile_visible')){
            elem.classList.remove('mobile_visible')
            elem.classList.add('desk_obs')
        }
    })
}