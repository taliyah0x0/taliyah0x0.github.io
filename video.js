let current_content = -1;
let files = ['mov', 'mp4', 'jpg', 'png'];
function openVideo(index) {
    for (var i = 0; i < 5; i++) {
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

    var channel;
    var channel_description;
    var button_text;
    var channel_pic = all[index][9];
    var description = all[index][12];
    if (w.includes(all[index])) {
        channel = all[index][4];
        channel_description = all[index][10];
        learn_more = all[index][11];
        button_text = "Learn More";
    } else {
        channel = all[index][10];
        channel_description = "Independent Passion Project by Taliyah";
        learn_more = `https://youtube.com/watch?v=${all[index][5]}`;
        button_text = "Watch Video";
    }

    let content_array = all[index][15];
    
    if (code.substring(0,8) != "https://" && files.includes(content_array[0].slice(-3).toLowerCase()) == false) {
        document.getElementById("container").innerHTML = 
        `<div class="open-video">
            <div class="iframe-container">
                <iframe src="https://www.youtube.com/embed/${code}?mute=1&controls=1&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3"
                    height="428" width="600" frameborder="0" allowfullscreen style="position:absolute; top:-60px;"></iframe>
            </div>
            <div class="cover"></div>
            <div class="video-cover" onclick="removeCover()">
                <div class="heartplay"></div>
            </div>
            <div class="left-panel">
                <div class="title">${title}</div>
                <a href="${learn_more}" target="_blank"><div class="video-profile">
                    <div class="video-profile-pic"></div>
                    <div class="video-profile-text">
                        <div class="video-profile-name">${channel}</div>
                        <div class="video-profile-role">${channel_description}</div>
                    </div>
                    <div class="small-subscribe-button">${button_text}</div>
                </div></a>
                <div class="description"><div class="description-title">${channel} • ${ago}&nbsp;&nbsp;${hashtags}</div>${description}</div>
            </div>
            <div class="right-panel">
                <div class="highlights-box">
                    <div class="highlights-box-title">Key moments</div>
                </div>
            </div>
        </div>`;
        current_content = -1;
        play = 0;
    } else if (files.includes(content_array[0].slice(-3).toLowerCase())) {
        document.getElementById("container").innerHTML = 
        `<div class="open-video">
            <div class="iframe-container">
                <video height="428" autoplay muted>
                    <source src="content/${all[index][4]}/${content_array[0]}" type="video/mp4">
                </video>
            </div>
            <div class="video-cover" onclick="pause()">
                <div class="heartplay"></div>
                <div class="bottom-bar"></div>
                <div class="playbar"></div>
                <div class="play" onclick="pause()"></div>
                <div class="previous" onclick="previous(${index})"></div>
                <div class="next" onclick="next(${index})"></div>
                <div class="moment-text">${all[index][14][0]}</div>
                <a href="content/${all[index][4]}/${content_array[0]}" target="_blank" onclick="play=0;pause()" id="full-screen"><div class="full-screen"></div></a>
            </div>
            <div class="left-panel">
                <div class="title">${title}</div>
                <a href="${learn_more}" target="_blank"><div class="video-profile">
                    <div class="video-profile-pic"></div>
                    <div class="video-profile-text">
                        <div class="video-profile-name">${channel}</div>
                        <div class="video-profile-role">${channel_description}</div>
                    </div>
                    <div class="small-subscribe-button">${button_text}</div>
                </div></a>
                <div class="description"><div class="description-title">${channel} • ${ago}&nbsp;&nbsp;${hashtags}</div>${description}</div>
            </div>
            <div class="right-panel">
                <div class="highlights-box">
                    <div class="highlights-box-title">Key moments</div>
                </div>
            </div>
        </div>`;
        
        if (files.slice(0,2).includes(content_array[0].slice(-3).toLowerCase()) == false) {
            document.getElementsByClassName('iframe-container')[0].style.backgroundImage = `url('content/${index}/${content_array[0]}')`;
            document.getElementsByTagName("video").style.opacity = 0;
        }
        document.getElementsByClassName("heartplay")[0].style.display = "none";
        document.getElementsByClassName("video-cover")[0].style.backgroundColor = "rgb(0,0,0,0)";
        document.getElementsByClassName("video-cover")[0].style.pointerEvents = "none";
        document.getElementsByClassName("play")[0].style.backgroundImage = "url('icons/icons8-pause-90.png')";
        current_content = 0;
        play = 1;

        var video = document.getElementsByTagName('video')[0];
        video.addEventListener('ended', function() {
            next(index);
        });
    } else {
        document.getElementById("container").innerHTML = 
        `<div class="open-video">
            <div class="iframe-container">
                <iframe src="${code}" height="360" width="600" frameborder="0" id="none" muted="yes"></iframe>
            </div>
            <div class="video-cover" onclick="pause()">
                <div class="heartplay"></div>
                <div class="playbar"></div>
                <div class="play" onclick="pause()"></div>
                <a href="${code}" target="_blank"><div class="full-screen"></div></a>
            </div>
            <div class="left-panel">
                <div class="title">${title}</div>
                <a href="${learn_more}" target="_blank"><div class="video-profile">
                    <div class="video-profile-pic"></div>
                    <div class="video-profile-text">
                        <div class="video-profile-name">${channel}</div>
                        <div class="video-profile-role">${channel_description}</div>
                    </div>
                    <div class="small-subscribe-button">${button_text}</div>
                </div></a>
                <div class="description"><div class="description-title">${channel} • ${ago}&nbsp;&nbsp;${hashtags}</div>${description}</div>
            </div>
            <div class="right-panel">
                <div class="highlights-box">
                    <div class="highlights-box-title">Key moments</div>
                </div>
            </div>
        </div>`;
        
        if (channel == "Typewanese & Tai-Ping") {
            document.getElementsByClassName("video-cover")[0].innerHTML +=
            `<div class="keyboard-popup">↑ Click here for keyboards!</div>`;
        } else if (channel != "BobaWay" && channel != "Typewanese & Tai-Ping") {
            document.getElementsByTagName("iframe")[0].style.position = "absolute";
            document.getElementsByTagName("iframe")[0].width = "1610";
            document.getElementsByTagName("iframe")[0].id = "setZoom";
            document.getElementsByTagName("iframe")[0].height = "1100";
            if (channel != "Auto Flöte Clean") {
                document.getElementsByTagName("iframe")[0].style.top = "-50px";
                document.getElementsByTagName("iframe")[0].width = "1620";
            }
        }
        current_content = -1;
        play = 0;
    }

    if (all[index][16] != '') {
        document.getElementsByClassName("left-panel")[0].innerHTML +=
        `<div class="description">${all[index][16]}</div>`
    }
    
    document.getElementsByClassName("video-profile-pic")[0].style.backgroundImage = `url(channels/${channel_pic})`

    document.getElementsByClassName("right-panel")[0].innerHTML += 
    `<div class="related-buttons">
        <div class="related-button" onclick="relatedClick(0, 3, 'All')">All</div>
    </div>`;

    var related_buttons = 1;
    var list;
    if (w.includes(all[index])) {
        document.getElementsByClassName("related-buttons")[0].innerHTML +=
        `<div class="related-button" id="related-highlight" onclick="relatedClick(1, 2, 'Playlists')">Work Experiences</div>`;
        list = JSON.parse(JSON.stringify(w_index));
        document.getElementsByClassName("right-panel")[0].innerHTML +=
        `<div class="related-playlist" onclick="loadSmallVideos(${playlists[2][2]}, 'Work Experience')">VIEW FULL PLAYLIST</div>`;
        related_buttons++;

    } else if (p.includes(all[index])) {
        document.getElementsByClassName("related-buttons")[0].innerHTML +=
        `<div class="related-button" id="related-highlight" onclick="relatedClick(1, 1, 'Playlists')">Personal Projects</div>`;
        list = JSON.parse(JSON.stringify(p_index));
        document.getElementsByClassName("right-panel")[0].innerHTML +=
        `<div class="related-playlist" onclick="loadSmallVideos(${playlists[1][2]}, 'Personal Projects')">VIEW FULL PLAYLIST</div>`;
        related_buttons++;
    }
    
    if (all[index][1] == '🔉 LIVE') {
        document.getElementsByClassName("related-buttons")[0].innerHTML +=
        `<div class="related-button" onclick="relatedClick(2, 0, 'Playlists')">Live Now</div>`;
        related_buttons++;
    }

    for (var i = 0; i < all[index][13].length; i++) {
        var skill_index;
        for (var j = 0; j < skill_playlists.length; j++) {
            if (all[index][13][i] == skill_playlists[j][0] || (all[index][13][i] == 'CAD' && skill_playlists[j][0] == 'Computer-Aided Design')) {
                skill_index = j;
            }
        }
        document.getElementsByClassName("related-buttons")[0].innerHTML +=
        `<div class="related-button" onclick="relatedClick(${related_buttons + i}, ${skill_index}, 'Skills')">${all[index][13][i]}</div>`;
    }

    document.getElementsByClassName("right-panel")[0].innerHTML +=
    `<div class="related-videos"></div>`;

    for (var i = 0; i < all[index][14].length; i++) {
        if (all[index][15][i].substring(0, 4) == 'http' || all[index][15][i].substring(0, 4) == 'cont') {
        document.getElementsByClassName("highlights-box")[0].innerHTML +=
        `<a href="${all[index][15][i]}" target="_blank"><strong class="hyperlink">0${i}:00</strong></a> &nbsp; ${all[index][14][i]}<br>`;
        } else if (files.includes(all[index][15][i].slice(-3).toLowerCase())) {
            document.getElementsByClassName("highlights-box")[0].innerHTML +=
            `<strong class="hyperlink" onclick="current_content=${i-1};next(${index});">0${i}:00</strong> &nbsp; ${all[index][14][i]}<br>`;
        } else {
            document.getElementsByClassName("highlights-box")[0].innerHTML +=
        `<strong class="hyperlink">0${i}:00</strong> &nbsp; ${all[index][14][i]}<br>`;
        }
    }

    document.getElementsByClassName("highlights-box")[0].innerHTML +=
    `<div class="read-description" onclick="goDescription()">SHOW MORE</div>`;

    var leftHeight = document.getElementsByClassName("iframe-container")[0].offsetHeight + document.getElementsByClassName("left-panel")[0].offsetHeight;
    var rightHeight = document.getElementsByClassName("right-panel")[0].offsetHeight;
    let larger = Math.max(leftHeight, rightHeight) + 20;
    document.getElementsByClassName("open-video")[0].style.height = larger + 'px';

    loadRelatedVideos(index, list);

    if (window.matchMedia("(max-aspect-ratio: 1/1)").matches) {
        let left = document.getElementsByClassName("left-panel")[0].offsetHeight;
        console.log(left)
        document.getElementsByClassName("right-panel")[0].style.top = (left + 240) + 'px';
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
        document.getElementsByClassName("play")[0].style.backgroundImage = "url('icons/icons8-play-90.png')";
        document.getElementsByClassName("video-cover")[0].style.backgroundColor = "rgb(0,0,0,0.2)";
        document.getElementsByClassName("video-cover")[0].style.pointerEvents = "auto";
        if (current_content >= 0) {
            document.getElementsByTagName("video")[0].pause();
        }
        setTimeout (() => {
            play = 0;
        }, 10);
    } else {
        document.getElementsByClassName("heartplay")[0].style.display = "none";
        document.getElementsByClassName("play")[0].style.backgroundImage = "url('icons/icons8-pause-90.png')";
        document.getElementsByClassName("video-cover")[0].style.backgroundColor = "rgb(0,0,0,0)";
        document.getElementsByClassName("video-cover")[0].style.pointerEvents = "none";
        if (current_content >= 0) {
            document.getElementsByTagName("video")[0].play();
        }
        setTimeout (() => {
            play = 1;
        }, 10);
    }
}

function relatedHover(index) {
    document.getElementsByClassName("related-video-clear")[index].style.opacity = "0.7";
}

function relatedOff(index) {
    document.getElementsByClassName("related-video-clear")[index].style.opacity = "1";
}

function relatedClick(button, index, playlist_type) {
    var buttons = document.getElementsByClassName("related-button");
    for (var i = 0; i < buttons.length; i++) {
        document.getElementsByClassName("related-button")[i].id = "related-button";
    }
    document.getElementsByClassName("related-button")[button].id = "related-highlight";

    document.getElementsByClassName("related-videos")[0].innerHTML = "";

    if (playlist_type == 'Playlists') {
        document.getElementsByClassName("related-playlist")[0].setAttribute( "onClick", `javascript: loadSmallVideos(${playlists[index][2]}, '${playlists[index][0]}');` );
        loadRelatedVideos(index, playlists[index][3]);
    } else if (playlist_type == 'All') {
        document.getElementsByClassName("related-playlist")[0].setAttribute( "onClick", "javascript: clickMenu(1);");
        loadRelatedVideos(index, playlists[index][3]);
    } else if (playlist_type == 'Skills') {
        document.getElementsByClassName("related-playlist")[0].setAttribute( "onClick", `javascript: loadSmallVideos(sk_list[${index}], '${skill_playlists[index][0]}');` );
        loadRelatedVideos(index, skill_playlists[index][1]);
    }
}

function loadRelatedVideos(index, in_list) {
    var list = JSON.parse(JSON.stringify(in_list));
    shuffle(list);
    var related_videos = -1;
    for (var i = 0; i < list.length; i++) {
        if (all[list[i]][0] != all[index][0]) {
            related_videos++;
            document.getElementsByClassName("related-videos")[0].innerHTML +=
            `<div class="related-video" onmouseover="relatedHover(${related_videos})" onmouseout="relatedOff(${related_videos})" onclick="openVideo(${list[i]})">
                <div class="related-video-thumbnail">
                    <div class="related-video-clear"></div>
                    <div class="related-duration"></div>
                </div>
                <div class="related-video-text">
                    <div class="related-video-title"></div>
                    <div class="video-sub"></div>
                </div>
            </div>`;

            document.getElementsByClassName("related-video-clear")[related_videos].style.backgroundImage = `url('thumbnails/${all[list[i]][0]}')`;
            if (JSON.stringify(list) == JSON.stringify(p_index)) {
                document.getElementsByClassName("related-video-clear")[related_videos].style.backgroundImage = `url('thumbnails/fp/${all[list[i]][0]}')`;
            }
            document.getElementsByClassName("related-duration")[related_videos].innerHTML = `${all[list[i]][1]}`;
            if (all[list[i]][1] == '🔉 LIVE') {
                document.getElementsByClassName("related-duration")[related_videos].style.backgroundColor = "red";
                document.getElementsByClassName("related-duration")[related_videos].style.color = "white";
            } else {
                document.getElementsByClassName("related-duration")[related_videos].style.width = "30px";
                document.getElementsByClassName("related-duration")[related_videos].style.top = "32px";
                document.getElementsByClassName("related-duration")[related_videos].style.left = "51px";
            }
            
            document.getElementsByClassName("related-video-title")[related_videos].innerHTML = `${all[list[i]][2]}`;

            var startYear = parseInt(all[list[i]][3].slice(0, 4));
            var startMonth = parseInt(all[list[i]][3].slice(5, 7));
            var startDay = parseInt(all[list[i]][3].slice(8, 10));
            var ago = setAgo(startYear, startMonth, startDay);
            document.getElementsByClassName("video-sub")[related_videos].innerHTML = `${all[list[i]][4]}<br>• ${ago}`;
            document.getElementsByClassName("video-sub")[related_videos].style.marginBottom = "0";
        }
    }
}

function goDescription() {
    document.getElementsByClassName("screen")[0].scrollTo(0, 675);
}

function next(index) {
    current_content += 1;
    if (current_content == all[index][15].length) {
        current_content = 0;
    }
    document.getElementById("full-screen").href = `content/${all[index][4]}/${all[index][15][current_content]}`;
    document.getElementsByClassName("moment-text")[0].innerHTML = all[index][14][current_content];
    
    if (files.slice(0,2).includes(all[index][15][current_content].slice(-3).toLowerCase())) {
        document.getElementsByTagName("video")[0].src = `content/${all[index][4]}/${all[index][15][current_content]}`;
        document.getElementsByTagName("video")[0].style.opacity = 1;
        document.getElementsByClassName('iframe-container')[0].style.backgroundImage = "";
    } else {
        document.getElementsByClassName("iframe-container")[0].style.backgroundImage = `url("content/${all[index][4]}/${all[index][15][current_content]}")`;
        document.getElementsByTagName("video")[0].style.opacity = 0;
        document.getElementsByTagName("video")[0].src = 'content/placeholder.mp4';
    }
    play = 0;
    document.getElementsByClassName("screen")[0].scrollTo(0, -500);
}

function previous(index) {
    current_content -= 1;
    if (current_content == -1) {
        current_content = all[index][15].length - 1;
    }
    document.getElementById("full-screen").href = `content/${all[index][4]}/${all[index][15][current_content]}`;
    document.getElementsByClassName("moment-text")[0].innerHTML = all[index][14][current_content];

    if (files.slice(0,2).includes(all[index][15][current_content].slice(-3).toLowerCase())) {
        document.getElementsByTagName("video")[0].src = `content/${all[index][4]}/${all[index][15][current_content]}`;
        document.getElementsByTagName("video")[0].style.opacity = 1;
        document.getElementsByClassName('iframe-container')[0].style.backgroundImage = "";
    } else {
        document.getElementsByClassName("iframe-container")[0].style.backgroundImage = `url("content/${all[index][4]}/${all[index][15][current_content]}")`;
        document.getElementsByTagName("video")[0].style.opacity = 0;
        document.getElementsByTagName("video")[0].src = 'content/placeholder.mp4';
    }
    play = 0;
    document.getElementsByClassName("screen")[0].scrollTo(0, -500);
}