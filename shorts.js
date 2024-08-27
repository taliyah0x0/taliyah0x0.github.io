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
            <div class="footage-previous">↑</div>
            <div class="footage-next">↓</div>
        </div>
        <div class="shorts-comments">
            <div class="shorts-comments-padding">
                <div class="shorts-comments-title-block">
                    <div class="shorts-comments-title">Experiences</div>
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
            if (all[i][13][j] == skills[index][1]) {
                experiences.push(all[i]);
            }
        }
    }
    document.getElementsByClassName("shorts-comments-count")[0].innerHTML = experiences.length;

    for (var i = 0; i < experiences.length; i++) {
        document.getElementsByClassName("shorts-comments-padding")[0].innerHTML +=
        `<div class="shorts-comment-block">
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
    }
    
    document.getElementsByClassName("screen")[0].scrollTo(0, 250);
}