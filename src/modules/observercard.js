export const observerCard = () => {
    const elementArr = [
        {elem: document.querySelector('.block_card_five_categ')},
        {elem: document.querySelector('.block_cause_card')},
        {elem: document.querySelector('.card_block_target')},
        {elem: document.querySelector('.block_card_sales')},
        {elem: document.querySelector('.wrapp_soc_sup')},
    ]

    const cardAnimate = (parentElem, cardClass, time = 400) => {
        const cards = parentElem.querySelectorAll(cardClass)

        cards.forEach((card, index) => {
            const delay = index * time

            setTimeout(() => {
                card.classList.add('card_visible')
            }, delay)
        })
    }

    const observationHandler = (entries, observer) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting && entry.target.matches('.block_card_five_categ')){
                cardAnimate(entry.target, '.card_five_categ', 300)
                observer.unobserve(entry.target)
            } else if(entry.isIntersecting && entry.target.matches('.block_cause_card')){
                cardAnimate(entry.target, '.cause_card', 200)
                observer.unobserve(entry.target)
            } else if(entry.isIntersecting && entry.target.matches('.card_block_target')){
                cardAnimate(entry.target, '.card_anim', 100)
                observer.unobserve(entry.target)
            } else if(entry.isIntersecting && entry.target.matches('.block_card_sales')){
                cardAnimate(entry.target, '.card_anim ', 300)
                observer.unobserve(entry.target)
            } else if(entry.isIntersecting && entry.target.matches('.wrapp_soc_sup')){
                cardAnimate(entry.target, '.card_anim ', 150)
                observer.unobserve(entry.target)
            }
        })
    }

    const observerCard = new IntersectionObserver(observationHandler, {
        rootMargin: "50px",
        threshold: 0.3
    })

    elementArr.forEach((elem) => {
        observerCard.observe(elem.elem)
    })
}