const { search } = Qs.parse(location.search.slice(1))
console.log(search)
username = "salman%20khan"
username = search

const url = `https://unsa-unofficial-spotify-api.p.rapidapi.com/search?query=${username}&count=100&type=tracks`;

const music = async () => {

    const res = await fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "2feae67a2emsh92d0de018ae315ep15fecajsn4b297966b8de",
            "x-rapidapi-host": "unsa-unofficial-spotify-api.p.rapidapi.com"
        }
    })
    let data = await res.json();
    console.log(data)
    console.log(data.Results.length)

    const audioTag = document.querySelector(".audioTag");
    const faStepBbackward = document.querySelector(".fa-step-backward");
    const faStepForward = document.querySelector(".fa-step-forward");
    const download = document.querySelector(".download");

    // set all music here

    let music1 = "./music/1.mp3";
    let music2 = "./music/2.mp3";
    let music3 = "./music/3.mp3";
    let music4 = "./music/4.mp3";
    let music5 = "./music/5.mp3";

    // const allsong = [music1, music2, music3, music4, music5]
    // let musicLength = allsong.length - 1;

    const allsong = data.Results;
    let musicLength = data.Results.length;
    let musicIndex = 0;
    let fisrtplaysong = allsong[musicLength - 1].preview_url;
    audioTag.setAttribute("src", fisrtplaysong)
    // music listen
    faStepBbackward.addEventListener("click", () => {
        if ((musicLength) >= musicIndex) {
            audioTag.setAttribute("src", allsong[musicLength--].preview_url)

            down(allsong[musicLength + 1].preview_url)

            console.log("back ", musicIndex)
        }
        else {
            audioTag.setAttribute("src", allsong[musicLength].preview_url)
            down(allsong[musicLength].preview_url)

        }
    })
    faStepForward.addEventListener("click", () => {

        if ((musicLength) >= musicIndex) {

            audioTag.setAttribute("src", allsong[musicIndex++].preview_url)

            down(allsong[musicLength - 1].preview_url)


        }
        else {
            audioTag.setAttribute("src", allsong[musicIndex].preview_url)

            down(allsong[musicLength - 1].preview_url)

        }
    })

    // download music from
    function down(music) {

        download.addEventListener("click", () => {
            download.setAttribute("href", music)
        })
    }

}

music();
