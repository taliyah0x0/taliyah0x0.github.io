var fw = [0, 1, 2, 3]; // Featured work experiences (from work)
var fp = [3, 6, 1, 5]; // Featured projects (from projects)

var p = [ // Thumbnail [0], Duration [1], Title [2], Start Date [3], Skills [4], Youtube Link [5], Video Start [6], Optional: Website [7] // Project Tags [8], Project Icon [9], Project Name [10], Optional: Project Video Link [11] // Project Description [12] // Skill Tags [13] // Highlights [14] // Highlights Links/Images [15] // Career Relation [16]
    ["gpgames.jpg", '4 mos', "Custom GamePigeon Games - Anagrams & Word Hunt", '2024-12-15', 'HTML/CSS/JS', 'JZl_vHY_--o', 0, "https://customgpgames.com",
        "#wordhunt #anagrams #phaserjs", "gamepigeon.jpg", "Custom GamePigeon Games", 'JZl_vHY_--o',

        `This is my site, Custom GamePigeon Games, that let's anyone, even Android users, play Word Hunt and Anagrams with close to the exact same addicting graphics and game mechanics. But I didn't stop there, in the customization menu, you can change everything from the language, letter map, timer length, and more.
        <br><br>Try it here: <a href="http://customgpgames.com" target="_blank" class="hyperlink">http://customgpgames.com</a> Or also here: <a href="http://customgpgames.netlify.app" target="_blank" class="hyperlink">http://customgpgames.netlify.app</a>

        <br><br>Customizable features for playing Anagrams and Word Hunt:
        <li>Pick your own letters or use the generator
        <li>Design the map (leave some letter boxes blank)
        <li>Languages (English, Spanish, French, Japanese currently supported)
        <li>Timer length or even having a timer at all
        <br><br>Great for Android and laptop users, or GamePigeon pros who need a training tool!
        `,

        ['HTML CSS', 'Javascript'],
        ['Made a site to play word games with extreme customization', 'Produced a video showcasing design process', 'Source code on GitHub'],
        ['https://customgpgames.com', 'https://youtu.be/JZl_vHY_--o', 'https://github.com/taliyah0x0/CustomGPGames'],
        ''

    ],
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
    ["moonsurgical.jpg", '3 mos', 'Clinical Development Engineering Intern', '2024-06-03', 'Moon Surgical', 'sWpCpD1zYg8', 8, "", "#sancarlos #summerintern", 
        
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

        `❥ Selected to lead a team of 8 undergrad students in the practical application of design controls to develop a device that optimizes the novel lung cryobiopsy procedure
        <br>❥ Observed the Ion robotic bronchoscope and interviewed clinicians about the lung cryobiopsy procedure at the Johns Hopkins Hospital
        <br>❥ Shadowed and analyzed multiple minimally-invasive Da Vinci robotic surgeries at the Johns Hopkins Bayview Medical Center`,
    
        ['Leadership', 'Design Thinking'],
        ['Holding the single-use cryoprobe', 'Mindmapping observations and finding needs', 'I vlogged the intersession DT leader class!'],
        ['1006.mp4', 'mindmap.mp4', 'https://www.youtube.com/watch?v=Hb0S-mTIlP0&t=75s'],
        ''
    ],
    ["highergrounds.jpg", '🔉 LIVE', "Co-Founder, Business Development & Graphic Design", '2023-05-12', 'Higher Grounds Vending L.L.C.', 'mD-utJUMmkU', 0, "https://highergroundsvending.com", "#baltimore #maryland", 
        
        "highergroundslogoblack.png", "Affordable, freshly-brewed coffee and tea at Johns Hopkins!", "https://highergroundsvending.com",

        `❥ Developed and secured a detailed business contract with Hopkins Dining to install and operate fresh café vending machines on the Homewood campus
        <br>❥ Collected feedback from 200+ user surveys and customer interviews
        <br>❥ Selected to participate in FFU Summer Incubator, JHU I-Corps, and FFU Fuel Startup Accelerators
        <br>❥ Received $10,000+ in non-dilutive grants
        <br>❥ Design all promotional graphics for machine and marketing use`,
        
        ['Business', 'Graphic Design'],
        ['Designed and programmed the website', 'Manage social media content'],
        ['https://highergroundsvending.com', 'https://instagram.com/highergroundsvending'],
        `<strong>How this aligns with my career goals:</strong>
        <br>With my ultimate dream being a successful startup founder, I want to start gaining experience about growing a business from the ground up.
        90% of startups fail, with the majority being due to offering an unwanted product, so in order to avoid risks as I learn the ropes around financial accounting, funding, insurance, and more, I teamed up with 3 other highly-motivated students to found Higher Grounds Vending, L.L.C.
        Sourcing our fresh beverage-making vending machines directly from a manufacturer doesn't exactly show innovation, but it allowed us to quickly start operating as we continued to learn more and cater our products towards our target audience: College students.
        So far, it has been a great experience with the support of  Johns Hopkins' entrepreneurship programs and resources, as we are continuing to expand our reach and services across campus.`,
    ],
    ["designday.jpg", '🔉 LIVE', "President & Lead Designer", '2023-11-15', 'Engineering Design Center Student Advisory Board', 'd2dpfmzsryY', 6, "https://engineering.jhu.edu/designcenter/", "#leadership #multidisciplinary #design",
        
        "jhuwse.jpg", "Supporting project-based learning across all engineering disciplines", "https://engineering.jhu.edu/designcenter/",

        `❥ Designed and presented the 2024 JHU Design Day keynote speaker gift for the Founder of FIRST Robotics, Dean Kamen
        <br>❥ Lead weekly meetings with a board of students who represent the 9 engineering departments at JHU to advise the construction of the future facility
        <br>❥ Plan technocraft workshops to promote cocurricular engineering design resources at makerspaces`,

        ['Leadership', 'CAD', 'Graphic Design'],
        ['Presenting my self-designed award to Dean Kamen', 'Uniquely incorporated the FIRST Robotics logo and JHU Blue Jay in a multimaterial design', 'Successful first workshop!'],
        ['2024-05-01.mp4', 'model.mp4', 'sewncircuits.mp4'],
        ''
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
    ["lab.jpg", '7 mos', 'User Interface and Experience Designer', '2023-05-22', 'Quest2Learn', 'X1B1jnD45sY', 0, "", "#figma #ar #design",
        
        "q2l.jpeg", "AR platform for laboratory science education", "https://quest2learn.notion.site/Quest2Learn-eb16a5657d9d41ff93c974c241db6ff8/",

        `❥ Conducted user interviews to understand root problems in laboratory science education
        <br>❥ Programmed Streamlit Python web application for dermatology education (Derm Discovery)
        <br>❥ Designed an app interface in Figma for lab skills development tool featuring AR and AI (Quest2Learn AR + Lab Co-Pilot)`,
        
        ['Python', 'Graphic Design'],
        ['Demo of interactive skin disorder education app', 'Demo of virtual lab interface', 'Demo of lab notebook and AI chatbot interface'],
        ['skin.mp4', 'labview.mp4', 'copilot.mp4'],
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
    ["saturn.png", '3 mos', "Bioengineering Team Intern", '2022-06-10', 'Stanford Institute of Medicine', '8GJGm3xvwq8', 0, "https://www.im-creator.com/free/teamsaturn/saturn", "#summerintern #allergy #medtech",
        
        "stanford_university_logo.jpeg", "Center for Biodesign", "https://simr.stanford.edu/",

        `❥ Worked as a high school student team to create a medical device that addresses the issues of emergency allergy medication
        <br>❥ Responsible for CAD, 3D printing, animation, and website development`,
        
        ['CAD', '3D Printing', 'Web Design'],
        ['Website design & development was all me', 'Did the CAD for several prototypes'],
        ['https://www.im-creator.com/free/teamsaturn/saturn', 'https://cad.onshape.com/documents/0539fa19643aa5ea69bea0c8/w/6b37b10aaf9fd72a722668ae/e/078abaceeb5841a0192c7ebb?renderMode=0&uiState=66b8506bc8af0930f4bf2dd5'],
        ''
    ],
    ["disabilitylab.jpg", '12 mos', "Assistive Technology Researcher & Website Designer", '2021-05-20', 'Dr. Nakamura Rad Mad Lab @ UC Berkeley', 'TMdWpt-RRqY', 21, "https://disabilitylab.berkeley.edu/", "#highschoolintern #coding #3dprinting",
        
        "disability_lab_logo.jpeg", "Disability Tech Lab", "https://disabilitylab.berkeley.edu/",

        `❥ Core member of Team Sensible Computing: Designing for the inclusion of blind people in tactile screen-less programming, responsible for creative ideation and 3D printed prototypes
        <br>❥ Designed the new disability bear logo and managed the lab website`,
        
        ['CAD', '3D Printing', 'Web Design'],
        ['Devised and designed several 3D printed prototypes', 'Version with Aruco markers for computer vision tracking',"My website and logo design still hasn't changed much over these years"],
        ['3dprototypes.mp4', 'IMG_4155.mp4', 'https://disabilitylab.berkeley.edu/'],
        ''
    ],
    ["dtech.jpg", '9 mos', "School Website Manager & Photographer", '2021-08-20', 'Design Tech High School', 'ukeE4uAr0CY', 0, "https://designtechhighschool.org/", "#highschoolintern #photography #webdesign",
        
        "design_tech_high_oracle_logo.jpeg", "Design Thinking Oriented Charter Education", "https://designtechhighschool.org/",

        `❥ Trusted with full redesigning and editing authority of my high school's public websites
        <br>❥ Updated graphics to be more visually-appealing and used personal photography to replace out-dated pictures`,
        
        ['Web Design'],
        ["The main website I worked on hasn't changed much over these years"],
        ['https://designtechhighschool.org/'],
        ''
    ],
    ["youthinnovate.png", '1 yr', "Founder & Educator", '2020-05-20', 'Youth Innovate', 'r6amWh9J5cs', 0, "https://taliyahengineering.wixsite.com/youthinnovate", "#highschoolbusiness #CAD #origami",
        
        "youthinnovate.jpg", "STEM & Design for Youth, Taught by Youth", "https://taliyahengineering.wixsite.com/youthinnovate",

        `❥ Accumulated 300+ hours of elementary and middle school summer programs and semester courses in various art and STEM subjects through hands-on projects and real-world technical skills
        <br>❥ Taught design thinking based CAD virtually to over 100 students throughout the course of the COVID quarantine
        <br>❥ Organized all accounting, marketing, course-planning, and logistics with on-time materials delivery`,
        
        ['Web Design'],
        ["My website showcases many impressive student works!"],
        ['https://taliyahengineering.wixsite.com/youthinnovate'],
        ''
    ],
]

var ln = [];
for (var i = 0; i < w.length; i++) {
    if (w[i][1] == '🔉 LIVE') {
        ln.push(i);
    }
}

// Channel Icon [0], Project Title [1], Duration [2], End Date [3], Thumbnail Image [4], Youtube Video [5], Skills [6], Section Name [i * 2 + 7], Section Text [i * 2 + 8]
var case_studies = [
    ["moonsurgical_logo.jpeg", "🌟 Constellation Destroyer<br>-- Internship at Moon Surgical", "3 mos", "2024-08-16", "constellation/display.png", "8-r4F3nH55E", "CAD/3D Printing",

        "PROJECT BACKGROUND",
        `Moon Surgical is a well-developed French-American startup working on a surgical robotic assistant Maestro. Recently, they have began expanding the marketing of their product across the U.S.,
        attending various conferences and events where interested surgeons can try out the system and the unique features it offers.
        <br><br>However, without being able to actually perform a procedure, it can sometimes be difficult for a surgeon to truly understand how helpful Maestro can be, and single-use dissectable models cost
        $400 a piece. Furthermore, as the Maestro systems were being rapidly onboarded at new hospitals, a realistic training kit that could be quickly set up and repeated for each surgeon and nurse was at a high demand.`,

        "NEEDS DEFINITION",
        `First, I started by identifying the needs criteria and their reasonings.
        <li>Simulative: Trainees gain helpful experience toward a real procedure
        <li>Affordable: Save costs for the company so they can easily conduct more demos and trainings
        <li>Reusable: To further save costs, storage space, and minimize environmental impact
        <li>Quick Set-Up: Availability of demo or training will not be limited by time
        <li>Robust: Present a professional outlook that easily identifies the brand
        
        <br><br>From these needs, I further defined the design requirements:
        <li>User should be prompted to exhibit similar actions to a real procedure, specifically:
        <ol>
            <li>Let go of laparascope to use both hands on active instruments, letting Maestro control it
            <li>Enable High-Force mode to hold up a heavy object with Maestro
            <li>Enable and disable ScoPilot at least twice to track hook vs. grasper across the screen
            <li>Activities that intuitively suggest instrument exchange between a hook vs. shears vs. grasper
        </ol>
        <li>Manufacturing should cost at most $400, the price of the current competitor, the dissectable model
        <li>Set-up should take at most 5 minutes for one person
        <li>Model should fit inside the existing abdominal model used for demos, and be compatible
        <li>Include a fun space-related element to align with Moon Surgical's theme and encourage interaction
        <br>
        <div class="community-image">
            <img src="https://kotobuki-medical.myshopify.com/cdn/shop/products/gallbladder-injection-simulator.jpg?v=1681449846&width=1426">
            <div>The $400 dissectable single-use cholecystectomy model was also tedious to set-up.</div>
        </div>`,

        "IDEATION & PROTOTYPING",
        `Next, I researched the gold standard: How Intuitive Surgical trains new surgeons on their Da Vinci system.
        With SimNow, surgeons can play simulation games in virtual reality, from apple picking to practice grasper and shears manipulation, to more specific procedural simulations with tissue and blood.
        <div class="community-image">
            <img src="community/constellation/inspo.png">
            <div>I filled my Notion board with images and links to existing products that inspired me</div>
        </div>
        <br>I was also inspired by Montessori kids activities that promoted two-handed object manipulation with fun goals and themes. Lastly, I also took some inspiration from parrot trick accessories, coming with pre-determined intuitive tasks at a mini size.
        My first concepts included boxes that had to be held open for the two-handed task inside, and after that came the idea of using the Maestro to keep a rubber band stretched while shoving toothpicks inside.
        <div class="community-image">
            <img src="community/constellation/sketches.png">
        </div>
        <br>I had even made animations and 3D printed prototypes, but that only made me realize that I needed to go back to the drawing board. It was clear there had to be multiple mini-games combined to enable the instrument exchange and other prompted tasks.
        <div class="community-image">
            <video src="community/constellation/0001-0820.mp4" autoplay="1" muted="1" loop="1"></video>
            <div>My rough Blender animation, where the teal grasper would be attached to the Maestro's arm</div>
        </div>
        <br>Utilizing my CAD and 3D printing skills, I revised over and over, testing the ease-of-use with the Maestro and instruments myself, realizing how kinetic sand was too messy for a hook dissection simulation, and how the port placement would affect the difficulty of the game's completion.
        <div class="community-image">
            <img src="community/constellation/prototypes.png">
        </div>`,

        "FINAL PRODUCT",
        `<div class="community-image">
            <video src="community/constellation/IMG_8947.MOV" autoplay="1" muted="1" loop="1"></video>
        </div>
        <br>After weeks of effort, I presented the "Constellation Destroyer". The kit is lightweight and comes in one piece that can be easily slid and fit inside the abdominal case in seconds. The only disposable element is the rubber bands that must be replaced, and reusing the model consists of simply reinserting each of the spiral bands.
        <div class="community-image">
            <img src="community/constellation/final.png">
        </div>
        <br>I even designed a quick reference guide to graphically introduce the four steps to the game:
        <li type="1">Lift up the silicone "night sky" with a grasper and have the Maestro hold it in place with High Force Mode
        <li type="1">Using hook and shears, remove each of the rubber bands that link together the constellation
        <li type="1">Using graspers, pull out each of the constellation bands from various angles
        <li type="1">Enable ScoPilot to follow an active grasper to the other side of the map, where another active grasper opens the "black hole" lid, allowing the bands to be placed inside one by one
        
        <div class="community-image">
            <img src="community/constellation/qrg.png">
        </div>
        <br>I had several Moon coworkers test out the game for the first time, and it would take an average 5-8 minutes to complete, which was perfect for a conference demo that is welcoming and doesn't frustrate users.
        <div class="community-image">
            <img src="community/constellation/testing.png">
            <div>An intern friend on the left (Helin) and my manager on the right (Victoria) try the game I designed.</div>
        </div>`,

        "LESSONS LEARNED",
        `This project challenged my creativity and I struggled a lot in the beginning to think of how I might incorporate all the different elements without overcomplicating something that should still be fun and intuitive. I was stuck on the box idea for so long, generating tons of 3D printed prototypes where all I could think about was how to design a sliding lid that allowed port flexibility, when I really should have been thinking <i>outside</i> the box. Talking with my coworkers also helped, as they inspired fresh ideas such as the multidimensional rubber band activity and elevated platform for instrument reach. Next steps are to conduct more testing with surgeons and non-surgeons, listen to their feedback, and improve.
        <div class="community-image">
            <video src="community/constellation/0816.mp4" autoplay="1" muted="1" loop="1"></video>
            <div>Playing the game from start to finish!</div>
        </div>`,
    ],
    ["moonsurgical_logo.jpeg", "🔧 Uterine Manipulation Model<br>-- Internship at Moon Surgical", "3 mos", "2024-08-16", "uterine/thumbnail.png", "_FzIKRg3c-o", "CAD/3D Printing",

        "PROJECT BACKGROUND",
        `Another independent design project I was assigned while interning at Moon Surgical was to create a basic uterus model for demoing purposes.
        Moon Surgical recently announced their plan of expansion into the gynecologic surgery field, where the Maestro would be responsible for holding the uterine manipulator.
        
        <br><br>In a typical procedure, an assistant, usually a medical student, would need to crouch at the legs of the patient and insert the manipulator through the vagina to lift up the uterus so that the surgeon
        has visibility of the surrounding tissue while they perform the minimally-invasive surgery. The uterus can sometimes be quite heavy, and the assistant would be required to hold the organ in an uncomfortable position anywhere from a few minutes to hours.
        Not only is it easy to lose focus and energy as time goes on, leading to delays in the procedure and ergonomic harm on the body of the assistant, it can also be considered a waste to have such a highly-paid trained professional
        doing a boring and undesired task.`,

        "NEEDS DEFINITION",
        `I settled on the following list of user needs, where the users would include both the clinical development engineers at Moon who conduct the demos, as well as surgeons curious to try it out themselves:
        <li>Representation: Observers can easily connect the manipulation of the model to the depiction of an actual procedure.
        <li>Affordability: There is a strict budget for demos and training, and this should be something easily mass-produceable at a low cost to the company.
        <li>Ease-of-use: Observers can confidently understand how to use the model after watching the demo once or twice.

        <br><br>With the novelty of the application of the Maestro for gynecologic surgeries, I started by learning everything I could about the minimally-invasive surgeries themselves.
        Beginning from the medical conditions, their causes, symptoms, and solutions, to the OR setup and procedural steps, I consumed countless papers and videos I could find online.
        
        <br><br>We were also fortunate enough to meet with a several surgeons virtually to conduct interviews about their tool preferences conducting hysterectomies, myomectomies, and more.
        I learned about many different brands and types of uterine manipulators, from plastic S-curves to metal poles, and how they are controlled by the assistant to
        orient the uterus's position and angle for various kinds of procedures.

        <div class="community-image">
            <img src="https://www.mdpi.com/applsci/applsci-14-03851/article_deploy/html/images/applsci-14-03851-g002.png">
            <div>According to the interviews and articles, retracting the uterus upward was the most important action of the uterine manipulator.</div>
        </div>
        
        <br>The research paid off, and I defined the design requirements:
        <li>The model must be able to simulate rotational manipulation in the pitch axis, and ideally roll and yaw axes as well.
        <li>The model must be compatabile with the existing benchtop abdominal model for laparoscopic demos using the Maestro.
        <li>The model must exhibit the shape and size of the typical female reproductive organs with a manipulator inside. (~10mm length, ~5mm width, ~2mm vagina)
        <li>The model must be compatible with the 8 most common uterine manipulators identified. (RUMI II, Advincula Delineator, HOHL, MAUT 60, ElevatOR, VCare, ClearView, Cohen Acorn)
        <li>The model must allow the tip of the uterine manipulator to reach the uterus, where the occluder cup is secured by the vagina.
        
        <div class="community-image">
            <img src="community/uterine/manipulators.png">
            <div>Some of the manipulators I was tasked with purchasing and researching (left to right): VCare, Advincula Delineator, MAUT 60, RUMI II</div>
        </div>
        `,

        "IDEATION & PROTOTYPING",
        `Ideation always begins with learning from the existing precedents. I discovered various silicone models of female anatomy for sale that were used by gynecologists in training,
        however, while the size, shape, and texture of the vagina were accurately replicated, these models would not actually visualize the positioning of the uterus inside the abdomen.

        <div class="community-image">
            <img src="community/uterine/models.png">
            <div>The models for sale were also often quite expensive.</div>
        </div>

        <br>At some point, I came across a video of someone creating a uterine manipulator training kit using a plastic water bottle covered with fabric inside of storage bin, and was inspired to make a more
        professional version of it. All I would have to do is make a realistic uterus that would be attached to the inside of the existing abdomen model.
       
        <div class="community-image">
            <video src="community/uterine/manipulate.mp4" autoplay="1" muted="1" loop="1"></video>
            <div>Uterine Manipulator Simulation by Allen Huy Doan -- University of Arizona College of Medicine</div>
        </div>

        <br>In order to simulate the flexibility of the uterus, my first idea was to create a silicone casting of the organ. I designed and 3D printed the 3-piece mold, then waited for
        the plastic to set. Unfortunately, the biggest problem was that the vagina had a much smaller diameter than the inner cavity of the uterus, preventing any of my attempts
        to remove the mold. Furthermore, normally the vagina can open up to five times of its resting diameter, allowing the occluder cup of the uterine manipulator to fit inside. But the
        silicone is not nearly stretchy enough, so I would need to find some other way to secure the occluder cup of the uterine manipulator.
       
        <div class="community-image">
            <img src="community/uterine/casting.png">
            <div>I used Blender to design the 3D printed mold for the silicone uterus, but the thin fallopian tubes would break off easily.</div>
        </div>

        <br>So, I decided to try printing the uterus itself in resin, although the most flexible resin we had in stock was only a fraction as flexible as the silicone, and since it is a see-through
        material, we would be able to see the uterine manipulator's probe being inserted and the reach it has, which is an additional benefit I had not previously planned for. In order to optimize
        the insertion of the uterine manipulator and the uterus's attachment to the abdomen skin, I also designed the supporting vagina at its most opened position to be secured to the outside
        of the abdomen.
        
        <div class="community-image">
            <img src="community/uterine/printing.png">
            <div>In every iteration, I was adjusting the details for the pipe flange connector design and form of the vagina.</div>
        </div>`,

        "FINAL PRODUCT",
        `The final product worked for the 8 uterine manipulators, wherein the user can easily insert and secure the manipulator's occluder cup at the vagina, control the pitch and yaw of the uterus,
        and be able to see the effects via a laparascope inserted into the abdomen from the other end. The idea is to completely eliminate the need for an assistant, since the attending surgeon can
        now manipulate the uterus directly and position it at exactly the orientation they would like, then release to let the Maestro hold it without any issue of fatigue. This improves the speed and
        flow of the procedure, as the surgeon will feel less frustrated about needing to voice commands to a bored and tired med student.
        
        <div class="community-image">
            <video src="community/uterine/final.mp4" autoplay="1" muted="1" loop="1"></video>
            <div>The flexibility of the abdominal wall contributed to the easy manipulation of the uterus model.</div>
        </div>

        <br>The only milestone I was unsuccessful in reaching was the control of roll, and on top of that, I would also want to be able to better position the entire complex in a more anatomically
        correct location, as the vagina is currently much too high and close to the abdomen. I didn't really have much of a choice as I had to use the existing abdomen model, but in the future,
        I hope the other clinical development engineers at Moon will be able to use the CAD models I left behind to improve the anatomy.
        
        <div class="community-image">
            <img src="community/uterine/demos.png">
            <div>I tested each of the uterine manipulators to make sure they would nicely fit into the model.</div>
        </div>`,

        "LESSONS LEARNED",
        `For this project, I think something important I learned is that sometimes not being able to achieve a design goal will allow other possibilities that were not thought of before.
        While I wasn't able to replicate the tissue color and flexible nature of the vagina and uterus using silicone, the transparency and rigidity of the resin helped create a durable
        model that could securely bind to the abdomen skin and allow the visibility of the uterus manipulator as it moves inside the uterus.`
    ]
]

var all = p.concat(w);
all.sort((a, b) => b[3].localeCompare(a[3]));
/*for (var i = 0; i < all.length - 1; i++) {
    for (var j = 0; j < all.length - 1; j++) {
        if (all[j][1] != '🔉 LIVE' && all[j + 1][1] == '🔉 LIVE') {
            var temp = all[j];
            all[j] = all[j + 1];
            all[j + 1] = temp;
        }
    }
}*/

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
    ["matlab.png", "Matlab", "2023-01-01"],
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

var non_shorts_skills = ["Leadership", "Business"]

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
    skill_playlists[i].push("skills/" + skills[i][0]);
}
for (var i = 0; i < non_shorts_skills.length; i++) {
    skill_playlists.push([]);
    skill_playlists[i + skills.length].push(non_shorts_skills[i]);
    skill_playlists[i + skills.length].push([]);
    var thumbnail = "";
    for (var j = 0; j < all.length; j++) {
        for (var k = 0; k < all[j][13].length; k++) {
            if (all[j][13][k] == non_shorts_skills[i]) {
                skill_playlists[i + skills.length][1].push(j);
                thumbnail = all[j][0];
            }
        }
    }
    skill_playlists[i + skills.length].push(skill_playlists[i + skills.length][1].length);
    skill_playlists[i + skills.length].push("thumbnails/" + thumbnail);
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