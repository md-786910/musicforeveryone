let music1 = "./music/1.mp3";
let music2 = "./music/2.mp3";
let music3 = "./music/3.mp3";
let music4 = "./music/4.mp3";
let music5 = "./music/5.mp3";

const allsong = [music1, music2, music3, music4, music5]
console.log(allsong)

// show all list music in
let playmusic = document.querySelector(".fa-play");
let pausemusic = document.querySelector(".fa-pause");

let tbody = document.querySelector(".tbody");
let str = "";
allsong.forEach((element, index) => {
    str += `
<tr>
<td>${element}</td>
<td onclick="play(${index})"><i class="fa fa-play" ></i></td>
<td class="play"></td>
</tr>
`
})
// <i class="fa fa-pause" ></i>
tbody.innerHTML = str;

let playmore = document.querySelector(".play");


// play pause music

function play(index) {
    let musicval = allsong[index]
    console.log(musicval)
    let audio = new Audio(musicval);
    audio.play();
    // playmore.innerHTML = '<i class="fa fa-pause"></i>'

}

// stop song
