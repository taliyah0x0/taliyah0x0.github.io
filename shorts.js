let current_experience = 0;
function skillsOpen() {
    document.getElementById("container").innerHTML =  `<div class="page"></div>`;
    for (var i = 0; i < skills.length; i++) {
        var startYear = parseInt(skills[i][2].slice(0, 4));
        var startMonth = parseInt(skills[i][2].slice(5, 7));
        var startDay = parseInt(skills[i][2].slice(8, 10));
        var ago = setAgo(startYear, startMonth, startDay);
        ago = ago.substring(0, ago.length - 4);

        document.getElementsByClassName("page")[0].innerHTML +=
        `<div class="shorts" onmouseover="shortsHover(${i})" onmouseout="shortsOut(${i})" onclick="shortsOpen(${i})">
            <div class="shorts-thumbnail"><div class="shorts-cover"></div></div>
            <div class="shorts-title">${skills[i][1]}</div>
            <div class="shorts-sub">${ago}</div>
        </div>`

        document.getElementsByClassName("shorts-thumbnail")[i].style.backgroundImage = `url(skills/${skills[i][0]})`;
    }
}

function shortsHover(index) {
    document.getElementsByClassName("shorts-cover")[index].style.opacity = 0.2;
}

function shortsOut(index) {
    document.getElementsByClassName("shorts-cover")[index].style.opacity = 0;
}

function shortsOpen(index) {
    current_experience = 0;
    if (index == skills.length) {
        index = 0;
    } else if (index == -1) {
        index = skills.length - 1;
    }
    document.getElementById("container").innerHTML =  `<div class="block"></div>`;
    document.getElementsByClassName("block")[0].innerHTML =
    `<div class="shorts-view">
        <div class="shorts-back" onclick="skillsOpen()">←</div>
        <div class="shorts-footage">
            <div class="footage-previous" onclick="switchExperience(-1, '${skills[index][1]}')">↑</div>
            <div class="footage-next" onclick="switchExperience(-2, '${skills[index][1]}')">↓</div>
        </div>
        <div class="shorts-comments">
            <div class="shorts-comments-padding">
                <div class="shorts-comments-title-block">
                    <div class="shorts-comments-title">${skills[index][1]} Experiences</div>
                    <div class="shorts-comments-count"></div>
                </div>
            </div>
        </div>
        <div class="shorts-previous" onclick="shortsOpen(${index - 1})">↑</div>
        <div class="shorts-next" onclick="shortsOpen(${index + 1})">↓</div>
    </div>`;

    let experiences = [];
    for (var i = 0; i < all.length; i++) {
        for (var j = 0; j < all[i][13].length; j++) {
            if (all[i][13][j] == skills[index][1] || all[i][13][j] == 'CAD' && skills[index][1] == 'Computer-Aided Design') {
                experiences.push(all[i]);
            }
        }
    }
    document.getElementsByClassName("shorts-comments-count")[0].innerHTML = experiences.length;

    setTimeout(() => {
    for (var i = 0; i < experiences.length; i++) {
        document.getElementsByClassName("shorts-comments-padding")[0].innerHTML +=
        `<div class="shorts-comment-block" id="regular-comment" onmouseover="switchExperience(${i}, '${skills[index][1]}')">
            <div class="video-profile-pic" style="margin-right: 0.5vw"></div>
            <div class="shorts-channel-comment">
                <div class="shorts-channel-header">
                    <div class="shorts-channel-user">${experiences[i][2]}</div>
                    <div class="shorts-channel-sub"></div>
                </div>
                <div class="shorts-comment">${experiences[i][12]}</div>
                <div class="learn-more" onclick="openVideo(${all.indexOf(experiences[i])})">Learn more ></div>
            </div>
        </div>`;
        document.getElementsByClassName("video-profile-pic")[i].style.backgroundImage = `url('channels/${experiences[i][9]}')`;
        var startYear = parseInt(experiences[i][3].slice(0, 4));
        var startMonth = parseInt(experiences[i][3].slice(5, 7));
        var startDay = parseInt(experiences[i][3].slice(8, 10));
        var ago = setAgo(startYear, startMonth, startDay);
        document.getElementsByClassName("shorts-channel-sub")[i].innerHTML = `${ago}`;

        if (i == 0) {
            document.getElementsByClassName("shorts-comment-block")[i].id = "highlight-comment";
        }
    }

    document.getElementsByClassName("shorts-footage")[0].style.backgroundImage = "";
    if (skills[index][1] == 'Computer-Aided Design') {
        document.getElementsByClassName("shorts-footage")[0].style.backgroundImage = `url("skillscontent/CAD/${experiences.length - 1}.png")`;
    } else if (skills[index][1] == 'Video Editing') {
        document.getElementsByClassName("shorts-footage")[0].innerHTML += `
        <video muted loop autoplay class="shorts-footage-video" src="skillscontent/Video Editing/${experiences.length - 1}.mp4"></video>`
    }else {
        document.getElementsByClassName("shorts-footage")[0].style.backgroundImage = `url("skillscontent/${skills[index][1]}/${experiences.length - 1}.png")`;
    }
    
    document.getElementsByClassName("screen")[0].scrollTo(0, 250);
    },200);
}

function switchExperience(index, skill) {
    if (index == -1) {
        index = current_experience - 1;
    } else if (index == -2) {
        index = current_experience + 1;
    }
    let experiences = document.getElementsByClassName("shorts-comment-block");
    if (index == experiences.length) {
        index = 0;
    } else if (index == -1) {
        index = experiences.length - 1;
    }
    for (var i = 0; i < experiences.length; i++) {
        experiences[i].id = "regular-comment";
    }
    experiences[index].id = "highlight-comment";

    if (skill == 'Computer-Aided Design') {
        document.getElementsByClassName("shorts-footage")[0].style.backgroundImage = `url("skillscontent/CAD/${experiences.length - index - 1}.png")`;
    } else if (skill == 'Video Editing') {
        document.getElementsByClassName("shorts-footage-video")[0].src = `skillscontent/Video Editing/${experiences.length - index - 1}.mp4`;
    }else {
        document.getElementsByClassName("shorts-footage")[0].style.backgroundImage = `url("skillscontent/${skill}/${experiences.length - index - 1}.png")`;
    }
    current_experience = index;
}