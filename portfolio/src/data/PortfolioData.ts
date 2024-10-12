export const introduction: string = `
    Thanks for checking out my website! \ 
    I'm a recent Computer Science graduate from the University of Calgary, \ 
    with a strong passion for and expertise in developing full-stack web applications. \
    To find out more about me, feel free to keep scrolling down!
    `;

// Items with a href marked as '#' have not been completed
export const navItems: { label: string ; href: string }[] = [
    { label: "home", href: "#home-section" },
    { label: "about", href: "#about-section" },
    { label: "skills", href: "#skills-section" },
    { label: "projects", href: "#" },
    { label: "resume", href: "#resume-section" },
    { label: "contact", href: "#" }
];

export const ABOUT_PATH = "/resources/about"

export const aboutItems: { src: string ; description: string }[] = [
    {
        src: `${ ABOUT_PATH }/programming.jpg`,
        description: `
Funny enough, I had no idea that programming would be for me going into university. \
I actually started off in engineering, and after my first year, I felt uncertain about the \
program and whether it was the right fit. None of the courses I took really blew me away \
- except for an introductory coding class. This peaked my interest in learning more about programming \
and the various types of programs you can create. Because of this, I made the decision to switch \
to Computer Science in my second year, and haven't looked back since!

Enjoy a picture of the first project I ever made, which was a bar graph visualization of \
weather data in Calgary. The code is horrendous but at least the UI looks decent!
        `
    },
    {
        src: `${ ABOUT_PATH }/chichen_itza.jpg`,
        description: `
I'm a lifelong learner by nature, which happens to be the same reason I love travelling so much! \
Learning about and embracing other cultures around the world has always intrigued me. Whether \
it's diving into local cuisine, visiting historical landmarks, or simply just strolling through \
the city to admire the architecture. I enjoy discovering what the world has to offer \
and how we've evolved into modern society.

To the left is a picture of the iconic pyramid at Chichén Itzá, which I took during my trip \
to Mexico in Summer 2023. One of my lifetime goals is to check off all of the New 7 Wonders \
of the World from my travelling bucket list!
        `
    },
    {
        src: `${ ABOUT_PATH }/family.jpg`,
        description: `
Nothing means more to me on this world than my family. As cliché as it might \
sound, I wouldn't be where I am today without them. They've always been \
a shoulder I can lean on for support and guidance, granting me strength during times \
where I've felt ready to give up. The experiences I've shared with them growing up \
have shaped me in ways that continue to resonate through the actions I take \
in my everyday life.

If you ever catch me out in public, chances are I'll be hanging out with a family member \
- 9 times out of 10!
        `
    },
    {
        src: `${ ABOUT_PATH }/zipline.jpg`,
        description: `
Growing up as a gamer, I didn't have the incentive to go outside that much... \
But as an adult, I've grown to acknowledge the amount of benefit outdoor activity \
can yield beyond the physical. I feel that the moments we spend connecting with nature \
helps us so much in growing spiritually and mentally.

To the left is a picture of me during a zipline adventure last summer in Mexico. \
It was extremely exhilirating, but also extremely exhausting! We had to hike up a large \
hill to reach the tallest zipline at 800 feet!
        `
    },
    {
        src: `${ ABOUT_PATH }/witcher.jpg`,
        description: `
Video games have been involved in my life for as long as I can remember. \
My first time ever picking up a controller was back when I was four years old, \
for Gran Turismo 2 on the Playstation 1. Since then, I've had the chance to \
dive into a number of game genres, ranging from open-world singleplayer games, \
all the way to competitive multiplayer games. 

To this day, my favorite game of all time has to be The Witcher 3. The story, \
the characters, the soundtrack, the graphics - everything about it is just \
a masterpiece.
        `
    }
];

// An array of the names used in aboutItems, to be used for typewriter
export const aboutNames: string[] = [
    "programming",
    "travelling",
    "family",
    "the outdoors",
    "video games"
]

const ICON_PATH = "/resources/icons";

export const skillsItems: { category: string ; technologies: { name: string ; src: string }[] }[] = [
    {   
        category: "languages", 
        technologies: [
            { name: "Python", src: `${ ICON_PATH }/languages/python_logo.png` },
            { name: "JavaScript", src: `${ ICON_PATH }/languages/javascript_logo.png` },
            { name: "HTML5", src: `${ ICON_PATH }/languages/html5_logo.png` },
            { name: "CSS3", src: `${ ICON_PATH }/languages/css3_logo.png` },
            { name: "Java", src: `${ ICON_PATH }/languages/java_logo.png` },
            { name: "TypeScript", src: `${ ICON_PATH }/languages/typescript_logo.png` }
        ]
    },
    {   
        category: "frameworks",
        technologies: [
            { name: "Django", src: `${ ICON_PATH }/frameworks/django_logo.png` },
            { name: "React.js", src: `${ ICON_PATH }/frameworks/react_logo.png` },
            { name: "Vue.js", src: `${ ICON_PATH }/frameworks/vue_logo.png` },
            { name: "Node.js", src: `${ ICON_PATH }/frameworks/node_logo.png` },
            { name: "Bootstrap", src: `${ ICON_PATH }/frameworks/bootstrap_logo.png` },
            { name: "Tailwind CSS", src: `${ ICON_PATH }/frameworks/tailwindcss_logo.png` },
            { name: "Next.js", src: `${ ICON_PATH }/frameworks/next_logo.png` }
        ]
    },
    {   
        category: "dev tools",
        technologies: [
            { name: "Git", src: `${ ICON_PATH }/tools/git_logo.png` },
            { name: "MySQL", src: `${ ICON_PATH }/tools/mysql_logo.png` },
            { name: "Docker", src: `${ ICON_PATH }/tools/docker_logo.png` }
        ]
    }
];

export const resumeItems: { type: string, title: string, company: string, location: string, date: string, description?: string }[] = [
    {
        type: "education",
        title: "Bachelor of Science in Computer Science",
        company: "University of Calgary",
        location: "Calgary, AB",
        date: "June 2024"
    },
    {
        type: "work",
        title: "Meat Clerk",
        company: "Sobeys Inc.",
        location: "Calgary, AB",
        date: "June 2023 - January 2024",
        description: `
            Provided exceptional customer service at the service case, managed inventory \ 
            of meat products, and efficiently handled department closing procedures.
        `
    },
    {
        type: "work",
        title: "Barista",
        company: "Snowcapz Cafe",
        location: "Calgary, AB",
        date: "May 2022 - August 2022",
        description: `
            Prepared high-quality desserts and baked goods with meticulous attention to detail. \
            Consistently adapted to evolving work procedures and the addition of new menu items.
        `
    },
    {
        type: "work",
        title: "Crew Member",
        company: "Tim Hortons",
        location: "Lethbridge, AB",
        date: "July 2018 - August 2019",
        description: `
            Successfully processed orders at both the drive-thru and counter in a fast-paced, \
            team-oriented environment. Leveraged strong communication and collaboration skills \
            to ensure smooth operations while maintaining efficiency.
        `
    }
];
