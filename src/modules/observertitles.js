export const observerTitles = () => {
    const h2Titles = document.querySelectorAll('.h2_obs')
    const h3Titles = document.querySelectorAll('.h3_obs')

    const animateFunc = (entries, observer) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('visible_title_h2')
                observer.unobserve(entry.target)
            }
        })
    }
    
    const titlesObserverh2 = new IntersectionObserver(animateFunc, {
        rootMargin: "50px",
        threshold: 0.3
    })

    const titlesObserverh3 = new IntersectionObserver(animateFunc, {
        rootMargin: "50px",
        threshold: 0.3
    })

    h2Titles.forEach((title) => {
        titlesObserverh2.observe(title)
    })
    h3Titles.forEach((title) => {
        titlesObserverh3.observe(title)
    })
}