const numberOfDrums = document.querySelectorAll(".drum").length

for(let i = 0; i < numberOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        let buttonInnerHtml = this.innerHTML
        makeSound(buttonInnerHtml)
    })
}

document.addEventListener('keydown' , function(event){
    makeSound(event.key)
})

function makeSound(key){
    switch(key) {
        case "w":
            var snd1 = new Audio("sounds/crash.mp3")
            snd1.play()
        break
        case "a":
            var snd2 = new Audio("sounds/kick-bass.mp3")
            snd2.play()
        break
        case "s":
            var snd3 = new Audio("sounds/snare.mp3")
            snd3.play()
        break
        case "d":
            var snd4 = new Audio("sounds/tom-1.mp3")
            snd4.play()
        break
        case "j":
            var snd5 = new Audio("sounds/tom-2.mp3")
            snd5.play()
        break
        case "k":
            var snd6 = new Audio("sounds/tom-3.mp3")
            snd6.play()
        break
        case "l":
            var snd7 = new Audio("sounds/tom-4.mp3")
            snd7.play()
        break

        default:
            console.log(buttonInnerHtml)
    }
}



