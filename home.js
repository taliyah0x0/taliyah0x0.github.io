function loadhome() {
    for (var i = 0; i < ln.length; i++) {
        document.getElementsByClassName("block-elements")[0].innerHTML +=
            `<div class="block-video" onmouseenter="playvid(${i})" onmouseleave="stopvid(${i})">
                    <div class="video-thumbnail">
                        <iframe src="https://www.youtube.com/embed/${ln[i][5]}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&start=${ln[i][6]}"
            height="275" width="275" frameborder="0" style="position:absolute;"></iframe>
            <div class="clear"></div>
                    <div class="duration">
                            🔉 LIVE
                        </div>
                    </div>
                    <div class="video-title">
                    </div>
                    <div class="video-sub">
                    </div>
                </div>`;
        document.getElementsByClassName("clear")[i].style.backgroundImage = `url('thumbnails/${ln[i][0]}')`;
        document.getElementsByClassName("duration")[i].style.width = "45px";
        document.getElementsByClassName("duration")[i].style.left = "100px";
        document.getElementsByClassName("duration")[i].style.backgroundColor = "red";
        document.getElementsByClassName("duration")[i].style.fontWeight = "bold";
        document.getElementsByClassName("video-title")[i].innerHTML = `${ln[i][2]}`;

        var startYear = parseInt(ln[i][3].slice(0, 4));
        var startMonth = parseInt(ln[i][3].slice(5, 7));
        var startDay = parseInt(ln[i][3].slice(8, 10));
        var ago = setAgo(startYear, startMonth, startDay);
        document.getElementsByClassName("video-sub")[i].innerHTML = `${ln[i][4]} • ${ago}`;
    }
    for (var i = 0; i < fp.length; i++) {
        document.getElementsByClassName("block-elements")[1].innerHTML +=
            `<div class="block-video" onmouseenter="playvid(${i + ln.length})" onmouseleave="stopvid(${i + ln.length})">
                    <div class="video-thumbnail">
                    <iframe src="https://www.youtube.com/embed/${fp[i][5]}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&start=${fp[i][6]}"
            height="275" width="275" frameborder="0" style="position:absolute;"></iframe>
            <div class="clear"></div>
                        <div class="duration">
                        </div>
                    </div>
                    <div class="video-title">
                    </div>
                    <div class="video-sub">
                    </div>
                </div>`
        document.getElementsByClassName("clear")[i + ln.length].style.backgroundImage = `url('thumbnails/${fp[i][0]}')`;
        document.getElementsByClassName("duration")[i + ln.length].innerHTML = `${fp[i][1]}`;
        document.getElementsByClassName("duration")[i + ln.length].style.left = "105px";
        document.getElementsByClassName("duration")[i + ln.length].style.width = "40px";
        document.getElementsByClassName("duration")[i + ln.length].style.backgroundColor = "rgb(0,0,0,0.4)";
        document.getElementsByClassName("duration")[i + ln.length].style.color = "rgb(255,255,255,0.8)";
        document.getElementsByClassName("video-title")[i + ln.length].innerHTML = `${fp[i][2]}`;

        var startYear = parseInt(fp[i][3].slice(0, 4));
        var startMonth = parseInt(fp[i][3].slice(5, 7));
        var startDay = parseInt(fp[i][3].slice(8, 10));
        var ago = setAgo(startYear, startMonth, startDay);
        document.getElementsByClassName("video-sub")[i + ln.length].innerHTML = `${fp[i][4]} • ${ago}`;
    }
}

function setAgo(startYear, startMonth, startDay) {
    let currentDate = new Date().toJSON();
    let currentYear = parseInt(currentDate.slice(0, 4));
    let currentMonth = parseInt(currentDate.slice(5, 7));
    let currentDay = parseInt(currentDate.slice(8, 10));

    var ago = "";
    if (currentYear - startYear == 0) {
        if (currentMonth - startMonth == 0) {
            if (currentDay - startDay == 1) {
                ago = `${currentDay - startDay} day ago`;
            } else {
                ago = `${currentDay - startDay} days ago`;
            }
        } else {
            var start = startMonth * 30 + startDay;
            var current = currentMonth * 30 + currentDay;
            var roundMonth = Math.round((current - start)/30);
            if (roundMonth == 1) {
                ago = `${roundMonth} month ago`;
            } else {
                ago = `${roundMonth} months ago`;
            }
        }
    } else {
        var start = startYear * 12 + startMonth;
        var current = currentYear * 12 + currentMonth;
        var roundYear = Math.round((current - start)/12);
        if (roundYear == 1) {
            ago = `${roundYear} year ago`;
        } else {
            ago = `${roundYear} years ago`;
        }
    }
    return ago;
}

function clickMenu(index) {
    for (var i = 0; i < 6; i++) {
        document.getElementsByClassName("menu-item")[i].id = "menu-item";
    }
    document.getElementsByClassName("menu-item")[index].id = "highlight-item";
    
    document.getElementById("container").innerHTML = "";

    if (index == 0) {
        document.getElementById("container").innerHTML =  `
            <div class="block">
                <div class="block-title">
                    Live now
                </div>
                <div class="block-elements">
                </div>
            </div>
            <div class="block">
                <div class="block-title">
                    Featured projects
                </div>
                <div class="block-elements">
                </div>
            </div>`;
        loadhome();
    } else if (index == 1) {

        document.getElementById("container").innerHTML =  `<div class="page"></div>`;
        for (var i = 0; i < all.length; i++) {
            document.getElementsByClassName("page")[0].innerHTML +=
                `<div class="block-video" onmouseenter="playsmallvid(${i})" onmouseleave="stopsmallvid(${i})">
                    <div class="small-video-thumbnail">
                    <iframe src="https://www.youtube.com/embed/${all[i][5]}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&start=${all[i][6]}"
        height="240" width="240" frameborder="0" style="position:absolute;"></iframe>
        <div class="small-clear"></div>
                        <div class="small-duration"></div>
                    </div>
                    <div class="small-video-title">
                    </div>
                    <div class="video-sub">
                    </div>
                </div>`
            document.getElementsByClassName("small-clear")[i].style.backgroundImage = `url('thumbnails/${all[i][0]}')`;
            document.getElementsByClassName("small-duration")[i].innerHTML = `${all[i][1]}`;
            if (all[i][1] == '🔉 LIVE') {
                document.getElementsByClassName("small-duration")[i].style.backgroundColor = "red";
                document.getElementsByClassName("small-duration")[i].style.color = "white";
            }
            document.getElementsByClassName("small-video-title")[i].innerHTML = `${all[i][2]}`;
    
            var startYear = parseInt(all[i][3].slice(0, 4));
            var startMonth = parseInt(all[i][3].slice(5, 7));
            var startDay = parseInt(all[i][3].slice(8, 10));
            var ago = setAgo(startYear, startMonth, startDay);
            document.getElementsByClassName("video-sub")[i].innerHTML = `${all[i][4]} • ${ago}`;
        }
    }

    document.getElementsByClassName("screen")[0].scrollTo(0, 250);
}

function playvid(index) {
    document.getElementsByClassName("clear")[index].style.opacity = 0;
    document.getElementsByClassName("duration")[index].style.opacity = 0;
}

function stopvid(index) {
    document.getElementsByClassName("clear")[index].style.opacity = 1;
    document.getElementsByClassName("duration")[index].style.opacity = 1;
}

function playsmallvid(index) {
    document.getElementsByClassName("small-clear")[index].style.opacity = 0;
    document.getElementsByClassName("small-duration")[index].style.opacity = 0;
}

function stopsmallvid(index) {
    document.getElementsByClassName("small-clear")[index].style.opacity = 1;
    document.getElementsByClassName("small-duration")[index].style.opacity = 1;
}