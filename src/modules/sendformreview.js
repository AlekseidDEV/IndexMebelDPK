import { dataProcessing } from "./dataprocessing"
import { renderReview } from "./renderreview"

export const sendFormReview = (form, optionsObj) => {
    
    const inputs = form.querySelectorAll('.input_rev')
    const textArea = form.querySelector('.textarea_rev')
    const stars = document.querySelectorAll('.put_stars .activeStar')
    const labelImg = document.querySelectorAll('.added_file')

    const formData = new FormData(form)
    const {arrayBaseUrls, filesImgs} = dataProcessing(optionsObj) 
    const formBody = {}

    let arrayBaseUrl = arrayBaseUrls
    let filesImg = filesImgs

    formData.forEach((value, key) => {
        formBody[key] = value
    })

    formBody.starActive = optionsObj.starAcrive.length

    for(let i = 0; i < filesImg.length; i++){
        formBody['file_' + i] = filesImg[i]
    }

    for(let key in formBody){
        formData.append(key, formBody[key])
    }

    const sendForm = (data) => {
        return fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "multipart/form-data" },
            body: data,
        }).then(res => res.json()) 
    }
    
    const validateInputs = (inputs) => {
        let succes = false

        inputs.forEach((input) => {
            if(input.value !== ''){
                succes = true
            } else{
                succes = false
            }
        })
        return succes
    }

    if(validateInputs(inputs)){
        renderReview(formBody, arrayBaseUrl)
        sendForm(formData)
            .then(data => {
                inputs.forEach((input) => {
                    input.value = ''
                })

                textArea.value = ''
                if(stars.length !== 0){
                    stars.forEach((star) => {
                        star.classList.remove('activeStar')
                    })
                }

                if(labelImg.length !== 0){
                    labelImg.forEach((label) => {
                        label.classList.remove('added_file')
                        label.removeAttribute('style')
                    })
                }
            })
            .catch(() => {
                console.error()
            })
    } else{
        arrayBaseUrl = []
    }

}