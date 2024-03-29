export const tabsStageWork = () => {
    const tabBlock = document.querySelector('.block_stages_info')
    const allTabsImg = document.querySelectorAll('.stages-image')
    
    let activeTab = document.querySelector('.active_stage_item')
    let activeImg = document.querySelector('.active_tab_img')
    let count = 0

    const changeTab = (targetTab) => {
        const countTab = targetTab.querySelector('.number_stage_')

        activeTab = document.querySelector('.active_stage_item')
        activeImg = document.querySelector('.active_tab_img')
        count = countTab.textContent.slice(1)
        
        activeTab.classList.remove('active_stage_item')
        targetTab.classList.add('active_stage_item')

        activeImg.classList.remove('active_tab_img')
        allTabsImg[count - 1].classList.add('active_tab_img')
        allTabsImg[count - 1].scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        })
    }
    
    tabBlock.addEventListener('click', (e) => {
        if(e.target.closest('.stage_item')){
            changeTab(e.target.closest('.stage_item'))
        }
    })
}