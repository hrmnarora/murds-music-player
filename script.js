console.log("welsome to spotify")
// iitialize the variables
let songindex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let songitemplay = document.getElementsByClassName('songitemplay');
let back = document.getElementById('back');
let song = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let myProgressbar = document.getElementById('myProgressbar');
let songitem = Array.from(document.getElementsByClassName('songitem'));


let songs = [
    { songname: "Insane-Ap dhillon", filePath: "song/1.mp3", coverpath: "apdhillon.jpg" },
    { songname: "excuses-Ap dhillon", filePath: "song/2.mp3", coverpath: "apdhillon.jpg" },
    { songname: "arrogant-Ap dhillon", filePath: "song/3.mp3", coverpath: "apdhillon.jpg" },
    { songname: "brown munde-Ap dhillon", filePath: "song/4.mp3", coverpath: "apdhillon.jpg" },
    { songname: "Desires-Ap dhillon", filePath: "song/5.mp3", coverpath: "apdhillon.jpg" },
    { songname: "gaani-Ap dhillon", filePath: "song/6.mp3", coverpath: "apdhillon.jpg" },
    { songname: "majhail-Ap dhillon", filePath: "song/7.mp3", coverpath: "apdhillon.jpg" },
    // { songname: "toxic-Ap dhillon", filePath: "song/8.mp3", coverpath: "apdhillon.jpg" },

    { songname: "52 Bars - Karan Aujla", filePath: "song/8.mp3", coverpath: "karan.jpg" },
    { songname: "Chithiyaan - Karan Aujla", filePath: "song/9.mp3", coverpath: "karan.jpg" },
    { songname: "Dont Look - Karan Aujla", filePath: "song/10.mp3", coverpath: "karan.jpg" },
    { songname: "Gangsta - Karan Aujla", filePath: "song/11.mp3", coverpath: "karan.jpg" },
    { songname: "Adhiya - Karan Aujla", filePath: "song/12.mp3", coverpath: "karan.jpg" },
    { songname: "On Top - Karan Aujla", filePath: "song/13.mp3", coverpath: "karan.jpg" },
    { songname: "Mexico - Karan Aujla", filePath: "song/14.mp3", coverpath: "karan.jpg" },

    { songname: "295 - Sidhu Moosewala", filePath: "song/15.mp3", coverpath: "sidhu.jpg" },
    { songname: "Everybody Hurts - Sidhu Moosewala", filePath: "song/16.mp3", coverpath: "sidhu.jpg" },
    { songname: "So High - Sidhu Moosewala", filePath: "song/17.mp3", coverpath: "sidhu.jpg" },
    { songname: "Love Sck - Sidhu Moosewala", filePath: "song/18.mp3", coverpath: "sidhu.jpg" },
    { songname: "US - Sidhu Moosewala", filePath: "song/19.mp3", coverpath: "sidhu.jpg" },
    { songname: "The Last Ride - Sidhu Moosewala", filePath: "song/20.mp3", coverpath: "sidhu.jpg" },
    { songname: "These Days - Sidhu Moosewala", filePath: "song/34.mp3", coverpath: "sidhu.jpg" },

    { songname: "Jatta - Harnoor", filePath: "song/22.mp3", coverpath: "harnoor.jpg" },
    { songname: "Faalin Star - Harnoor", filePath: "song/23.mp3", coverpath: "harnoor.jpg" },
    { songname: "Moonlight - Harnoor", filePath: "song/24.mp3", coverpath: "harnoor.jpg" },
    { songname: "Parshawan - Harnoor", filePath: "song/25.mp3", coverpath: "harnoor.jpg" },
    { songname: "Tareefan - Harnoor", filePath: "song/26.mp3", coverpath: "harnoor.jpg" },
    { songname: "Wah Kya Nazare - Harnoor", filePath: "song/27.mp3", coverpath: "harnoor.jpg" },
    { songname: "Walliyan - Harnoor", filePath: "song/34.mp3", coverpath: "harnoor.jpg" },

    { songname: "We rollin - Shubh", filePath: "song/29.mp3", coverpath: "shubh.jpg" },
    { songname: "NO LOVE - Shubh", filePath: "song/30.mp3", coverpath: "shubh.jpg" },
    { songname: "Baller - Shubh", filePath: "song/31.mp3", coverpath: "shubh.jpg" },
    { songname: "ELEVATED - Shubh", filePath: "song/32.mp3", coverpath: "shubh.jpg" },
    { songname: "Her - Shubh", filePath: "song/33.mp3", coverpath: "shubh.jpg" },
    { songname: "Off Shore - Shubh", filePath: "song/34.mp3", coverpath: "shubh.jpg" },
]

songitem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
})
// handle play pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }


})

// listen to events
audioElement.addEventListener('timeupdate', () => {

    // upate seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressbar.value = progress;
    console.log(progress);
    if (progress == 100) {

        if (songindex > 34) {
            songindex = 0
        }
        else {
            songindex += 1;
        }
        audioElement.src = `song/${songindex}.mp3`;
        makeAllPlays();
        mastersongname.innerText = songs[songindex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    }

})

myProgressbar.addEventListener('change', () => {
    audioElement.currentTime = myProgressbar.value * audioElement.duration / 100
    console.log(audioElement.currentTime);
})


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}


Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song/${songindex }.mp3`;
        mastersongname.innerText = songs[songindex -1].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');


    })
})


document.getElementById('next').addEventListener('click', () => {
    if (songindex >= 34) {
        songindex = 0
    }
    else {
        songindex += 1;
    }
    audioElement.src = `song/${songindex}.mp3`;
    makeAllPlays();
    mastersongname.innerText = songs[songindex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songindex <= 0) {
        songindex = 34
    }
    else {
        songindex -= 1;
    }
    audioElement.src = `song/${songindex + 1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioElement.currentTime = 0;
    makeAllPlays();
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


document.getElementById('artistbtn').addEventListener('click',()=>{
    if ( document.getElementById('contart').style.display=="none"){
    document.getElementById('contart').style.display="initial";
    document.getElementById('artwin').style.display="initial";

        
    }
    else{
    document.getElementById('contart').style.display="none";
    document.getElementById('artwin').style.display="none";


    }
    
})


   
function scrollap() {
    window.scrollTo(0, 625);
    document.getElementById('contart').style.display="none";
    document.getElementById('artwin').style.display="none";

}
function scrollkaran() {
    window.scrollTo(0, 1450);
    document.getElementById('contart').style.display="none";
    document.getElementById('artwin').style.display="none";
}
function scrollsidhu() {
    window.scrollTo(0, 2100);
    document.getElementById('contart').style.display="none";
    document.getElementById('artwin').style.display="none";
}
function scrollharnoor() {
    window.scrollTo(0, 3000);
    document.getElementById('contart').style.display="none";
    document.getElementById('artwin').style.display="none";
}
function scrollshubh() {
    window.scrollTo(0, 3700);
    document.getElementById('contart').style.display="none";
    document.getElementById('artwin').style.display="none";
}
function scrolltotop() {
    window.scrollTo(0, -2000);
}