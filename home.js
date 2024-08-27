var startIndex = 0;
var smallStartIndex = 0;
function loadhome() {
    setTimeout(() => {
        document.getElementsByClassName('opening')[0].classList.add('hide');
        document.getElementsByClassName('trailer-video')[0].play();
        setTimeout(() => {
            document.getElementsByClassName('opening')[0].style.display = 'none';
        }, 1000);
    }, 1500);
    for (var i = 0; i < ln.length; i++) {
        document.getElementsByClassName("block-elements")[0].innerHTML +=
            `<div class="block-video" onmouseenter="playvid(${i})" onmouseleave="stopvid(${i})" onclick="openVideo(${all.indexOf(w[fl[i]])})">
                <div class="video-thumbnail">
                    <iframe src="https://www.youtube.com/embed/${w[fl[i]][5]}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&start=${w[fl[i]][6]}"
                height="275" width="275" frameborder="0" style="position:absolute;"></iframe>
                    <div class="clear"></div>
                    <div class="duration">🔉 LIVE</div>
                </div>
                <div class="video-title"></div>
                <div class="video-sub"></div>
                <div class="video-tag">Work Experience</div>
            </div>`;
        document.getElementsByClassName("clear")[i].style.backgroundImage = `url('thumbnails/${w[fl[i]][0]}')`;
        document.getElementsByClassName("duration")[i].style.width = "45px";
        document.getElementsByClassName("duration")[i].style.left = "100px";
        document.getElementsByClassName("duration")[i].style.backgroundColor = "red";
        document.getElementsByClassName("duration")[i].style.fontWeight = "bold";
        document.getElementsByClassName("video-title")[i].innerHTML = `${w[fl[i]][2]}`;

        var startYear = parseInt(w[fl[i]][3].slice(0, 4));
        var startMonth = parseInt(w[fl[i]][3].slice(5, 7));
        var startDay = parseInt(w[fl[i]][3].slice(8, 10));
        var ago = setAgo(startYear, startMonth, startDay);
        document.getElementsByClassName("video-sub")[i].innerHTML = `${w[fl[i]][4]} • ${ago}`;
    }
    
    for (var i = 0; i < fp.length; i++) {
        document.getElementsByClassName("block-elements")[1].innerHTML +=
            `<div class="block-video" onmouseenter="playvid(${i + ln.length})" onmouseleave="stopvid(${i + ln.length})" onclick="openVideo(${all.indexOf(p[fp[i]])})">
                <div class="video-thumbnail">
                    <iframe src="https://www.youtube.com/embed/${p[fp[i]][5]}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&start=${p[fp[i]][6]}"
                height="275" width="275" frameborder="0" style="position:absolute;"></iframe>
                    <div class="clear"></div>
                    <div class="duration"></div>
                </div>
                <div class="video-title"></div>
                <div class="video-sub"></div>
                <div class="video-tag">Project</div>
            </div>`;
        document.getElementsByClassName("clear")[i + ln.length].style.backgroundImage = `url('thumbnails/fp/${p[fp[i]][0]}')`;
        document.getElementsByClassName("duration")[i + ln.length].style.width = "40px";
        document.getElementsByClassName("duration")[i + ln.length].style.left = "100px";
        document.getElementsByClassName("duration")[i + ln.length].style.backgroundColor = "rgb(0,0,0,0.5)";
        document.getElementsByClassName("duration")[i + ln.length].style.fontWeight = "bold";
        document.getElementsByClassName("duration")[i + ln.length].innerHTML = `${p[fp[i]][1]}`;
        document.getElementsByClassName("video-title")[i + ln.length].innerHTML = `${p[fp[i]][2]}`;

        var startYear = parseInt(p[fp[i]][3].slice(0, 4));
        var startMonth = parseInt(p[fp[i]][3].slice(5, 7));
        var startDay = parseInt(p[fp[i]][3].slice(8, 10));
        var ago = setAgo(startYear, startMonth, startDay);
        document.getElementsByClassName("video-sub")[i + ln.length].innerHTML = `${p[fp[i]][4]} • ${ago}`;
    }

    var blocks = document.getElementsByClassName("block-elements");
    for (var i = 0; i < blocks.length; i++) {
        document.getElementsByClassName("block-elements")[i].innerHTML +=
        `<div class="block-right" onclick="loadSmallVideos(${playlists[i][2]}, '${playlists[i][0]}')">
            <img style="width: 50px; height: 50px;" src="icons/icons8-next-page-96.png">
        </div>`;
    }
    
    setInterval(setVideoStarts, 50000 / (ln.length + fp.length));
}

function setAgo(startYear, startMonth, startDay) {
    var currentDate = new Date().toJSON();
    var currentYear = parseInt(currentDate.slice(0, 4));
    var currentMonth = parseInt(currentDate.slice(5, 7));
    var currentDay = parseInt(currentDate.slice(8, 10));

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

let total_load = 0;
function clickMenu(index) {
    for (var i = 0; i < 5; i++) {
        document.getElementsByClassName("menu-item")[i].id = "menu-item";
    }
    document.getElementsByClassName("menu-item")[index].id = "highlight-item";
    
    if (index == 0) {
        document.getElementById("container").innerHTML =  `
            <div class="block">
                <div class="trailer-elements">
                    <div class="trailer-video-container">
                        <video width="480" height="320" controls autoplay muted loop class="trailer-video">
                            <source src="trailer.mp4" type="video/mp4">
                        </video>
                    </div>
                    <div class="trailer-text">
                        <div class="trailer-video-title">Channel Trailer: Taliyah Huang</div>
                        <div class="trailer-video-sub">Inventive trailblazer with a cheerful energy! • 19 years old</div>
                        <div class="trailer-video-description">I’m a biomedical engineering student at Johns Hopkins University, while also pursuing minors that capture my interest for robotics, computer science, and entrepreneurship.
                            <br><br>As a high schooler, I discovered a passion for engineering, and spent years honing my creativity and innovation.
                            <br><br>I met my best friend who supported me, despite my failed assistive device I had worked on for months.
                            <br><br> Now, it’s my goal to develop in the clinical field, so that I can give back to the kindest hearts who need technology more than anyone.
                        </div>
                    </div>
                </div>
            </div>
            <div class="block">
                <div class="block-title">Live now</div>
                <div class="block-elements">
                </div>
            </div>
            <div class="block">
                <div class="block-title">Featured projects</div>
                <div class="block-elements">
                </div>
            </div>`;
        loadhome();

    } else if (index == 1) {
        let container = document.getElementById("container");
        total_load = Math.floor((container.offsetWidth - 60) / 240) * 2;
        loadSmallVideos(all.slice(0, total_load), 'All');
        

        let screen = document.getElementsByClassName("screen")[0];
        screen.addEventListener('scroll', function() {
            if (total_load < all.length) {
                if (screen.scrollTop >= -200 + (total_load / Math.floor((container.offsetWidth - 60) / 240)) * 230) {
                    let addition = Math.floor((container.offsetWidth - 60) / 240);
                    let together = total_load + addition;
                    loadMore(total_load, together);
                    total_load += addition;
                }
            }
        });
        
    } else if (index == 2) {
        shuffle(skills);
        skillsOpen();
    } else if (index == 3) {
        document.getElementById("container").style.backgroundColor = "#0F0E0E";
        document.getElementById("container").innerHTML =  `<div class="page"></div>`;
        for (var i = 0; i < playlists.length - 1; i++) {
            document.getElementsByClassName("page")[0].innerHTML += 
            `<div class="block-video" onclick="loadSmallVideos(${playlists[i][2]}, '${playlists[i][0]}')" onmouseover="playlistOver(${i})" onmouseout="playlistOut(${i})">
                <div class="small-video-thumbnail">
                    <div class="playlist-cover">
                        <div class="playlist-count"></div>
                        <div class="playlist-icon"></div>
                    </div>
                </div>
                <div class="small-video-title"></div>
                <div class="video-sub" style="margin-bottom: 20px">VIEW FULL PLAYLIST</div>
            </div>`;
            document.getElementsByClassName("small-video-thumbnail")[i].style.backgroundImage = `url(thumbnails/${playlists[i][1][0][0]})`;
            document.getElementsByClassName("small-video-title")[i].innerHTML = `${playlists[i][0]}`;
            document.getElementsByClassName("playlist-count")[i].innerHTML = `${playlists[i][1].length}`
        }
        for (var i = 0; i < skill_playlists.length; i++) {
            document.getElementsByClassName("page")[0].innerHTML +=
            `<div class="block-video" onclick="loadSmallVideos(sk_list[${i}], '${skill_playlists[i][0]}')" onmouseover="playlistOver(${i + playlists.length - 1})" onmouseout="playlistOut(${i + playlists.length - 1})">
                <div class="small-video-thumbnail">
                    <div class="playlist-cover">
                        <div class="playlist-count"></div>
                        <div class="playlist-icon"></div>
                    </div>
                </div>
                <div class="small-video-title"></div>
                <div class="video-sub">VIEW FULL PLAYLIST</div>
            </div>`;
            document.getElementsByClassName("small-video-thumbnail")[i + playlists.length - 1].style.backgroundImage = `url(skills/${skills[skill_playlists[i][3]][0]})`;
            document.getElementsByClassName("small-video-title")[i + playlists.length - 1].innerHTML = `${skill_playlists[i][0]}`;
            document.getElementsByClassName("playlist-count")[i + playlists.length - 1].innerHTML = `${skill_playlists[i][2]}`;
        }

    } else if (index == 4) {
        document.getElementById("container").innerHTML =  `
        <div class="block">
            <div class="about-text-container">
            <div class="block-title">About Me</div>
            <div class="about-text"></div>
            <div class="about-channel">
                <strong>Why a Youtube channel theme?</strong><br>
                Designing and programming this website was honestly one of my most fun projects of all time!
                Ever since I started making Youtube videos in elementary school, I was always proud of my high-effort creative projects despite the low view counts.
                It didn’t matter to me if the comments complained about the poor quality or if there weren’t any comments at all, I simply enjoyed being brave enough to share my ideas and personality with the internet!!
            </div>
            </div>
        </div>`;
        document.getElementsByClassName("about-text")[0].innerHTML = `Hello! My name is Taliyah. I am an inventor, entrepreneur, and a junior studying biomedical engineering with a passion for mechatronics. I'm particularly interested in med tech startups in the robotics field!
        <br><br>❤︎❤︎❤︎
        <br>Current Education
        <br>Johns Hopkins University (2022 - Present)
        <br>Major ❥ Biomedical Engineering, B.S.
        <br>Minors ❥ Robotics, Computer Science, Entrepreneurship & Management
        <br><br>❤︎❤︎❤︎
        <br>Contact me:
        <br>❥ <a href="mailto:thuang57@jhu.edu" target="_blank" class="hyperlink">thuang57@jhu.edu</a>
        <br>❥ <a href="mailto:taliyahengineering@gmail.com" target="_blank" class="hyperlink">taliyahengineering@gmail.com</a>
        <br><br>❤︎❤︎❤︎
        <br>Follow me for fun content!
        <br>Youtube: <a href="http://youtube.com/@taliyahengineering" target="_blank" class="hyperlink">https://youtube.com/@taliyahengineering</a>
        <br>Instagram: <a href="http://instagram.com/taliyahengineering" target="_blank" class="hyperlink">http://instagram.com/taliyahengineering</a>
        <br>Facebook: <a href="http://facebook.com/taliyahengineering" target="_blank" class="hyperlink">http://facebook.com/taliyahengineering</a>
        <br>TikTok: <a href="http://tiktok.com/@taliyahengineering" target="_blank" class="hyperlink">http://tiktok.com/@taliyahengineering</a>`
    }

    document.getElementsByClassName("screen")[0].scrollTo(0, 250);
}

const setVideoStarts = () => {
    var video = document.getElementsByClassName("video-thumbnail")[startIndex];
    var nowPlaying = $(video).find('iframe').attr('src');
    $(video).find('iframe').attr('src', nowPlaying);
    startIndex++;
    if (startIndex == ln.length + fp.length) {
        startIndex = 0;
    }
};

function playvid(index) {
    document.getElementsByClassName("clear")[index].style.transition = "ease-in-out 0.5s";
    document.getElementsByClassName("clear")[index].style.opacity = 0;
    document.getElementsByClassName("duration")[index].style.opacity = 0;
}

function stopvid(index) {
    document.getElementsByClassName("clear")[index].style.transition = "none";
    document.getElementsByClassName("clear")[index].style.opacity = 1;
    document.getElementsByClassName("duration")[index].style.opacity = 1;
}

const setSmallVideoStarts = () => {
    var video = document.getElementsByClassName("small-video-thumbnail")[smallStartIndex];
    var smallNowPlaying = $(video).find('iframe').attr('src');
    $(video).find('iframe').attr('src', smallNowPlaying);
    smallStartIndex++;
    if (smallStartIndex == all.length) {
        smallStartIndex = 0;
    }
};

function playsmallvid(index) {
    document.getElementsByClassName("small-clear")[index].style.transition = "ease-in-out 0.5s";
    document.getElementsByClassName("small-clear")[index].style.opacity = 0;
    document.getElementsByClassName("small-duration")[index].style.opacity = 0;
}

function stopsmallvid(index) {
    document.getElementsByClassName("small-clear")[index].style.transition = "none";
    document.getElementsByClassName("small-clear")[index].style.opacity = 1;
    document.getElementsByClassName("small-duration")[index].style.opacity = 1;
}

function loadMore(index_start, index_end) {
    let list = all;
    if (list.length > index_end) {
        for (var i = index_start; i < index_end; i++) {
            document.getElementsByClassName("page")[0].innerHTML +=
                `<div class="block-video" onmouseenter="playsmallvid(${i})" onmouseleave="stopsmallvid(${i})" onclick="openVideo(${all.indexOf(list[i])})">
                    <div class="small-video-thumbnail">
                        <iframe src="https://www.youtube.com/embed/${list[i][5]}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&start=${list[i][6]}"
            height="240" width="240" frameborder="0" style="position:absolute;"></iframe>
                        <div class="small-clear"></div>
                        <div class="small-duration"></div>
                    </div>
                    <div class="small-video-title"></div>
                    <div class="video-sub"></div>
                    <div class="video-tag"></div>
                </div>`
            
            document.getElementsByClassName("small-clear")[i].style.backgroundImage = `url('thumbnails/${list[i][0]}')`;
            document.getElementsByClassName("small-duration")[i].innerHTML = `${list[i][1]}`;
            if (p.includes(list[i])) {
                document.getElementsByClassName("video-tag")[i].innerHTML = 'Project';
            } else if (w.includes(list[i])) {
                document.getElementsByClassName("video-tag")[i].innerHTML = 'Work Experience';
            }
            if (list[i][1] == '🔉 LIVE') {
                document.getElementsByClassName("small-duration")[i].style.backgroundColor = "red";
                document.getElementsByClassName("small-duration")[i].style.color = "white";
            }
            document.getElementsByClassName("small-video-title")[i].innerHTML = `${list[i][2]}`;

            var startYear = parseInt(list[i][3].slice(0, 4));
            var startMonth = parseInt(list[i][3].slice(5, 7));
            var startDay = parseInt(list[i][3].slice(8, 10));
            var ago = setAgo(startYear, startMonth, startDay);
            document.getElementsByClassName("video-sub")[i].innerHTML = `${list[i][4]} • ${ago}`;
        }

        setInterval(setSmallVideoStarts, 50000 / index_end);
    }
}

function loadSmallVideos(list, list_name) {
    if (list_name != 'All') {
        document.getElementById("container").innerHTML =  `<div class="block-title" style="margin: 30px 0px 10px 30px;">${list_name}<div class="playlist-icon"></div></div><div class="page"></div>`;
    } else {
        document.getElementById("container").innerHTML =  `<div class="page"></div>`;
    }
    for (var i = 0; i < list.length; i++) {
        document.getElementsByClassName("page")[0].innerHTML +=
            `<div class="block-video" onmouseenter="playsmallvid(${i})" onmouseleave="stopsmallvid(${i})" onclick="openVideo(${all.indexOf(list[i])})">
                <div class="small-video-thumbnail">
                    <iframe src="https://www.youtube.com/embed/${list[i][5]}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&start=${list[i][6]}"
        height="240" width="240" frameborder="0" style="position:absolute;"></iframe>
                    <div class="small-clear"></div>
                    <div class="small-duration"></div>
                </div>
                <div class="small-video-title"></div>
                <div class="video-sub"></div>
                <div class="video-tag"></div>
            </div>`
        
        document.getElementsByClassName("small-clear")[i].style.backgroundImage = `url('thumbnails/${list[i][0]}')`;
        document.getElementsByClassName("small-duration")[i].innerHTML = `${list[i][1]}`;
        if (p.includes(list[i])) {
            document.getElementsByClassName("video-tag")[i].innerHTML = 'Project';
        } else if (w.includes(list[i])) {
            document.getElementsByClassName("video-tag")[i].innerHTML = 'Work Experience';
        }
        if (list[i][1] == '🔉 LIVE') {
            document.getElementsByClassName("small-duration")[i].style.backgroundColor = "red";
            document.getElementsByClassName("small-duration")[i].style.color = "white";
        }
        document.getElementsByClassName("small-video-title")[i].innerHTML = `${list[i][2]}`;

        var startYear = parseInt(list[i][3].slice(0, 4));
        var startMonth = parseInt(list[i][3].slice(5, 7));
        var startDay = parseInt(list[i][3].slice(8, 10));
        var ago = setAgo(startYear, startMonth, startDay);
        document.getElementsByClassName("video-sub")[i].innerHTML = `${list[i][4]} • ${ago}`;
    }

    if (list_name == 'All') {
        setInterval(setSmallVideoStarts, 50000 / 8);
    } else {
        setInterval(setSmallVideoStarts, 50000 / list.length);
    }
    document.getElementsByClassName("screen")[0].scrollTo(0, 250);
}

function playlistOver(index) {
    document.getElementsByClassName("playlist-cover")[index].style.width = "230px";
}

function playlistOut(index) {
    document.getElementsByClassName("playlist-cover")[index].style.width = "80px";
}

function openSearch() {
    for (var i = 0; i < 5; i++) {
        document.getElementsByClassName("menu-item")[i].id = "menu-item";
    }
    document.getElementsByClassName("small-menu-item")[0].id = "highlight-item";
    document.getElementsByClassName("menu")[0].innerHTML += 
    `<div type="text" class="search-input-container">
        <input type="text" class="search-input"></input>
    </div>`;
    document.getElementsByClassName("search-input")[0].focus();
}