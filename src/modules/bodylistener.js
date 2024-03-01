import { addObserverClass } from "./addobserverclass"
import { delObserverClass } from "./delobserverclass"
import { linkExtend } from "./linkextend"
import { observerCard } from "./observercard"
import { swapObserverElem } from "./observerswapelement"
import { observerTitles } from "./observertitles"

export const bodyListener = () => {
   
   let clicker = false
   
    const startModules = () => {
        if(window.innerWidth >= 1000){
            observerTitles()
            swapObserverElem()
            observerCard()
            delObserverClass()
        } else if(window.innerWidth < 1000){
            addObserverClass()
        }
    }
   
    const debounce = (func, ms) => {
        let timeOut

        return function(){
            clearTimeout(timeOut)
            timeOut = setTimeout(func, ms)
        }
    }
   
    document.addEventListener('click', (e) => {
        e.preventDefault()
        
        if(e.target.className === 'btn_requisites'){
            location.href = 'https://mebeldpk.ru/help/payment/'
        } else if(e.target.matches('.link_extend')){
            clicker = !clicker
            linkExtend(e.target, e.target.dataset['block_extended'], clicker)
        }
    })

    document.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log(e.target);
    })

    window.addEventListener('resize', debounce(startModules, 1000))
    window.addEventListener('load', startModules)
}