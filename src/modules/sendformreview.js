import { renderReview } from "./renderreview"

export const sendFormReview = (form, optionsObj) => {
    
    const inputs = form.querySelectorAll('.input_rev')
    const formData = new FormData(form)
    const formBody = {}

    let arrayBaseUrl = []
    
    formData.forEach((value, key) => {
        formBody[key] = value
    })
    
    formBody.starActive = optionsObj.starAcrive.length
    
    optionsObj.addFile.forEach((img, index) => {
        const stringStile = img.style.background
        const regExpImgUrl = stringStile.match(/url\("([^"]+)"\)/)
        arrayBaseUrl.push(regExpImgUrl[1])
    })
    
    const sendForm = () => {
        return fetch('url_server', {
            method: "POST"
        })
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
    } else{
        arrayBaseUrl = []
    }

}