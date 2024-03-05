export const changeImgReview = () => {
    const changeBlock = document.querySelector('.block_inputs_imgfile')
    const messageParag = document.querySelector('.message_file')
    const activeChooce = document.querySelector('.active_choose input')

    let allSelectedZone = document.querySelectorAll('label[class="not_selected"]')

    let quantity = 0


    const delSelectedImg = (closeTargetIcon, label) => {
        quantity--

        if(activeChooce.getAttribute('disabled')) activeChooce.removeAttribute('disabled')
        
        closeTargetIcon.style.display = 'none'

        changeBlock.append(label)
        label.removeAttribute('style')
        label.classList.remove('added_file')

       allSelectedZone = document.querySelectorAll('label[class="not_selected"]')

       messageParag.textContent = `Добавлено фото: ${quantity} из 7`
    }

    const changeLabel = (e, selectedFile) => {
        const reader = new FileReader()
        let closeIcon
        
        allSelectedZone = document.querySelectorAll('label[class="not_selected"]')
        reader.readAsDataURL(selectedFile)

        quantity++

        if(quantity >= 7){
            messageParag.textContent = 'Добавленно максимальное количество картинок'
            activeChooce.setAttribute('disabled', 'disabled')
        } else{
            messageParag.textContent = `Добавлено фото: ${quantity} из 7`
        }

        reader.addEventListener('load', (e) => {
            closeIcon = allSelectedZone[0].querySelector('.delimg')
            allSelectedZone[0].classList.add('added_file')
            allSelectedZone[0].style.cssText = `
            background: url(${e.target.result}) no-repeat center/cover;
            border-radius: 8px;
            `
            closeIcon.style.display = 'flex'
        })
    }

    changeBlock.addEventListener('click', (e) => {
        if(e.target.closest('.not_selected')){
            e.preventDefault()
        }

        if(e.target.closest('.delimg')){
            delSelectedImg(e.target.closest('.delimg'), e.target.closest('label'))
        }
    })

    changeBlock.addEventListener('change', (e) => {
        changeLabel(e, e.target.files[0])
    })
}