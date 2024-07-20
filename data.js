var ln = [ // Thumbnail, Live, Title, Start Date, Company, Youtube, Video Start
    ["Moon-Surgical.jpg", '🔉 LIVE', 'Clinical Development Engineering Intern', '2024-06-03', 'Moon Surgical', 'sWpCpD1zYg8', 8],
    ["pexels-ekamelev-813872.jpg", '🔉 LIVE', 'Undergraduate Design Team Leader', '2024-01-01', 'Hopkins Biomedical Engineering', 'bzP4ZosYo3s'],
    ["pexels-chevanon-302899.jpg", '🔉 LIVE', "Co-Founder, Business Development & Graphic Design", '2023-05-12', 'Higher Grounds Vending L.L.C.', 'mD-utJUMmkU'],
    ["pexels-mediocrememories-1117132.jpg", '🔉 LIVE', "Content Creator", '2023-01-01', 'Taliyah Engineering', 'AJlgPpAQshM', 1],
]

var fp = [ // Thumbnail, Duration, Title, Start Date, Skills, Youtube, Video Start
    ["bobawaythumbnail.png", '6 mos', 'BobaWay - First Taiwanese-English Translator', '2023-05-01', 'Python/HTML/CSS/JS', 'jH8sbQL_YpA', 31],
    ["mousekythumbnail.png", '2 mos', 'Mouseky - Unique Keyboard Designed from Scratch', '2022-06-01', 'Arduino/CAD', '6V3gyArkQ38', 5],
    ["gamepigeon.png", '1 mo', "GamePigeon Bots - Fun Programming Project", '2024-06-19', 'Arduino/Python', '3ex0ym1oMgs', 0],
    ["circuitfulthumbnail.png", '2 mos', 'Circuitful - Colorful Circuit Diagramming', '2022-07-01', 'Javascript', '2UL5aBr_zVA', 121],
]

var p = [ // Thumbnail, Duration, Title, Start Date, Skills, Youtube, Video Start
    ["gamepigeon.png", '1 mo', "GamePigeon Bots - Fun Programming Project", '2024-06-19', 'Arduino/Python', '3ex0ym1oMgs', 0],
    ["typewanesethumbnail.png", '3 mos', "Typewanese/Tai-Ping - First Romanized Taiwanese Keyboard", '2023-08-01', 'Python/HTML/CSS/JS', 'jXlTl5RPKoY', 43],
    ["bobawaythumbnail.png", '6 mos', 'BobaWay - First Taiwanese-English Translator', '2023-05-01', 'Python/HTML/CSS/JS', 'jH8sbQL_YpA', 31],
    ["emokeysthumbnail.png", '2 mos', 'Emokeys - Versatile Emoji Keyboard', '2023-07-01', 'Arduino/CAD/Python', 'wGvIvYGg-gg', 24],
    ["circuitfulthumbnail.png", '2 mos', 'Circuitful - Colorful Circuit Diagramming', '2022-07-01', 'Javascript', '2UL5aBr_zVA', 121],
    ["mousekythumbnail.png", '2 mos', 'Mouseky - Unique Keyboard Designed from Scratch', '2022-06-01', 'Arduino/CAD', '6V3gyArkQ38', 5],
]

var w = [ // Thumbnail, Duration, Title, Start Date, Company, Video, Youtube, Video Start
    ["magic.png", '5 mos', "3D Modeling/Animation", '2022-08-01', 'MagIC Lifescienc Inc.', 'W6m0floaz-E', 3],
    ["virgo.png", '3 mos', "Bioengineering Team Intern", '2022-06-10', 'Stanford Institute of Medicine', '8GJGm3xvwq8', 0], //https://www.im-creator.com/free/teamsaturn/saturn
]

var t = p.concat(w);
t.sort((a, b) => b[3].localeCompare(a[3]));
var all = ln.concat(t);