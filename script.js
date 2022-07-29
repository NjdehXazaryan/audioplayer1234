var data = {
    title: [
        "valim na gelike",
        "jezduxa",
        "bum bareram",
        "nastupaet noch",
        

    ],
    song:[
        "music/song1.mp3",
        "music/song2.mp3",
        "music/song3.mp3",
        "music/song4.mp3",


    ],
    poster : [
       "https://i.pinimg.com/originals/f9/bc/f3/f9bcf376d901632804edbded7729d4b8.gif    ",
       "https://64.media.tumblr.com/39ce0c4fc97ea2c216aec0542db9e932/tumblr_mw17luHXGI1rk0k2jo1_500.gifv",
       "https://64.media.tumblr.com/263e757b1aea6e908ebfda7f0a27ef59/tumblr_pkel2frNvd1whahvko1_540.gifv",
       "https://c.tenor.com/vO0HWChhK9YAAAAC/lambo.gif",
    ]
    
}
var song = new Audio();
    window.onload = function(){
        playSong()
    }
var currentSong = 0;

function playSong() {
    song.src = data.song[currentSong];
    let songTitle = document.getElementById("songTitle");
    songTitle.textContent = data.title[currentSong];
    let img = document.getElementById("row1");
    img.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementById("main")
    main.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    song.play();
    }


function playOrPauseSong() {
    let play = document.getElementById ("play")
    //console.log(play);
    
    if (song.paused) {
    song.play();
    play.src = "images/pause.png" //pause
    } else {
    song.pause();
    play.src = "images/play-button-arrowhead.png" //play
    }
    }
    song.addEventListener("timeupdate", function(){
        // console.log(song.currentTime);
        // console.log(song.duration);

        let fill = document.getElementById("fill");
        let position = song.currentTime / song.duration;
        fill.style.width = position * 100 + "%";
        convertTime(song.currentTime)


        if (song.ended){
           next()
        }
    })
        function convertTime(seconds){
            let currentTime  = document.getElementById("currentTime");
            let min = Math.floor(seconds / 60);
            let sec = Math.floor(seconds % 60);

            min = (min < 10) ? "0" + min : min;
            sec = (sec < 10) ? "0" + sec : sec;
            currentTime.textContent = min + ":" + sec;


            totalTime(Math.round(song.duration))
        

        }   
        function totalTime(seconds){
            var min = Math.floor(seconds / 60);
            var sec = Math.floor(seconds % 60);
            min = (min < 10) ? "0" + min : min;
            sec = (sec < 10) ? "0" + sec : sec;
            currentTime.textContent +=  "/" + min + ":" + sec
        }
        function next(){
            currentSong++;
            if (currentSong>= data.song.length){
                currentSong = 0
            }
            playSong();
            play.src = "images/pause.png"
        }


        function pre(){
            currentSong--;
            if (currentSong < 0){
                currentSong = data.song.length - 1;

            }
            playSong();
            play.src = "images/pause.png"
        }
        function muted(){
            let mute = document.getElementById("mute");
            if (song.muted){
                song.muted = false;
                mute.src = "images/volume.png";
            }else {
                song.muted = true;
                mute.src = "images/volume-mute.png";
            }
        }
        function decrease(){
            song.volume -= 0.2;
        }
        function increase(){
            song.volume += 0.2
        }