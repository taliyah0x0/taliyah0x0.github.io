function openVideo(index) {
    for (var i = 0; i < 6; i++) {
        document.getElementsByClassName("menu-item")[i].id = "menu-item";
    }

    var code = "";
    var title = "";
    if (index < ln.length) {
        code = ln[index][5];
        title = ln[index][2];
        if (ln[index][7] != "") {
            code = ln[index][7];
        }
    } else {
        code = fp[index - ln.length][5];
        title = fp[index - ln.length][2];
        if (fp[index - ln.length][7] != "") {
            code = fp[index - ln.length][7];
        }
    }
    
    if (code.substring(0,8) != "https://") {
        document.getElementById("container").innerHTML = 
        `<div class="open-video">
        <iframe src="https://www.youtube-nocookie.com/embed/${code}?autoplay=0&mute=0&controls=1&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3"
            height="500" width="700" frameborder="0" allowfullscreen style="position:absolute; top:-50px;"></iframe>
            <div class="cover"></div>
            <div class="title">${title}</div>
        </div>`;
    } else {
        document.getElementById("container").innerHTML = 
        `<div class="open-video">
            <iframe src="${code}" height="420" width="700" frameborder="0"></iframe>
            <div class="video-cover">
                <div class="play"></div>
                <div class="skip"></div>
                <a href="${code}" target="_blank"><div class="full-screen"></div></a>
            </div>
            <div class="title">${title}</div>
        </div>`;
    }

    document.getElementsByClassName("screen")[0].scrollTo(0, 240);
}

function openSmallVideo(index) {
    for (var i = 0; i < 6; i++) {
        document.getElementsByClassName("menu-item")[i].id = "menu-item";
    }

    if (code.substring(0,8) != "https://") {
        document.getElementById("container").innerHTML = 
        `<div class="open-video">
            <iframe src="https://www.youtube-nocookie.com/embed/${all[index][5]}?autoplay=0&mute=0&controls=1&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3"
                height="500" width="700" frameborder="0" allowfullscreen style="position:absolute; top:-50px;"></iframe>
            <div class="cover"></div>
            <div class="title">${all[index][2]}</div>
        </div>`;
    } else {
        document.getElementById("container").innerHTML = 
        `<div class="open-video">
            <iframe src="${all[index][5]}" height="420" width="700" frameborder="0"></iframe>
            <div class="video-cover">
                <a href="${all[index][5]}" target="_blank"><div class="full-screen"></div></a>
            </div>
            <div class="title">${all[index][2]}</div>
        </div>`;
    }

    document.getElementsByClassName("screen")[0].scrollTo(0, 240);
}