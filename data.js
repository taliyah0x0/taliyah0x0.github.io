var ln = [0, 1, 2, 3]
var fp = [2, 5, 0, 4]

var p = [ // Thumbnail, Duration, Title, Start Date, Skills, Youtube, Video Start, Optional: Website // Project Tags, Project Icon, Project Name, Optional: Project Video, Project Description
    ["gamepigeon.png", '1 mo', "GamePigeon Bots & More - Fun Programming Project", '2024-06-19', 'Arduino/Python', '3ex0ym1oMgs', 0, "",
        "#hacks #wordhunt #imessage", "gamepigeon.jpg", "GamePigeon Bots & More", '3ex0ym1oMgs',
        `Exploring the potential of Python and Arduino through building fun bots for winning iMessage GamePigeon's Word Hunt, Anagrams, and Darts, as well as a few other helpful hacks.
        <br><br>❤︎❤︎❤︎
        <br>View code <a href="https://github.com/taliyah0x0/GamePigeon-Bots" target="_blank" class="description-link">here</a>`
    ],
    ["typewanesethumbnail.png", '3 mos', "Typewanese/Tai-Ping - First Romanized Taiwanese Keyboard", '2023-08-01', 'Python/HTML/CSS/JS', 'jXlTl5RPKoY', 43, "https://bobaway.org",
        "#taiwan #language #keyboard", "flav_9.png", "Typewanese & Tai-Ping", 'jXlTl5RPKoY',
        `I’ve been working hard to improve BobaWay’s speed and accuracy, but what about additional features? I present two newly programmed keyboards, Tai-Ping and Typewanese, that aim to make writing in Taiwanese romanization easy and efficient.`,
    ],
    ["bobawaythumbnail.png", '6 mos', 'BobaWay - First Taiwanese-English Translator', '2023-05-01', 'Python/HTML/CSS/JS', 'jH8sbQL_YpA', 31, "https://bobaway.org",
        "#taiwan #language #translator", "flav_9.png", "BobaWay", 'jH8sbQL_YpA',
        `To help other Taiwanese-American kids out there with immigrant parents, I created BobaWay, the Google Translate for English to Taiwanese. Open the web app on any device, input English sentences, and out pops the Taiwanese translation in audio form for learning perfect pronunciation.`
    ],
    ["emokeysthumbnail.png", '2 mos', 'Emokeys - Versatile Emoji Keyboard', '2023-07-01', 'Arduino/CAD/Python', 'wGvIvYGg-gg', 24, "",
        "#keyboard #emoji #discord", "smile.png", "Emokeys", 'wGvIvYGg-gg',
        `Meet Emokeys, a macropad for typing emoji. Featuring 9 OLED displays that allow an infinite library of colorful characters, plus there's Discord mode where you can even input custom stickers and animated GIFs on your server!`
    ],
    ["circuitfulthumbnail.png", '2 mos', 'Circuitful - Colorful Circuit Diagramming', '2022-07-01', 'Javascript', '2UL5aBr_zVA', 121, "",
        "#electronics #fritzing #arduino", "favicon.png", "Circuitful", '2UL5aBr_zVA',
        `Frustrated with the lack of keyboard shortcuts, graphics, and customization in circuit diagramming software like Fritzing and Tinkercad, I set off to program my own. Introducing Circuitful, the colorful circuit diagramming app.`
    ],
    ["mousekythumbnail.png", '2 mos', 'Mouseky - Unique Keyboard Designed from Scratch', '2022-06-01', 'Arduino/CAD', '6V3gyArkQ38', 5, ""],
    ["maxresdefault.webp", '8 mos', 'STEMables - Educational Tech Blocks', '2021-06-01', 'Arduino/CAD', 'TMdWpt-RRqY', 37, "https://bit.ly/stemables",
        "#electronics #programming #accessibletoys", "stemables.webp", "STEMables", '6V3gyArkQ38',
        `Rearrangeable 3D-printed blocks to create an infinite number of smart circuit sensor systems. Mission for visually-impaired and dexterously-challenged kids to learn electronics and programming in a fun, easy, and accessible way.`,
    ],
    ["cpace.webp", '7 mos', 'CPACE - Assistive Technology for Quadriplegia', '2020-11-01', 'Arduino/CAD', '0uANgR1oOII', 25, "https://bit.ly/projectcpace",
        "#disabilitytech #phonecontrol #affordable", "cpace.png", "CPACE", '0uANgR1oOII',
        `How might we help a quadriplegic use the same technology we all use? Current solutions have limited apps and features, or cost tens of thousands of dollars! CPACE lets anyone easily plug in a smartphone or computer to start using! It tracks head motion to position a mouse on screen, and the bite sensor for clicking.`,
    ],
    ["swanchair.webp", '1 mo', 'Swan Chair - Musical Throne', '2020-06-01', 'Arduino/CAD/Handicraft', 'jH6qUVLfZfc', 2, "",
        "#diy #woodworking #musicbox", "swan.png", "Swan Chair", 'jH6qUVLfZfc',
        `As one of the 24 participants selected for the Girls Garage summer program, I remember skipping sleep to go beyond basic woodworking as instructed, taking an unorthodox approach to design an Arduino-integrated that automatically drives a 3D resin-printed “Swan Lake” music box when sat upon.`
    ],
    ["automask.png", '5 mos', 'Auto Mask - Build for COVID 19', '2020-05-01', 'Arduino/CAD', 'mftXIeZvh94', 9, "https://bit.ly/auto-mask",
        "#touchless #sensors #hygiene", "automask.webp", "Auto Mask", 'mftXIeZvh94',
        `Behold the latest technology designed for the coronavirus pandemic and California wildfires: Auto Mask. With eye protection, touchless control, air and muscles sensors, this is a mask you'll never want to take off!`
    ],
    ["autoflote.jpg", '9 mos', 'Auto Flöte Clean - Musical Refreshment', '2019-01-01', 'Arduino/CAD/Handicraft', 'VGhm98lCZWY', 11, "https://bit.ly/autoflote",
        "#flute #cleaning #machine", "autoflote.png", "Auto Flöte Clean", 'VGhm98lCZWY',
        `My first “big project” was achieved in 9th grade: A quartet of automatic cleaning machines that fully cleanse and sanitize the flute. I was able to represent my school in personally presenting to the U.S. Vice President Mike Pence and CEO of Oracle, Safra Catz.`
    ]
]

var w = [ // Thumbnail, Live, Title, Start Date, Company, Youtube, Video Start, Optional: Website, Location Tags // Description // Channel Icon, Channel Description, Channel Website
    ["Moon-Surgical.jpg", '🔉 LIVE', 'Clinical Development Engineering Intern', '2024-06-03', 'Moon Surgical', 'sWpCpD1zYg8', 8, "", "#sancarlos #california", 
        `❥ Conducted design validation and usability studies with 15 surgeons for the Maestro surgical robotic assistant's advanced feature ScoPilot, including 5 human cadaver labs
        <br>❥ Co-authored formative study protocol and paperwork for ScoPilot's 510(k) FDA submission
        <br>❥ Lead design of a unique interactive demo and training game for Maestro's commercial launch
        <br>❥ Responsible for fabrication and procurement of custom organ models and medical equipment for gynecologic surgeries`,
        "moonsurgical_logo.jpeg", "Medical Robotics, Haptics, & Computer Vision", "https://moonsurgical.com"
    ],
    ["pexels-ekamelev-813872.jpg", '🔉 LIVE', 'Undergraduate Design Team Leader', '2024-01-01', 'Hopkins Biomedical Engineering', 'bzP4ZosYo3s', 0, "", "#baltimore #maryland", 
        `❥ Selected to lead a team of 8 undergrad students to develop a medical device with a clinical mentor over the course of one year
        <br>❥ Shadowed minimally-invasive robotic surgery in the Johns Hopkins Bayview hospital`,
        "johns_hopkins_biomedical_engineering_logo.jpeg", "Medical Device Design & Innovation", "https://www.bme.jhu.edu/"
    ],
    ["pexels-chevanon-302899.jpg", '🔉 LIVE', "Co-Founder, Business Development & Graphic Design", '2023-05-12', 'Higher Grounds Vending L.L.C.', 'mD-utJUMmkU', 0, "", "#baltimore #maryland", 
        `❥ Developed and secured a detailed business contract with Hopkins Dining to install and operate fresh café vending machines on the Homewood campus
        <br>❥ Collected feedback from 200+ user surveys and customer interviews
        <br>❥ Selected to participate in FFU Summer Incubator, JHU I-Corps, and FFU Fuel Startup Accelerators
        <br>❥ Received $10,000+ in non-dilutive grants
        <br>❥ Design all promotional graphics for machine and marketing use`,
        "highergroundslogoblack.png", "Affordable, freshly-brewed coffee and tea at Johns Hopkins!", "https://instagram.com/highergroundsvending"
    ],
    ["pexels-mediocrememories-1117132.jpg", '🔉 LIVE', "Content Creator", '2023-01-01', 'Taliyah Engineering', 'AJlgPpAQshM', 1, "", "#youtube #instagram #facebook #tiktok",
        `❥ Invent and build innovative and creative gadgets using CAD, 3D printing, programming, and electronics
        <br>❥ Produce and promote detailed videos that document the design process
        <br>❥ Featured news on Official Arduino Twitter, Gizmodo, Hackster.io, Hackaday (Mouseky)
        <br>❥ Interviewed and published on the World Journal, Taiwan Plus, Radio Taiwan International (BobaWay)`,
        "IMG_5548.png", "Engineering student who loves to invent and create!", "https://youtube.com/@taliyahengineering"
    ],
    ["magic.png", '5 mos', "3D Modeling/Animation", '2022-08-01', 'MagIC Lifescienc Inc.', 'W6m0floaz-E', 3, "", "#blender #pcr #contract",
        `❥ Created professionally-animated 3D simulation for demonstrating the startup company’s biotech product
        <br>❥ Led team meetings and planning for  animation production`,
        "1638399138601.jpeg", "Leveraging giant magnetoresistance to advance molecular diagnostics", "https://magiclifescience.com/"
    ],
    ["virgo.png", '3 mos', "Bioengineering Team Intern", '2022-06-10', 'Stanford Institute of Medicine', '8GJGm3xvwq8', 0, "https://www.im-creator.com/free/teamsaturn/saturn", "#summerprogram #allergy #medtech",
        `❥ Worked with a high school student team to create a medical device that addresses the issues of emergency allergy medication
        <br>❥ Responsible for CAD, 3D printing, animation, and website development`,
        "stanford_university_logo.jpeg", "Center for Biodesign", "https://simr.stanford.edu/"
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