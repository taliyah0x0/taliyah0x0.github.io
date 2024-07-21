function openVideo(index) {
    for (var i = 0; i < 6; i++) {
        document.getElementsByClassName("menu-item")[i].id = "menu-item";
    }

    var code = all[index][5];
    if (all[index][7] != "") {
        code = all[index][7];
    }
    var title = all[index][2];
    var hashtags = all[index][8];

    var startYear = parseInt(all[index][3].slice(0, 4));
    var startMonth = parseInt(all[index][3].slice(5, 7));
    var startDay = parseInt(all[index][3].slice(8, 10));
    var ago = "Streamed ";
    if (all[index][1] == '🔉 LIVE') {
        ago = "Started streaming "
    }
    ago += setAgo(startYear, startMonth, startDay);

    var company = all[index][4];;
    var description;
    var channel;
    var channel_description;
    var channel_pic;
    var button_text;
    if (w.includes(all[index])) {
        description = all[index][9];
        channel = all[index][4];
        channel_description = all[index][11];
        channel_pic = all[index][10];
        learn_more = all[index][12];
        button_text = "Learn More";
    } else {
        description = all[index][12];
        channel = all[index][10];
        channel_description = "Independent Passion Project by Taliyah";
        channel_pic = all[index][9];
        learn_more = `https://youtube.com/watch?v=${all[index][11]}`;
        button_text = "Watch Video";
    }
    
    if (code.substring(0,8) != "https://") {
        document.getElementById("container").innerHTML = 
        `<div class="open-video">
            <div class="iframe-container">
                <iframe src="https://www.youtube.com/embed/${code}?mute=1&controls=1&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3"
                    height="500" width="700" frameborder="0" allowfullscreen style="position:absolute; top:-60px;"></iframe>
            </div>
            <div class="cover"></div>
            <div class="video-cover" onclick="removeCover()">
                <div class="heartplay"></div>
            </div>
            <div class="title">${title}</div>
            <div class="video-profile">
                <a href="${learn_more}" target="_blank"><div class="video-profile-pic"></div></a>
                <div class="video-profile-text">
                    <div class="video-profile-name">${channel}</div>
                    <div class="video-profile-role">${channel_description}</div>
                </div>
                <a href="${learn_more}" target="_blank"><div class="small-subscribe-button">${button_text}</div></a>
            </div>
            <div class="description"><div class="description-title">${company} • ${ago}&nbsp;&nbsp;${hashtags}</div>${description}</div>
        </div>`;
        document.getElementsByClassName("video-profile-pic")[0].style.backgroundImage = `url(icons/${channel_pic})`
    } else {
        document.getElementById("container").innerHTML = 
        `<div class="open-video">
            <div class="iframe-container">
                <iframe src="${code}" height="440" width="700" frameborder="0"></iframe>
            </div>
            <div class="video-cover" onclick="pause()">
                <div class="heartplay"></div>
                <div class="play" onclick="pause()"></div>
                <div class="skip"></div>
                <a href="${code}" target="_blank"><div class="full-screen"></div></a>
            </div>
            <div class="title">${title}</div>
            <div class="video-profile">
                <a href="${learn_more}" target="_blank"><div class="video-profile-pic"></div></a>
                <div class="video-profile-text">
                    <div class="video-profile-name">${channel}</div>
                    <div class="video-profile-role">${channel_description}</div>
                </div>
                <a href="${learn_more}" target="_blank"><div class="small-subscribe-button">${button_text}</div></a>
            </div>
            <div class="description"><div class="description-title">${company} • ${ago}&nbsp;&nbsp;${hashtags}</div>${description}</div>
        </div>`;
        document.getElementsByClassName("video-profile-pic")[0].style.backgroundImage = `url(icons/${channel_pic})`
        setTimeout(() => {
        if (channel == "Typewanese & Tai-Ping") {
            var h = document.getElementsByTagName("iframe")[0].contentWindow.document.getElementsByTagName("div");
            console.log(h)
            //.contentWindow.document.getElementsByClassName("menu-button")[0].click();
        }
    }, 1000);
    }

    document.getElementsByClassName("screen")[0].scrollTo(0, 240);
}

var play = 0;

function removeCover() {
    var video = document.getElementsByClassName("iframe-container")[0];
    var nowPlaying = $(video).find('iframe').attr('src');
    if (nowPlaying.substring(0, 15) == "https://www.you") {
        $(video).find('iframe').attr('src', nowPlaying + '&autoplay=1');
    }
    document.getElementsByClassName("heartplay")[0].style.display = "none";
    document.getElementsByClassName("video-cover")[0].style.backgroundColor = "rgb(0,0,0,0)";
    document.getElementsByClassName("video-cover")[0].style.pointerEvents = "none";
}

function pause() {
    if (play == 1) {
        document.getElementsByClassName("play")[0].style.backgroundImage = "url('icons8-play-90.png')";
        document.getElementsByClassName("video-cover")[0].style.backgroundColor = "rgb(0,0,0,0.2)";
        document.getElementsByClassName("video-cover")[0].style.pointerEvents = "auto";
        setTimeout (() => {
            play = 0;
        }, 10);
    } else {
        document.getElementsByClassName("heartplay")[0].style.display = "none";
        document.getElementsByClassName("play")[0].style.backgroundImage = "url('icons8-pause-90.png')";
        document.getElementsByClassName("video-cover")[0].style.backgroundColor = "rgb(0,0,0,0)";
        document.getElementsByClassName("video-cover")[0].style.pointerEvents = "none";
        play = 1;
    }
}