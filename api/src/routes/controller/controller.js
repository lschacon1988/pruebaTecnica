module.exports ={
    getReverce: (text)=>{
        let reverceText = ""
        for(let i = text.length - 1; i >= 0; i--){
          reverceText = reverceText + text[i]
        }
        return reverceText.split(" ").reverse().join(" ")

    }
}




// console .log(Number.isInteger(parseInt(a)))
