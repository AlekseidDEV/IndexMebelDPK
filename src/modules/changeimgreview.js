export const changeImgReview = () => {
    const changeBlock = document.querySelector('.block_inputs_imgfile')
    const messageParag = document.querySelector('.message_file')
    const allCloseIcon = document.querySelectorAll('.delimg')

    let allSelectedZone = document.querySelectorAll('.not_selected')

    let quantity = -1

    const delSelectedImg = (closeTarget) => {
        allSelectedZone = document.querySelectorAll('.not_selected')

        quantity--

        allCloseIcon.forEach((icon, index) => {
            if(icon === closeTarget){
                icon.style.display = 'none'

                allSelectedZone[index].removeAttribute('style')
                allSelectedZone[index].style.order = `${allSelectedZone.length}`
                messageParag.textContent = `Фото добавлено: ${quantity + 1} из ${allSelectedZone.length}`
            }
        })
    }

    const changeLabel = (selectedFile) => {
        const reader = new FileReader()

        allSelectedZone = document.querySelectorAll('.not_selected')
        reader.readAsDataURL(selectedFile)
        messageParag.style = ''

        quantity++

        reader.addEventListener('load', (e) => {
            if(quantity <= 7){
                allSelectedZone[quantity].classList.add('added_file')
                allSelectedZone[quantity].style.cssText = `
            background: url(${e.target.result}) no-repeat center/cover;
            border-radius: 8px;
            `
            allCloseIcon[quantity].style.display = 'flex'
            messageParag.textContent = `Фото добавлено: ${quantity + 1} из ${allSelectedZone.length}`
            } else if(quantity > 7){
                messageParag.textContent = 'Выбранно максимально количество файлов'
            }
        })
        reader.addEventListener('error', () => {
            messageParag.style.color = 'red'
            messageParag.textContent = `Произошла ошибка при чтении файла: ${selectedFile}`
        })
    }

    changeBlock.addEventListener('click', (e) => {
        if(e.target.closest('.not_selected')){
            e.preventDefault()
        }

        if(e.target.closest('.delimg')){
            delSelectedImg(e.target.closest('.delimg'))
        }
    })

    changeBlock.addEventListener('change', (e) => {
        changeLabel(e.target.files[0])
    })
    // TODO передумать логику
}