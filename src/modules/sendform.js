export const sendForm = (form, selectOptions) => {
    const formData = new FormData(form)
    const allInput = form.querySelectorAll('input')

    const formBody = {}

    formData.forEach((value, key) => {
        formBody[key] = value
    })

    if(selectOptions !== undefined){
       formBody.socialSend = selectOptions.options.dataset['socials']
    } 

    const validInput = (inputs) => {
        let success = false

        inputs.forEach((input) => {
            if(input.value === ''){
                success = false
            } else{
                success = true
            }
        })

        return success
    }

    const sendFormServer = () => {
        return fetch('file.php', {
            method: "POST",
            body: 'УКАЗАТЬ ТЕЛО'
            // ! указать нужные настройки
        })
    }


    if(validInput(allInput)){
        sendFormServer()
    } else{
        alert('заполните поля')
    }
}