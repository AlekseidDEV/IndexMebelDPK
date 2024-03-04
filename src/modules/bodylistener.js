import { addObserverClass } from "./addobserverclass"
import { delObserverClass } from "./delobserverclass"
import { linkExtend } from "./linkextend"
import { observerCard } from "./observercard"
import { swapObserverElem } from "./observerswapelement"
import { observerTitles } from "./observertitles"
import { sendForm } from "./sendform"
import { sendFormReview } from "./sendformreview"
import { tabsStageWork } from "./tabsstagework";
import { tabsMobile } from "./tabsmobile";

export const bodyListener = () => {
    const btnRequisites = document.querySelector('.btn_requisites')
    const linksExtand = document.querySelectorAll('.link_extend')

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
        
        if(innerWidth > 1100){
            tabsStageWork()
        } else if(innerWidth <= 1100){
            tabsMobile()
        }
    }
   
    const debounce = (func, ms) => {
        let timeOut

        return function(){
            clearTimeout(timeOut)
            timeOut = setTimeout(func, ms)
        }
    }
   
    linksExtand.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault()

            clicker = !clicker
            linkExtend(e.target, e.target.dataset['block_extended'], clicker)
        })
    })

    btnRequisites.addEventListener('click', () => {
        location.href = 'https://mebeldpk.ru/help/payment/'
    })

    document.addEventListener('submit', (e) => {
        e.preventDefault()
        if(e.target.id !== 'form-review' && e.target.id !== 'form-catalog'){
            sendForm(e.target)
        }else if(e.target.id === 'form-catalog'){
            sendForm(e.target, {
                options : document.querySelector('.active_option div[data-socials]')
            })
        }else{
            sendFormReview(e.target, {
                addFile : document.querySelectorAll('.added_file'),
                starAcrive: document.querySelectorAll('.activeStar')
            })
        }   
    })

    window.addEventListener('resize', debounce(startModules, 1000))
    window.addEventListener('load', startModules)
}