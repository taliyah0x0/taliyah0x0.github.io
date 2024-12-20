// TALIYAH HUANG
/* Home Page, Menu, Case Studies, Playlists, About */

var startIndex = 0;
var smallStartIndex = 0;
var currPage = 0;
var skipOut = 0;
var menu_offset = 0;

// first load function to create main banner and navigate preset hash location
function loadhome() {
    if (window.matchMedia("(max-aspect-ratio: 1/1)").matches) { // if this is a mobile device
        // set compatible main banner layout
        document.getElementsByClassName('header')[0].innerHTML =
        `<div class="profile">
            <div class="profile-image"></div>
            <div class="name">
                <div>Taliyah Huang</div>
                <div class="name-banner">
                    ✓ Looking for internships
                </div>
            </div>
        </div>
        <div class="sub">Surgical robotics • Software • Medical device engineering • Startups</div>
        <div class="buttons">
            <a href="https://www.linkedin.com/in/taliyah-huang/" target="_blank">
                <div class="join-button">
                    in
                </div>
            </a>
            <a href="Taliyah_Huang_CV.pdf" target="_blank">
                <div class="cv-button">
                    cv
                </div>
            </a>
            <a href="mailto:taliyahengineering@gmail.com" target="_blank">
                <div class="subscribe-button">
                    Contact Me
                </div>
            </a>
        </div>`;
    }

    let pathname = window.location.hash;
    pathname = pathname.substring(1, pathname.length);
    if (pathname.length > 0) { // check if there is an associated hash
        switch (pathname) {
            case "experiences":
                skipOut = 1;
                clickMenu(1);
                break;
            case "skills":
                skipOut = 1;
                clickMenu(2);
                break;
            case "playlists":
                skipOut = 1;
                clickMenu(3);
                break;
            case "casestudies":
                skipOut = 1;
                clickMenu(4);
                break;
            case "about":
                skipOut = 1;
                clickMenu(5);
                break;
            default:
                clickMenu(0); // if nothing matches, go to homepage
                break;
        }

        // check if the hash is for a specific experience
        for (var i = 0; i < all.length; i++) {
            if (pathname == all[i][0].substring(0, all[i][0].length - 4)) {
                skipOut = 1;
                document.getElementsByClassName("menu-item")[0].id = "menu-item";
                document.getElementsByClassName("menu-item")[1].id = "highlight-item";
                openVideo(i);
            }
        }

        // check if the hash is for a specific skill
        for (var i = 0; i < skills.length; i++) {
            if (pathname == skills[i][0].substring(0, skills[i][0].length - 4)) {
                skipOut = 1;
                document.getElementsByClassName("menu-item")[0].id = "menu-item";
                document.getElementsByClassName("menu-item")[2].id = "highlight-item";
                shortsOpen(i);
            }
        }
    }

    // set fadeout of screen to start 1.5s after page was loaded
    setTimeout(() => {
        document.getElementsByClassName('opening')[0].classList.add('hide');
        if (!skipOut) { // if we're going to be on home page, start playing the video
            document.getElementsByClassName("trailer-video-container")[0].innerHTML =
                `<a href="trailer.mp4" target="_blank"><video muted loop class="trailer-video" autoplay playsinline>
                    <source src="trailer.mp4" type="video/mp4">
                </video></a>`;
        }
        setTimeout(() => { // fully remove the opening screen after 1 second
            document.getElementsByClassName('opening')[0].style.display = 'none';
        }, 1000);
    }, 1500);

    if (!skipOut) loadhomefull(); // if homepage wasn't redirected, load the rest of the home page

    // reload the page whenever window is resized to properly set dimensions of elements
    window.addEventListener('resize', function() {
        window.location.reload();
    });
}

// load the rest of the home page elements
function loadhomefull() {
    for (var i = 0; i < case_studies.length; i++) { // load the featured case studies
        document.getElementsByClassName("block-elements")[0].innerHTML +=
            `<div class="block-video" onmouseenter="playvid(${i})" onmouseleave="stopvid(${i})" onclick="openCaseStudies(${i})">
                <div class="video-thumbnail">
                    <iframe src="https://www.youtube.com/embed/${case_studies[i][5]}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3"
                height="275" width="275" frameborder="0" style="position:absolute;"></iframe>
                    <div class="clear"></div>
                    <div class="duration"></div>
                </div>
                <div class="video-title"></div>
                <div class="video-sub"></div>
                <div class="video-tag">Case Study</div>
            </div>`;
        
        if (window.matchMedia("(max-aspect-ratio: 1/1)").matches) { // if we're on a phone, can remove iframe video in background
            document.getElementsByClassName("video-thumbnail")[i].innerHTML =
            `<div class="clear"></div>
            <div class="duration"></div>`;
        }
        document.getElementsByClassName("clear")[i].style.backgroundImage = `url('community/${case_studies[i][4]}')`;
        document.getElementsByClassName("duration")[i].innerHTML = `${case_studies[i][2]}`;
        document.getElementsByClassName("duration")[i].style.width = "45px";
        document.getElementsByClassName("duration")[i].style.left = "100px";
        document.getElementsByClassName("duration")[i].style.fontWeight = "bold";

        document.getElementsByClassName("duration")[i].style.backgroundColor = "rgb(0,0,0,0.5)";
        var ago = setAgo(case_studies[i][3]);
        document.getElementsByClassName("video-sub")[i].innerHTML = `${case_studies[i][6]} • ${ago}`;

        document.getElementsByClassName("video-title")[i].innerHTML = `${case_studies[i][1]}`;
    }
    // add arrow to view all case studies
    document.getElementsByClassName("block-elements")[0].innerHTML +=
    `<div class="block-right" onclick="openCaseStudies(0)">
        <img style="width: 50px; height: 50px;" src="icons/icons8-next-page-96.png">
    </div>`;

    // load featured work experiences
    for (var i = 0; i < fw.length; i++) {
        document.getElementsByClassName("block-elements")[1].innerHTML +=
            `<div class="block-video" onmouseenter="playvid(${i + case_studies.length})" onmouseleave="stopvid(${i + case_studies.length})" onclick="openVideo(${all.indexOf(w[fw[i]])})">
                <div class="video-thumbnail">
                    <iframe src="https://www.youtube.com/embed/${w[fw[i]][5]}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&start=${w[fw[i]][6]}"
                height="275" width="275" frameborder="0" style="position:absolute;"></iframe>
                    <div class="clear"></div>
                    <div class="duration"></div>
                </div>
                <div class="video-title"></div>
                <div class="video-sub"></div>
                <div class="video-tag">Work Experience</div>
            </div>`;
        
        if (window.matchMedia("(max-aspect-ratio: 1/1)").matches) { // if we're on a phone, can remove iframe video in background
            document.getElementsByClassName("video-thumbnail")[i + case_studies.length].innerHTML =
            `<div class="clear"></div>
            <div class="duration"></div>`;
        }
        document.getElementsByClassName("clear")[i + case_studies.length].style.backgroundImage = `url('thumbnails/${w[fw[i]][0]}')`;
        document.getElementsByClassName("duration")[i + case_studies.length].innerHTML = `${w[fw[i]][1]}`;
        document.getElementsByClassName("duration")[i + case_studies.length].style.width = "45px";
        document.getElementsByClassName("duration")[i + case_studies.length].style.left = "100px";
        document.getElementsByClassName("duration")[i + case_studies.length].style.fontWeight = "bold";
        if (w[fw[i]][1] == '🔉 LIVE') { // set red LIVE tag with white text
            document.getElementsByClassName("duration")[i + case_studies.length].style.backgroundColor = "red";
            document.getElementsByClassName("duration")[i + case_studies.length].style.paddingTop = "0";
            document.getElementsByClassName("duration")[i + case_studies.length].style.paddingBottom = "0";
            document.getElementsByClassName("video-sub")[i + case_studies.length].innerHTML = `${w[fw[i]][4]}`;
        } else { // default is semi transparent
            document.getElementsByClassName("duration")[i + case_studies.length].style.backgroundColor = "rgb(0,0,0,0.5)";
        }
        var ago = setAgo(w[fw[i]][3]);
        document.getElementsByClassName("video-sub")[i + case_studies.length].innerHTML = `${w[fw[i]][4]} • ${ago}`;
        document.getElementsByClassName("video-title")[i + case_studies.length].innerHTML = `${w[fw[i]][2]}`;
    }
    // add the arrow to view all work experiences
    document.getElementsByClassName("block-elements")[1].innerHTML +=
    `<div class="block-right" onclick="loadSmallVideos(${playlists[2][2]}, '${playlists[2][0]}')">
        <img style="width: 50px; height: 50px;" src="icons/icons8-next-page-96.png">
    </div>`;

    // load all featured projects
    for (var i = 0; i < fp.length; i++) {
        document.getElementsByClassName("block-elements")[2].innerHTML +=
            `<div class="block-video" onmouseenter="playvid(${i + fw.length + case_studies.length})" onmouseleave="stopvid(${i + fw.length + case_studies.length})" onclick="openVideo(${all.indexOf(p[fp[i]])})">
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
        if (window.matchMedia("(max-aspect-ratio: 1/1)").matches) { // if we're on a phone, can remove iframe video in background
            document.getElementsByClassName("video-thumbnail")[i + fw.length + case_studies.length].innerHTML =
            `<div class="clear"></div>
            <div class="duration"></div>`;
        }
        document.getElementsByClassName("clear")[i + fw.length + case_studies.length].style.backgroundImage = `url('thumbnails/fp/${p[fp[i]][0]}')`;
        document.getElementsByClassName("duration")[i + fw.length + case_studies.length].style.width = "40px";
        document.getElementsByClassName("duration")[i + fw.length + case_studies.length].style.left = "100px";
        document.getElementsByClassName("duration")[i + fw.length + case_studies.length].style.backgroundColor = "rgb(0,0,0,0.5)";
        document.getElementsByClassName("duration")[i + fw.length + case_studies.length].style.fontWeight = "bold";
        document.getElementsByClassName("duration")[i + fw.length + case_studies.length].innerHTML = `${p[fp[i]][1]}`;
        document.getElementsByClassName("video-title")[i + fw.length + case_studies.length].innerHTML = `${p[fp[i]][2]}`;

        var ago = setAgo(p[fp[i]][3]);
        document.getElementsByClassName("video-sub")[i + fw.length + case_studies.length].innerHTML = `${p[fp[i]][4]} • ${ago}`;
    }
    // add the arrow to view all projects
    document.getElementsByClassName("block-elements")[2].innerHTML +=
    `<div class="block-right" onclick="loadSmallVideos(${playlists[1][2]}, '${playlists[1][0]}')">
        <img style="width: 50px; height: 50px;" src="icons/icons8-next-page-96.png">
    </div>`;
    
    document.getElementsByClassName("screen")[0].scrollTo(0, 0); // scroll to top
    setInterval(setVideoStarts, 50000 / (fw.length + fp.length)); // set systematic video reloads
    currPage = 0;
    window.location.hash = "";
}

// function calculates how long ago based on date
function setAgo(input) {
    var startYear = parseInt(input.slice(0, 4));
    var startMonth = parseInt(input.slice(5, 7));
    var startDay = parseInt(input.slice(8, 10));

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

// let total_load = 0; // this is a variable used for the dynamic loading feature

// handle menu selections, index is the menu item from left to right
function clickMenu(index) {
    // unhighlight all menu items
    for (var i = 0; i < 6; i++) {
        document.getElementsByClassName("menu-item")[i].id = "menu-item";
    }
    document.getElementsByClassName("menu-item")[index].id = "highlight-item"; // only highlight the one that was just clicked on
    
    if (index == 0) { // HOME
        document.getElementById("container").innerHTML =  `
            <div class="block">
                <div class="trailer-elements">
                    <div class="trailer-video-container">
                        <a href="trailer.mp4" target="_blank">
                            <video controls autoplay muted loop class="trailer-video">
                            <source src="trailer.mp4" type="video/mp4">
                            </video>
                        </a>
                    </div>
                    <div class="trailer-text">
                        <a href="trailer.mp4" target="_blank"><div class="trailer-video-title">Channel Trailer: Taliyah Huang</div></a>
                        <div class="trailer-video-sub">Inventive trailblazer with a cheerful energy! • 20 years old</div>
                        <div class="trailer-video-description">I’m a biomedical engineering student at Johns Hopkins University, while also pursuing minors that capture my interest for robotics, computer science, and entrepreneurship.
                            <br><br>As a high schooler, I discovered a passion for engineering, and spent years honing my creativity and innovation.
                            <br><br>I met my best friend who supported me, despite my failed assistive device I had worked on for months.
                            <br><br> Now, it’s my goal to develop in the clinical field, so that I can give back to the kindest hearts who need technology more than anyone.
                        </div>
                    </div>
                </div>
            </div>
            <div class="block">
                <div class="block-title">Featured design case studies</div>
                <div class="block-elements">
                </div>
            </div>
            <div class="block">
                <div class="block-title">Featured work experiences</div>
                <div class="block-elements">
                </div>
            </div>
            <div class="block">
                <div class="block-title">Featured projects</div>
                <div class="block-elements">
                </div>
            </div>`;
        loadhomefull();
        
    } else if (index == 1) { // EXPERIENCes
        // unused code below for the dynamic loading
        /*let container = document.getElementById("container");
        //total_load = Math.floor((container.offsetWidth - 60) / 240) * 2;
        //loadSmallVideos(all.slice(0, total_load), 'All');
        
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
        });*/

        loadSmallVideos(all, 'All');
        window.location.hash = "#experiences";
        
    } else if (index == 2) { // SKILLS
        shuffle(indices);
        skills = indices.map(index => skills[index]);
        skill_playlists = indices.map(index => skill_playlists[index]);
        sk_list = indices.map(index => sk_list[index]);
        skillsOpen();

    } else if (index == 3) { // PLAYLISTS
        openPlaylists();

    } else if (index == 4) { // CASE STUDIES
        openCaseStudies(0);

    } else if (index == 5) { // ABOUT
        openAbout();
    }
}

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// function to open the case studies page
function openCaseStudies(index) {
    // remove highlight for all menu items
    for (var i = 0; i < 5; i++) {
        document.getElementsByClassName("menu-item")[i].id = "menu-item";
    }
    document.getElementsByClassName("menu-item")[4].id = "highlight-item"; // only highlight case studies selected on menu

    document.getElementById("container").innerHTML = ""; // clear the page

    // load all case studies
    for (var i = 0; i < case_studies.length; i++) {
        // set the associated date
        var year = parseInt(case_studies[i][3].slice(0, 4));
        var month = parseInt(case_studies[i][3].slice(5, 7));
        let date = months[month - 1] + " " + year;

        document.getElementById("container").innerHTML +=
        `<div class="community-block">
            <div class="community-pfp" onclick="toggleCloseAll(${i})"></div>
            <div class="community-section">
                <div class="community-title" onclick="toggleCloseAll(${i})">${case_studies[i][1]}<div class="community-date">${date}</div></div>
                <div class="community-text"></div>
                <div class="community-show" onclick="toggleShow(${i})">SHOW ALL</div>
            </div>
        </div>`;
        document.getElementsByClassName("community-pfp")[i].style.backgroundImage = `url(channels/${case_studies[i][0]})`;

        let text_box = document.getElementsByClassName("community-text")[i];
        // load all text sections
        for (var j = 0; j < (case_studies[i].length - 7)/2; j++) {
            text_box.innerHTML +=
            `<strong onclick="toggleSection(${i}, ${j})" class="case_${i}">❥ ${case_studies[i][j * 2 + 7]}</strong>
            <div class="text-section case_${i}"></div><br>`;
        }

        toggleSection(i, 0); // open the first section
    }
    
    // scroll to the relevant case study
    document.getElementsByClassName("screen")[0].scrollTo(0, 220 + document.getElementsByClassName("community-block")[index].getBoundingClientRect().height * index);
    window.location.hash = "#casestudies";
}

// used by case studies for toggling the SHOW ALL/LESS
function toggleShow(index) {
    let items = document.getElementsByClassName(`case_${index}`);
    // if at least one section other than the first is open, close all sections
    let flag = 0;
    for (var i = 3; i < items.length; i += 2) {
        if (items[i].innerHTML != "") {
            toggleCloseAll(index);
            document.getElementsByClassName("community-show")[index].innerHTML = "SHOW ALL";
            flag = 1;
            break;
        }
    }
    if (!flag) toggleOpenAll(index);
}

// used by case studies for closing all section except the first
function toggleCloseAll(index) {
    let items = document.getElementsByClassName(`case_${index}`);
    for (var i = 2; i < items.length; i += 2) {
        items[i + 1].innerHTML = "";
        items[i].innerHTML = "❥" + items[i].innerHTML.substring(1);
    }
    items[1].innerHTML = case_studies[index][8];
    items[0].innerHTML = "❤︎" + items[0].innerHTML.substring(1);
    document.getElementsByClassName("community-show")[index].innerHTML = "SHOW ALL";
}

// used by case studies for opening all sections at once if they're currently all closed
function toggleOpenAll(index) {
    toggleCloseAll(index);
    let items = document.getElementsByClassName(`case_${index}`);
    for (var i = 1; i < items.length / 2; i++) {
        toggleSection(index, i);
    }
}

// used by case studies for opening/closing sections
function toggleSection(case_num, index) {
    let items = document.getElementsByClassName(`case_${case_num}`);
    if (items[index * 2 + 1].innerHTML == "") { // section is currently closed
        items[index * 2 + 1].innerHTML = case_studies[case_num][index * 2 + 8];
        items[index * 2].innerHTML = "❤︎" + items[index * 2].innerHTML.substring(1);
        if (index != 0) document.getElementsByClassName("community-show")[case_num].innerHTML = "SHOW LESS";
    } else { // section is currently open
        items[index * 2 + 1].innerHTML = "";
        items[index * 2].innerHTML = "❥" + items[index * 2].innerHTML.substring(1);

        // check if everything's closed
        let flag = 0;
        for (var i = 3; i < items.length; i += 2) {
            if (items[i].innerHTML != "") {
                flag = 1;
                break;
            }
        }
        if (!flag) document.getElementsByClassName("community-show")[case_num].innerHTML = "SHOW ALL";
    }
}

// function opens the playlists page
function openPlaylists() {
    document.getElementById("container").style.backgroundColor = "#0F0E0E";
    document.getElementById("container").innerHTML =  `<div class="page"></div>`;
    
    // load the live now, work experiences, and personal projects playlists
    for (var i = 0; i < playlists.length - 1; i++) {
        document.getElementsByClassName("page")[0].innerHTML += 
        `<div class="block-video" onclick="loadSmallVideos(${playlists[i][2]}, '${playlists[i][0]}')" onmouseover="playlistOver(${i})" onmouseout="playlistOut(${i})">
            <div class="small-video-thumbnail">
                <div class="playlist-cover">
                    <div class="playlist-count"></div>
                    <div class="playlist-icon"></div>
                </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 10px">
                <div class="small-video-title"></div>
                <div class="small-video-sub" style="margin-bottom: 20px">VIEW FULL PLAYLIST</div>
            </div>
        </div>`;
        document.getElementsByClassName("small-video-thumbnail")[i].style.backgroundImage = `url(thumbnails/${playlists[i][1][0][0]})`;
        document.getElementsByClassName("small-video-title")[i].innerHTML = `${playlists[i][0]}`;
        document.getElementsByClassName("playlist-count")[i].innerHTML = `${playlists[i][1].length}`
    }
    // load all the skill playlists
    for (var i = 0; i < skill_playlists.length; i++) {
        document.getElementsByClassName("page")[0].innerHTML +=
        `<div class="block-video" onclick="loadSmallVideos(sk_list[${i}], '${skill_playlists[i][0]}')" onmouseover="playlistOver(${i + playlists.length - 1})" onmouseout="playlistOut(${i + playlists.length - 1})">
            <div class="small-video-thumbnail">
                <div class="playlist-cover">
                    <div class="playlist-count"></div>
                    <div class="playlist-icon"></div>
                </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 10px">
                <div class="small-video-title"></div>
                <div class="small-video-sub">VIEW FULL PLAYLIST</div>
            </div>
        </div>`;
        document.getElementsByClassName("small-video-thumbnail")[i + playlists.length - 1].style.backgroundImage = `url(${skill_playlists[i][3]})`;
        document.getElementsByClassName("small-video-title")[i + playlists.length - 1].innerHTML = `${skill_playlists[i][0]}`;
        document.getElementsByClassName("playlist-count")[i + playlists.length - 1].innerHTML = `${skill_playlists[i][2]}`;
    }

    document.getElementsByClassName("screen")[0].scrollTo(0, 220);
    window.location.hash = "#playlists";
}

// open the about me page
function openAbout() {
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
        document.getElementsByClassName("about-text")[0].innerHTML = `Hello! My name is Taliyah. I am an inventor, entrepreneur, and a junior studying biomedical engineering and computer science with a passion for clinical development and surgical robotics at Johns Hopkins University.
        <br><br>❤︎❤︎❤︎
        <br>Current Education
        <br>Johns Hopkins University (2022 - Present)
        <br>Majors ❥ B.S. Biomedical Engineering, B.S. Computer Science
        <br>Minors ❥ Robotics, Entrepreneurship & Management
        <br><br>❤︎❤︎❤︎
        <br>Contact me:
        <br>❥ <a href="mailto:thuang57@jhu.edu" target="_blank" class="hyperlink">thuang57@jhu.edu</a>
        <br>❥ <a href="mailto:taliyahengineering@gmail.com" target="_blank" class="hyperlink">taliyahengineering@gmail.com</a>
        <br><br>❤︎❤︎❤︎
        <br>Follow me for fun content!
        <br>Youtube: <a href="http://youtube.com/@taliyahengineering" target="_blank" class="hyperlink">https://youtube.com/@taliyahengineering</a>
        <br>Instagram: <a href="http://instagram.com/taliyahengineering" target="_blank" class="hyperlink">http://instagram.com/taliyahengineering</a>
        <br>Facebook: <a href="http://facebook.com/taliyahengineering" target="_blank" class="hyperlink">http://facebook.com/taliyahengineering</a>
        <br>TikTok: <a href="http://tiktok.com/@taliyahengineering" target="_blank" class="hyperlink">http://tiktok.com/@taliyahengineering</a>`;

    document.getElementsByClassName("screen")[0].scrollTo(0, 220);
    window.location.hash = "#about";
}

// function to reset the preview video so that it shows the best part on the home page
const setVideoStarts = () => {
    var video = document.getElementsByClassName("video-thumbnail")[startIndex];
    var nowPlaying = $(video).find('iframe').attr('src');
    $(video).find('iframe').attr('src', nowPlaying);
    startIndex++;
    if (startIndex == fw.length + fp.length) {
        startIndex = 0;
    }
};

// same as above but for the experiences page
const setSmallVideoStarts = () => {
    var video = document.getElementsByClassName("small-video-thumbnail")[smallStartIndex];
    var smallNowPlaying = $(video).find('iframe').attr('src');
    $(video).find('iframe').attr('src', smallNowPlaying);
    smallStartIndex++;
    if (smallStartIndex == all.length) {
        smallStartIndex = 0;
    }
};

// function reveals the video playing beneath the thumbnail
function playvid(index) {
    document.getElementsByClassName("clear")[index].style.transition = "ease-in-out 0.5s";
    document.getElementsByClassName("clear")[index].style.opacity = 0;
    document.getElementsByClassName("duration")[index].style.opacity = 0;
}

// function restores the thumbnail to cover up the video behind it
function stopvid(index) {
    document.getElementsByClassName("clear")[index].style.transition = "none";
    document.getElementsByClassName("clear")[index].style.opacity = 1;
    document.getElementsByClassName("duration")[index].style.opacity = 1;
}

// same as above but for the experiences page
function playsmallvid(index) {
    document.getElementsByClassName("small-clear")[index].style.transition = "ease-in-out 0.5s";
    document.getElementsByClassName("small-clear")[index].style.opacity = 0;
    document.getElementsByClassName("small-duration")[index].style.opacity = 0;
}

// same as above but for the experiences page
function stopsmallvid(index) {
    document.getElementsByClassName("small-clear")[index].style.transition = "none";
    document.getElementsByClassName("small-clear")[index].style.opacity = 1;
    document.getElementsByClassName("small-duration")[index].style.opacity = 1;
}

// function loads the videos for the experiences page, or for any playlist
function loadSmallVideos(list, list_name) {
    if (list_name != 'All') { // if this should be the experiences page
        document.getElementById("container").innerHTML =  `<div class="block-title" style="margin-left: 30px; padding-top: 30px">${list_name}<div class="playlist-icon"></div></div><div class="page"></div>`;
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
                <div>
                    <div class="small-video-title"></div>
                    <div class="small-video-sub"></div>
                    <div class="video-tag"></div>
                </div>
            </div>`;

        if (window.matchMedia("(max-aspect-ratio: 1/1)").matches) { // if we're on a phone, can remove the iframe video
            document.getElementsByClassName("small-video-thumbnail")[i].innerHTML =
            `<div class="small-clear"></div>
            <div class="small-duration"></div>`;
        }

        document.getElementsByClassName("small-clear")[i].style.backgroundImage = `url('thumbnails/${list[i][0]}')`;
        document.getElementsByClassName("small-duration")[i].innerHTML = `${list[i][1]}`;
        if (p.includes(list[i])) {
            document.getElementsByClassName("video-tag")[i].innerHTML = 'Project';
        } else if (w.includes(list[i])) {
            document.getElementsByClassName("video-tag")[i].innerHTML = 'Work Experience';
        }
        if (list[i][1] == '🔉 LIVE') {
            document.getElementsByClassName("small-duration")[i].style.backgroundColor = "red";
            document.getElementsByClassName("small-duration")[i].style.paddingTop = "0";
            document.getElementsByClassName("small-duration")[i].style.paddingBottom = "0";
            document.getElementsByClassName("small-video-sub")[i].innerHTML = `${list[i][4]}`;
        }
        var ago = setAgo(list[i][3]);
        document.getElementsByClassName("small-video-sub")[i].innerHTML = `${list[i][4]} • ${ago}`;
        document.getElementsByClassName("small-video-title")[i].innerHTML = `${list[i][2]}`;
    }

    if (list_name == 'All') {
        setInterval(setSmallVideoStarts, 50000 / 8);
    } else {
        setInterval(setSmallVideoStarts, 50000 / list.length);
    }
    document.getElementsByClassName("screen")[0].scrollTo(0, 220);
}

// function removes the cover of the playlist when hovering on it
function playlistOver(index) {
    document.getElementsByClassName("playlist-cover")[index].style.width = "230px";
}

// function restores the cover of the playlist when mouse is off
function playlistOut(index) {
    document.getElementsByClassName("playlist-cover")[index].style.width = "80px";
}

// unused code for dynamically loading videos on the experiences page
/*function loadMore(index_start, index_end) {
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
}*/

/*function openSearch() {
    for (var i = 0; i < 5; i++) {
        document.getElementsByClassName("menu-item")[i].id = "menu-item";
    }
    document.getElementsByClassName("small-menu-item")[0].id = "highlight-item";
    document.getElementsByClassName("menu")[0].innerHTML += 
    `<div type="text" class="search-input-container">
        <input type="text" class="search-input"></input>
    </div>`;
    document.getElementsByClassName("search-input")[0].focus();
}*/