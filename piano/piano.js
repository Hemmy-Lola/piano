alert("Bienvenue à toi ! tu veux tester mon super piano ?")

const whiteKeys = document.querySelectorAll(".white-key");
const blackKeys = document.querySelectorAll(".black-key");

blackKeys.forEach((black,test)=>{
    black.addEventListener('mouseenter',()=>{
        let sound = new Audio(`./sounds/black-keys/${test}.mp3`);
        playSound(sound);
    });
});

whiteKeys.forEach((white,test)=>{
    white.addEventListener('mouseenter',()=>{
        let sound = new Audio(`./sounds/white-keys/${test}.mp3`);
        playSound(sound);
    });
});

function playSound(sound){
    sound.pause()
    sound.currentTime = 0;
    sound.play();
}

