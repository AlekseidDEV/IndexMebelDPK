export const tabsMobile = () => {
    const tabBlock = document.querySelector('.block_stages_info')
    const stageMobileArea = document.querySelectorAll('.mobile_stage_area')

    let activeTab = document.querySelector('.active_stage_item')
    let activeStageArea = document.querySelector('.active_area_')
    let count = 0

    const changeTab = (targetTab) => {
        const countTab = targetTab.querySelector('.number_stage_')

        activeTab = document.querySelector('.active_stage_item')
        activeStageArea = document.querySelector('.active_area_')
        count = countTab.textContent.slice(1)

        activeTab.classList.remove('active_stage_item')
        targetTab.classList.add('active_stage_item')
        
        activeStageArea.classList.remove('active_area_')
        stageMobileArea[count - 1].classList.add('active_area_')

        targetTab.scrollIntoView({
            behavior: 'instant',
            block: 'center'
        })
    }

    tabBlock.addEventListener('click', (e) => {
        if(e.target.closest('.stage_item')){
            changeTab(e.target.closest('.stage_item'))
        }
    })
}