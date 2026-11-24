let $ = document
let container = $.querySelector(".container")
// let au = $.getElementById("music-au")
let au = $.querySelector("audio")
let bg_img = $.getElementById("bg-img")
let current_time = $.querySelector(".current-time")
let full_time = $.querySelector(".full-time")
let progress = $.querySelector(".progress")
let prev = $.querySelector(".prev")
let play = $.querySelector(".play")
let next = $.querySelector(".next")
let manfi_5 = $.querySelector(".manfi-5")
let mosbat_5 = $.querySelector(".mosbat-5")
let player = $.querySelector(".player")
let musics = [
    {
        name : "arman",
        music_path : "media/m1.mp3",
        image_path : "images/m1.jpeg"
    },
    {
        name : "ali",
        music_path : "media/m2.mp3",
        image_path : "images/m2.jpeg"
    },
    {
        name : "mahdi",
        music_path : "media/m3.mp3",
        image_path : "images/m3.jpg"
    },
    {
        name : "fatemeh",
        music_path : "media/m4.mp3",
        image_path : "images/m4.jpg"
    }
]
for (i in musics){
    let new_item = $.createElement("div")
    new_item.setAttribute("class", "item")
    let new_item_text_box = $.createElement("div")
    new_item_text_box.setAttribute("class", "item-text")
    let new_item_text = $.createElement("h2")
    new_item_text.setAttribute("class", "name")
    new_item_text.innerHTML = musics[i].name
    new_item.style.backgroundImage = "url(" + musics[i].image_path + ")"
    new_item_text_box.setAttribute("data-id", i)
    new_item_text_box.append(new_item_text)
    new_item.append(new_item_text_box)
    container.append(new_item)
    new_item.addEventListener("click", set_music)
}
function set_music(event){
    let music =  event.target.dataset.id
    bg_img.setAttribute("src", musics[+music].image_path)
    au.setAttribute("src", musics[+music].music_path)
    au.setAttribute("data-id", music)
    player.style.display = "block"
    play.innerHTML = "pause"
    au.play()
}
au.addEventListener("timeupdate", function(){
    progress.max = au.duration
    let current_daghigheh = Math.floor(au.currentTime / 60)
    let current_sanieh = Math.floor(au.currentTime % 60)
    if(current_daghigheh < 10){
        current_daghigheh = "0" + current_daghigheh
    }
    if(current_sanieh < 10){
        current_sanieh = "0" + current_sanieh
    }
    current_time.innerHTML = current_daghigheh + ":" + current_sanieh
    let full_daghigeh = Math.floor(au.duration / 60)
    let full_sanieh = Math.floor(au.duration % 60)
    if(full_daghigeh < 10){
        full_daghigeh = "0" + full_daghigeh
    }
    if (full_sanieh < 10){
        full_sanieh = "0" + full_sanieh
    }
    full_time.innerHTML = full_daghigeh + ":" + full_sanieh
    progress.value = au.currentTime
})
progress.addEventListener("click", function(){
    au.currentTime = progress.value
})
play.addEventListener("click", function(){
    if (play.innerHTML == "play"){
        au.play()
        play.innerHTML = "pause"
    } else {
        au.pause()
        play.innerHTML = "play"
    }
})
manfi_5.addEventListener("click", function(){
    au.currentTime = au.currentTime - 5
})
mosbat_5.addEventListener("click", function(){
    au.currentTime = au.currentTime + 5
})
prev.addEventListener("click", function(){
    let music = au.dataset.id - 1
    console.log("mus", music)
    bg_img.setAttribute("src", musics[+music].image_path)
    au.setAttribute("src", musics[+music].music_path)
    au.setAttribute("data-id", music)
    player.style.display = "block"
    au.play()
})
next.addEventListener("click", function(){
    let music = +au.dataset.id + 1
    console.log("mus", music)
    bg_img.setAttribute("src", musics[+music].image_path)
    au.setAttribute("src", musics[+music].music_path)
    au.setAttribute("data-id", music)
    player.style.display = "block"
    play.innerHTML = "pause"
    au.play()
})