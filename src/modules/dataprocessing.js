export const dataProcessing = (optionsObj) => {
    
    let arrayBaseUrls = []
    let filesImgs = []

    let byteString
    let mimeType
    let file
    let ia = []

    optionsObj.addFile.forEach((img) => {
        const stringStile = img.style.background
        const regExpImgUrl = stringStile.match(/url\("([^"]+)"\)/)
        arrayBaseUrls.push(regExpImgUrl[1])
    })

    arrayBaseUrls.forEach((uri) => {
        byteString = atob(uri.split(',')[1])
        mimeType = uri.split(',')[0].split(':')[1].split(';')[0]

        ia = new Uint8Array(byteString.length)

        for(let i = 0; i < byteString.length; i++){
            ia[i] = byteString.charCodeAt(i)
        }
    
        file = new File([ia], 'image',{type: mimeType})

        filesImgs.push(file)
    })

    return {arrayBaseUrls, filesImgs}
}