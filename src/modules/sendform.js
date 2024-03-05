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

    const sendFormServer = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            headers: {"Content-Type": "application/json;charset=utf-8"},
            body: JSON.stringify(data)
        }).then(res => res.json())
    }

    if(validInput(allInput)){
        sendFormServer(formBody)
            .then(data => {
                allInput.forEach((input) => {
                    input.value = ''
                })
            })
            .catch((error) => {
                console.error(error)
            })
    } else{
        alert('заполните поля')
    }
}