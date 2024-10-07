var fw = [0, 1, 2, 3]; // Featured work experiences (from work)
var fp = [2, 5, 0, 4]; // Featured projects (from projects)
var ln = [1, 2, 3, 4, 5]; // Live now (from work)

var p = [ // Thumbnail [0], Duration [1], Title [2], Start Date [3], Skills [4], Youtube Link [5], Video Start [6], Optional: Website [7] // Project Tags [8], Project Icon [9], Project Name [10], Optional: Project Video Link [11] // Project Description [12] // Skill Tags [13] // Highlights [14] // Highlights Links/Images [15]
    ["gamepigeon.png", '1 mo', "GamePigeon Bots & More - Fun Programming Project", '2024-06-19', 'Arduino/Python', '3ex0ym1oMgs', 0, "",
        "#hacks #wordhunt #imessage", "gamepigeon.jpg", "GamePigeon Bots & More", '3ex0ym1oMgs',
        
        `Exploring the potential of Python and Arduino through building fun bots for winning iMessage GamePigeon's Word Hunt, Anagrams, and Darts, as well as a few other helpful hacks.
        <br><br>❤︎❤︎❤︎
        <br>View code <a href="https://github.com/taliyah0x0/GamePigeon-Bots" target="_blank" class="hyperlink">here</a>`,
        
        ['Arduino', 'Python', 'Video Editing'],
        ['Beat everyone in GamePigeon with a bot', 'Programmed custom manipulation software', 'Collabed with the GamePigeonGOAT', 'Played the GOAT again with Anagrams'],
        ['https://youtube.com/watch?v=3ex0ym1oMgs', 'https://github.com/taliyah0x0/GamePigeon-Bots', 'https://www.instagram.com/reel/C9krfUhPmUc/', 'https://www.instagram.com/reel/C97r_HPv6YV/'],
        ''
    ],
    ["typewanese.png", '3 mos', "Typewanese/Tai-Ping - First Romanized Taiwanese Keyboard", '2023-08-01', 'Python/HTML/CSS/JS', 'jXlTl5RPKoY', 43, "https://bobaway.org",
        "#taiwan #language #keyboard", "flav_9.png", "Typewanese & Tai-Ping", 'jXlTl5RPKoY',
        
        `I’ve been working hard to improve BobaWay’s speed and accuracy, but what about additional features? I present two newly programmed keyboards, Tai-Ping and Typewanese, that aim to make writing in Taiwanese romanization easy and efficient.`,
        
        ['Python', 'HTML CSS', 'Javascript', 'Video Editing'],
        ['Added keyboard resources to BobaWay', 'Published new video featuring updates', 'Python Flask with Taiwanese database'],
        ['https://bobaway.org', 'https://youtube.com/watch?v=jXlTl5RPKoY','https://github.com/taliyah0x0/BobaWay'],
        ''
    ],
    ["bobaway.png", '6 mos', 'BobaWay - First Taiwanese-English Translator', '2023-05-01', 'Python/HTML/CSS/JS', 'jH8sbQL_YpA', 31, "https://bobaway.org",
        "#taiwan #language #translator", "flav_9.png", "BobaWay", 'jH8sbQL_YpA',
        
        `To help other Taiwanese-American kids out there with immigrant parents, I created BobaWay, the Google Translate for English to Taiwanese. Open the web app on any device, input English sentences, and out pops the Taiwanese translation in audio form for learning perfect pronunciation.`,
        
        ['Python', 'HTML CSS', 'Javascript', 'Video Editing'],
        ['Made the first "Google Translate" for Taiwanese', 'Used Python Flask to build back-end of HTML site', 'Interview with TaiwaneseAmericanOrg', 'Interview with Taiwan Plus', 'Interview with Radio Taiwan International', 'Interview with World Journal', 'Interview with Talking Taiwan'],
        ['https://bobaway.org', 'https://github.com/taliyah0x0/BobaWay', 'https://www.taiwaneseamerican.org/2023/07/taliyah-huang-interview-bobaway/', 'https://www.youtube.com/watch?v=VlkX0hAB5Fw&t=27s', 'https://en.rti.org.tw/radio/programMessagePlayer/programId/1435/id/108711', 'https://www.worldjournal.com/wj/story/121359/7289244', 'https://talkingtaiwan.com/taliyah-huang-young-inventor-of-bobaway-online-translator-that-converts-english-to-taiwanese-ep-253/'],
        ''
    ],
    ["emokeys.png", '2 mos', 'Emokeys - Versatile Emoji Keyboard', '2023-07-01', 'Arduino/CAD/Python', 'wGvIvYGg-gg', 24, "",
        "#keyboard #emoji #discord", "emokeys.png", "Emokeys", 'wGvIvYGg-gg',
       
        `Meet Emokeys, a macropad for typing emoji. Featuring 9 OLED displays that allow an infinite library of colorful characters, plus there's Discord mode where you can even input custom stickers and animated GIFs on your server!`,

        ['Arduino', 'CAD', 'Python', '3D Printing', 'Video Editing'],
        ['Documented and explained the design process', 'CADed custom keyboard housing', 'Wrote Python/Arduino communication protocol', 'Published DIY instructions'],
        ['https://youtube.com/watch?v=wGvIvYGg-gg', 'https://cad.onshape.com/documents/45eebb0845694a7843d8376d/w/e79dddab06cb9b7714231f11/e/a79ad1a21bb95403dc9d6ce6?renderMode=0&uiState=66c17ed628764957d3512677','https://github.com/taliyah0x0/EMOKEYS', 'https://www.printables.com/model/532039-emokeys'],
        ''
    ],
    ["circuitful.png", '2 mos', 'Circuitful - Colorful Circuit Diagramming', '2022-07-01', 'Javascript', '2UL5aBr_zVA', 121, "",
        "#electronics #fritzing #arduino", "circuit.png", "Circuitful", '2UL5aBr_zVA',
        
        `Frustrated with the lack of keyboard shortcuts, graphics, and customization in circuit diagramming software like Fritzing and Tinkercad, I set off to program my own. Introducing Circuitful, the colorful circuit diagramming app.`,

        ['Javascript'],
        ['Made a video to explain it', 'Open-sourced my code on Github'],
        ['https://youtube.com/watch?v=2UL5aBr_zVA', 'https://github.com/taliyah0x0/circuitful'],
        ''
    ],
    ["mouseky.png", '2 mos', 'Mouseky - Unique Keyboard Designed from Scratch', '2022-06-01', 'Arduino/CAD', '6V3gyArkQ38', 5, "",
        "#3dprinting #integration #design", "mouseky.png", "Mouseky", '6V3gyArkQ38',
        
        `Meet the most high-tech keyboard ever designed! This is Mouseky, a split, wireless, 64-key masterpiece that has an integrated mouse packed with touchpad-equivalent features.`,

        ['Arduino', 'CAD', '3D Printing', 'Video Editing'],
        ['Made a fun video', 'Second video to show more details', 'Published DIY instructions', 'CADed custom keyboard housing'],
        ['https://youtube.com/watch?v=6V3gyArkQ38', 'https://youtube.com/watch?v=6V3gyArkQ38', 'https://www.printables.com/model/356141-mouseky', 'https://cad.onshape.com/documents/daeff293f435e04e10f71e4f/w/c092231cd4a00ebba90fb4d6/e/fa73797f2dd503dabaa65d9a?renderMode=0&uiState=66c5592a3a3d8b53dc998912'],
        ''
    ],
    ["stemables.png", '8 mos', 'STEMables - Educational Tech Blocks', '2021-06-01', 'Arduino/CAD', 'TMdWpt-RRqY', 37, "https://bit.ly/stemables",
        "#electronics #programming #accessibletoys", "stemables.png", "STEMables", '6V3gyArkQ38',
        
        `Rearrangeable 3D-printed blocks to create an infinite number of smart circuit sensor systems. Mission for visually-impaired and dexterously-challenged kids to learn electronics and programming in a fun, easy, and accessible way.`,
    
        ['Arduino', 'CAD', '3D Printing', 'Web Design'],
        ['Designed the project website', 'Filmed an ad-like video'],
        ['http://bit.ly/stemables', 'https://youtube.com/watch?v=6V3gyArkQ38'],
        ''
    ],
    ["cpace.png", '7 mos', 'CPACE - Assistive Technology for Quadriplegia', '2020-11-01', 'Arduino/CAD', '0uANgR1oOII', 25, "https://bit.ly/projectcpace",
        "#disabilitytech #phonecontrol #affordable", "cpace.png", "CPACE", '0uANgR1oOII',
        
        `How might we help a quadriplegic use the same technology we all use? Current solutions have limited apps and features, or cost tens of thousands of dollars! CPACE lets anyone easily plug in a smartphone or computer to start using! It tracks head motion to position a mouse on screen, and the bite sensor for clicking.`,

        ['Arduino', 'CAD', '3D Printing', 'Web Design'],
        ['Designed the project website', 'Filmed an ad-like video'],
        ['http://bit.ly/projectcpace', 'https://youtube.com/watch?v=0uANgR1oOII'],
        ''
    ],
    ["swanchair.png", '1 mo', 'Swan Chair - Musical Throne', '2020-06-01', 'Arduino/CAD/Handicraft', 'jH6qUVLfZfc', 2, "",
        "#diy #woodworking #musicbox", "swan.png", "Swan Chair", 'jH6qUVLfZfc',
        
        `As one of the 24 participants selected for the Girls Garage summer program, I remember skipping sleep to go beyond basic woodworking as instructed, taking an unorthodox approach to design an Arduino-integrated that automatically drives a 3D resin-printed “Swan Lake” music box when sat upon.`,

        ['Arduino', 'CAD', 'Handicraft'],
        ['Felt like being "extra" and built this'],
        ['https://youtube.com/watch?v=jH6qUVLfZfc'],
        ''
    ],
    ["automask.png", '5 mos', 'Auto Mask - Build for COVID 19', '2020-05-01', 'Arduino/CAD', 'mftXIeZvh94', 9, "https://bit.ly/auto-mask",
        "#touchless #sensors #hygiene", "automask.png", "Auto Mask", 'mftXIeZvh94',
        
        `Behold the latest technology designed for the coronavirus pandemic and California wildfires: Auto Mask. With eye protection, touchless control, air and muscles sensors, this is a mask you'll never want to take off!`,

        ['Arduino', 'CAD', '3D Printing', 'Web Design'],
        ['Won hackathons with my first version', 'Big revision for sleekness + new video', 'Behind the scenes documented on website'],
        ['https://www.youtube.com/watch?v=c2UgIyFofbM', 'https://www.youtube.com/watch?v=U8a_-_DJ29E', 'https://bit.ly/auto-mask'],
        ''
    ],
    ["autoflote.jpg", '9 mos', 'Auto Flöte Clean - Musical Refreshment', '2019-01-01', 'Arduino/CAD/Handicraft', 'VGhm98lCZWY', 11, "https://autofloteclean.weebly.com/",
        "#flute #cleaning #machine", "image.png", "Auto Flöte Clean", 'VGhm98lCZWY',
        
        `My first “big project” was achieved in 9th grade: A quartet of automatic cleaning machines that fully cleanse and sanitize the flute. I was able to represent my school in personally presenting to the U.S. Vice President Mike Pence and CEO of Oracle, Safra Catz.`,

        ['Arduino', 'CAD', '3D Printing', 'Handicraft', 'Web Design'],
        ['Made a website to show all the prototypes'],
        ['https://bit.ly/autoflote'],
        ''
    ]
]

var w = [ // Thumbnail [0], Duration [1], Title [2], Start Date [3], Company [4], Youtube Link [5], Video Start [6], Optional: Website [7], Location Tags [8] // Channel Icon [9], Channel Description [10], Channel Website [11] // Description [12] // Skill Tags [13] // Highlights [14] // Highlights Links/Images [15]
    ["moonsurgical.jpg", '3 mos', 'Clinical Development Engineering Intern', '2024-06-03', 'Moon Surgical', 'sWpCpD1zYg8', 8, "", "#sancarlos #california", 
        
        "moonsurgical_logo.jpeg", "Medical Robotics, Haptics, & Computer Vision", "https://moonsurgical.com",

        `❥ Conducted design validation and usability studies with 15 surgeons for the Maestro surgical robotic assistant's advanced feature ScoPilot, including 4 human cadaver labs
        <br>❥ Co-authored formative study protocol and paperwork for ScoPilot's 510(k) FDA submission
        <br>❥ Interviewed 20 clinicians to explore prioritization of future applications of Maestro and ScoPilot
        <br>❥ Shadowed and analyzed laparoscopic procedures at various surgery centers
        <br>
        <br>In addition to helping the team with the larger goals, I was appointed to lead 2 mini-projects:
        <br>❥ Developed a unique interactive demo and training game for Maestro's commercial launch
        <br>❥ Designed and casted a custom gynecologic model for the uterine manipulator project
        <br><a class="hyperlink" href="https://www.loom.com/share/c5ea53e5298745968c4ba81aad5822cd" target="_blank">Recording of my slides presentation</a>
        `,

        ['CAD', '3D Printing', 'Graphic Design', 'Design Thinking'],
        ['Conducting 15 surgeon usability studies', 'Designing a creative demo game', 'Shadowing surgical procedures at hospitals', '3D modeling & installing a custom uterus model'],
        ['observation.mp4','0811.mp4','shadowing.mp4','uterus.mp4'],
        `<strong>How this aligns with my career goals:</strong>
        <br>With just around 25 employees at the US office, I was able to interact closely with my direct small clinical team as well as other people in different areas.
        I really enjoyed this internship, from the close commute from my house to how there was a lot of trust involved in the culture, where I would never feel underestimated as an intern.
        Working on multiple projects simultaneously kept me engaged and never bored at the job.
        I picked up on a lot of new skills such as learning how to cast silicon models and helping out with the whole process of conducting formative studies for FDA approval, while being able to contribute significantly with my experience in 3D modeling and surgical shadowing.
        It was amazing to see and be involved directly with the design process I had only learned about in class, from the user interviews and coded need statements to the research and prototypes!`,
    ],
    ["designteam.jpg", '🔉 LIVE', 'Undergraduate Design Team Leader', '2024-01-01', 'Johns Hopkins Biomedical Engineering', 'bzP4ZosYo3s', 0, "", "#baltimore #maryland", 
        
        "johns_hopkins_biomedical_engineering_logo.jpeg", "Medical Device Design & Innovation", "https://www.bme.jhu.edu/",

        `❥ Selected to lead a team of undergrad students in developing a device to optimize lung cryobiopsy over 1.5 years
        <br>❥ Observed the Ion robotic bronchoscope and interviewed clinicians about the lung cryobiopsy procedure at the Johns Hopkins Hospital
        <br>❥ Shadowed and analyzed multiple minimally-invasive Da Vinci robotic surgeries at the Johns Hopkins Bayview Medical Center`,
    
        ['Leadership', 'Design Thinking'],
        ['Holding the single-use cryoprobe', 'Mindmapping observations and finding needs', 'I vlogged the intersession DT leader class!'],
        ['1006.mp4', 'mindmap.mp4', 'https://www.youtube.com/watch?v=Hb0S-mTIlP0&t=75s'],
        ''
    ],
    ["highergrounds.jpg", '🔉 LIVE', "Co-Founder, Business Development & Graphic Design", '2023-05-12', 'Higher Grounds Vending L.L.C.', 'mD-utJUMmkU', 0, "", "#baltimore #maryland", 
        
        "highergroundslogoblack.png", "Affordable, freshly-brewed coffee and tea at Johns Hopkins!", "https://instagram.com/highergroundsvending",

        `❥ Developed and secured a detailed business contract with Hopkins Dining to install and operate fresh café vending machines on the Homewood campus
        <br>❥ Collected feedback from 200+ user surveys and customer interviews
        <br>❥ Selected to participate in FFU Summer Incubator, JHU I-Corps, and FFU Fuel Startup Accelerators
        <br>❥ Received $10,000+ in non-dilutive grants
        <br>❥ Design all promotional graphics for machine and marketing use`,
        
        ['Business', 'Graphic Design'],
        ['2 vending machines so far at JHU!', 'Won $5,000 as top audience pick', 'My advertisement flyer designs'],
        ['IMG_9319.mp4', '1717214730861.jpg', 'hgv_flyers.png'],
        `<strong>How this aligns with my career goals:</strong>
        <br>With my ultimate dream being a successful startup founder, I want to start gaining experience about growing a business from the ground up.
        90% of startups fail, with the majority being due to offering an unwanted product, so in order to avoid risks as I learn the ropes around financial accounting, funding, insurance, and more, I teamed up with 3 other highly-motivated students to found Higher Grounds Vending, L.L.C.
        Sourcing our fresh beverage-making vending machines directly from a manufacturer doesn't exactly show innovation, but it allowed us to quickly start operating as we continued to learn more and cater our products towards our target audience: College students.
        So far, it has been a great experience with the support of  Johns Hopkins' entrepreneurship programs and resources, as we are continuing to expand our reach and services across campus.`,
    ],
    ["taliyahengineering.jpg", '🔉 LIVE', "Content Creator", '2023-01-01', 'Taliyah Engineering', 'AJlgPpAQshM', 1, "", "#youtube #instagram #facebook #tiktok",
        
        "IMG_5548.png", "Engineering student who loves to invent and create!", "https://youtube.com/@taliyahengineering",

        `❥ Invent and build innovative and creative gadgets using CAD, 3D printing, programming, and electronics
        <br>❥ Produce and promote detailed videos that document the design process
        <br>❥ Featured news on Official Arduino Twitter, Gizmodo, Hackster.io, Hackaday (Mouseky)
        <br>❥ Interviewed and published on the World Journal, Taiwan Plus, Radio Taiwan International (BobaWay)`,
        
        ['Video Editing'],
        ['Filming in the Community Kitchen', 'A recent vlog from the summer', 'Link to my Youtube Channel!'],
        ['IMG_3617.mp4', 'output2.mp4', 'https://youtube.com/@taliyahengineering'],
        ''
    ],
    ["hop.png", '🔉 LIVE', "Co-Chair of Marketing", '2022-10-30', 'Hopkins Organization for Programming', 'sYmPRYdeQyU', 3, "", "#jhuhop #events #staff",
        
        "hoplogo.png", "Events for students, by students", "https://instagram.com/jhuhop",

        `❥ Organize and promote the biggest student engagement events on campus
	    <br>❥ Lead graphics team to post event flyers and news daily (24’-25’)
	    <br>❥ Lead Nights @ Hopkins team to plan and staff weekly competitions, treasure hunts, off-campus trips, trivia nights, and more (23’-24’)
	    <br>❥ Streamline communications with 3rd-party companies and (inner-campus) clubs for big collabs: Levering Halloween 400+ attendees, Blue Jay Pocha 400+ attendees`,
        
        ['Leadership', 'Graphic Design'],
        ['Spooky Levering Hall-oween Party at Hopkins!', 'Some of my original designs'],
        ['https://www.youtube.com/watch?v=sYmPRYdeQyU', 'content/Hopkins Organization for Programming/designs.png'],
        ''
    ],
    ["jasa.JPG", '🔉 LIVE', "Treasurer", '2022-09-05', 'Japanese American Students Association', 'dytG8M8cfBY', 1, "", "#jasa #events #japan",
        
        "jasa.jpg", "Celebrating and honoring all things Japanese 🇯🇵", "https://instagram.com/jhujasa",

        `❥ Plan and lead monthly school-wide events to share Japanese culture through food, games, music, and more
	    <br>❥ Manage club finances and procurement of suppplies, help with cooking and staffing at all events
        <br>❥ Annual Spring Matsuri tradition with 400+ attendees enjoy free Japanese food, games, and performances`,
        
        ['Leadership'],
        ['2024 Japanese Spring Matsuri'],
        ['https://www.youtube.com/watch?v=dytG8M8cfBY'],
        ''
    ],
    ["research.jpg", '12 mos', 'Undergraduate Robotics Researcher', '2023-01-22', 'Dr. Li Terradynamics Lab', 'RG9TMn1FJzc', 67, "", "#meche #robotics #computervision",
        
        "jhuwse.jpg", "Movement science at the interface of biology, robotics & physics", "https://li.me.jhu.edu/",

        `❥ Use Python and Matlab to analyze climbing mechanism of mountain goats and humans for model robot development
        <br>❥ Work cross-functionally with PhD students of different disciplines and give weekly presentations`,
        
        ['Python', 'Matlab'],
        ['Tracking human climbing poses from videos'],
        ['climbing.mp4'],
        ''
    ],
    ["magiclifescience.png", '5 mos', "3D Modeling/Animation", '2022-08-01', 'MagIC Lifescience Inc.', 'W6m0floaz-E', 3, "", "#blender #pcr #contract",
        
        "1638399138601.jpeg", "Leveraging giant magnetoresistance to advance molecular diagnostics", "https://magiclifescience.com/",

        `❥ Created professionally-animated 3D biosimulations for demonstrating the startup company’s biotech product
        <br>❥ Led team meetings and planning for  animation production`,
        
        ['CAD'],
        ['Modeled and animated 85% of this'],
        ['https://youtube.com/watch?v=W6m0floaz-E'],
        ''
    ],
    ["saturn.png", '3 mos', "Bioengineering Team Intern", '2022-06-10', 'Stanford Institute of Medicine', '8GJGm3xvwq8', 0, "https://www.im-creator.com/free/teamsaturn/saturn", "#summerprogram #allergy #medtech",
        
        "stanford_university_logo.jpeg", "Center for Biodesign", "https://simr.stanford.edu/",

        `❥ Worked as a high school student team to create a medical device that addresses the issues of emergency allergy medication
        <br>❥ Responsible for CAD, 3D printing, animation, and website development`,
        
        ['CAD', '3D Printing', 'Web Design'],
        ['Website design & development was all me', 'Did the CAD for several prototypes'],
        ['https://www.im-creator.com/free/teamsaturn/saturn', 'https://cad.onshape.com/documents/0539fa19643aa5ea69bea0c8/w/6b37b10aaf9fd72a722668ae/e/078abaceeb5841a0192c7ebb?renderMode=0&uiState=66b8506bc8af0930f4bf2dd5'],
        ''
    ],
]

var all = p.concat(w);
all.sort((a, b) => b[3].localeCompare(a[3]));
for (var i = 0; i < all.length - 1; i++) {
    for (var j = 0; j < all.length - 1; j++) {
        if (all[j][1] != '🔉 LIVE' && all[j + 1][1] == '🔉 LIVE') {
            var temp = all[j];
            all[j] = all[j + 1];
            all[j + 1] = temp;
        }
    }
}

var skills = [
    ["3dprinting.jpg", "3D Printing", "2018-10-01"],
    ["arduino.jpg", "Arduino", "2019-03-01"],
    //["pexels-jibarofoto-1787235.jpg", "Photography", "2018-01-01"],
    ["videoediting.jpg", "Video Editing", "2016-08-01"],
    ["python.png", "Python", "2021-03-01"],
    ["htmlcss.png", "HTML CSS", "2021-10-01"],
    ["javascript.png", "Javascript", "2020-10-01"],
    //["java.png", "Java", "2024-01-01"],
    ["cad.png", "Computer-Aided Design", "2018-10-01"],
    ["graphic.jpg", "Graphic Design", "2020-12-01"],
    ["matlab.png", "Matlab", "2023-01-01"]
]
//skills.sort((a, b) => a[2].localeCompare(b[2]));

var indices = Array.from({length: skills.length}, (_, i) => i);
function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}

var ln_play = [];
for (var i = 0; i < ln.length; i++) {
    ln_play.push(w[ln[i]]);
}

var all_index = [];
for (var i = 0; i < all.length; i++) {
    all_index.push(i);
}

var p_index = [];
for (var i = 0; i < p.length; i++) {
    p_index.push(all.indexOf(p[i]));
}

var w_index = [];
for (var i = 0; i < w.length; i++) {
    w_index.push(all.indexOf(w[i]));
}

var playlists = [
    ["Live Now", ln_play, "ln_play", ln],
    ["Personal Projects", p, "p", p_index],
    ["Work Experience", w, "w", w_index],
    ["All", all, "all", all_index]
];

var skill_playlists = [];
for (var i = 0; i < skills.length; i++) {
    skill_playlists.push([]);
    skill_playlists[i].push(skills[i][1]);
    skill_playlists[i].push([]);
    for (var j = 0; j < all.length; j++) {
        for (var k = 0; k < all[j][13].length; k++) {
            if (all[j][13][k] == skills[i][1] || (all[j][13][k] == 'CAD' && skills[i][1] == 'Computer-Aided Design')) {
                skill_playlists[i][1].push(j);
            }
        }
    }
    skill_playlists[i].push(skill_playlists[i][1].length);
    skill_playlists[i].push(skills[i][0]);
}

skill_playlists.sort(function(a, b) {
    return b[2] - a[2];
});

var sk_list = [];
for (var i = 0; i < skill_playlists.length; i++) {
    sk_list.push([]);
    for (var j = 0; j < skill_playlists[i][1].length; j++) {
        sk_list[i].push(all[skill_playlists[i][1][j]]);
    }
}