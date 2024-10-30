export const introduction: string = `
    Thanks for checking out my website! \ 
    I'm a recent Computer Science graduate from the University of Calgary, \ 
    with a strong passion for and expertise in developing full-stack web applications. \
    To find out more about me, feel free to keep scrolling down!
    `;

interface navItem {
    label: string;
    href: string;
}

export const navItems: navItem[] = [
    { label: "home", href: "#home" },
    { label: "about", href: "#about" },
    { label: "skills", href: "#skills" },
    { label: "projects", href: "#projects" },
    { label: "resume", href: "#resume" },
    { label: "contact", href: "#contact" }
];

interface aboutItem {
    topic: string;
    src: string;
    description: string;
};

const ABOUT_PATH = "/resources/about";

export const aboutItems: aboutItem[] = [
    {   
        topic: "programming",
        src: `${ ABOUT_PATH }/programming.jpg`,
        description: `
            My journey into programming began in my first year of university, \
            with an intro course in Java that introduced me to fundamental programming concepts. \
            Since then, I've had to the opportunity to complete my degree in Computer Science, and \
            develop a strong interest in full-stack web development and data visualization. Discovering \
            and mastering new programming concepts is what fuels my enthusiasm to continously grow as a developer!
            `
    },
    {   
        topic: "family",
        src: `${ ABOUT_PATH }/family.jpg`,
        description: `
            Nothing is more important to me than my family. \
            I can say with confidence that I wouldn't be where I am today without their support. \
            The compassion and wisdom they imparted to me growing up has shaped me in ways that continue \
            to resonate through my daily actions. This influence is what drives me to be an excellent teammate \
            in a professional setting, and treat my peers with the same level of respect and \
            kindness that I receive from my own family.
            `
    },
    {
        topic: "travelling",
        src: `${ ABOUT_PATH }/zipline.jpg`,
        description: `
            I'm a lifelong learner by nature, which makes me a fanatic for \
            travelling! It truly is a blessing to be able to learn about and embrace other cultures \
            around the world. Whether it's participating in local festivities, visiting historical \
            landmarks, or simply strolling through the city to admire the architecture. I enjoy discovering \
            what the world has to offer and how we've progressed into modern society.
            `
    },
    {
        topic: "nba fan",
        src: `${ ABOUT_PATH }/rockets.jpg`,
        description: `
            I don't play basketball much myself, but I've always been an enthusiastic \
            NBA fan. Besides the game, one aspect that's always stood out to me is the unique player \
            and team statistics displayed throughout, along with the creative visualizations that accompany \
            them. Also, for those curious, I'm a big time Houston Rockets fan. Hoping that Sengun is an \
            All-Star this year and we make the play-in tournament!
            `
    },
    {
        topic: "video games",
        src: `${ ABOUT_PATH }/witcher.jpg`,
        description: `
            Video games have been a significant part of my life for as long as I can remember. \
            My favorite genre is definitely single player, open-world RPGs that feature intricate world design, \
            deep lore and complex puzzles. Some of my top picks include The Witcher 3, the Uncharted series \
            and Horizon series. While I mostly play for enjoyment, I feel that video games also serve \
            as a great outlet for honing my problem solving skills and fostering my natural curiosity.
            `
    }
];

interface Technology {
    name: string;
    src: string;
}

interface skillItem {
    category: string;
    technologies: Technology[];
}

const ICON_PATH = "/resources/icons";

export const skillsItems: skillItem[] = [
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

interface resumeItem {
    type: string;
    title: string;
    company: string;
    location: string;
    date: string;
    description?: string;
}

export const resumeItems: resumeItem[] = [
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

interface projectItem {
    type: string;
    name: string;
    src: string;
    description: string;
    repoLink?: string;
    demoLink?: string;
    tags: string[];
}

const PROJECT_PATH = "/resources/projects";

export const projectItems: projectItem[] = [
    {
        type: "full stack web application",
        name: "ucalgary parking",
        src: `${ PROJECT_PATH }/ucalgary_parking.png`,
        description: `
            A proof-of-concept web application, aimed at transforming UCalgary's parking services by \ 
            unifying them into one application. Users can easily manage \
            parking tickets, parking permits and an innovative parking reservation feature. \
            Administrative users can issue tickets, notifications, and revoke permits.
            `,
        repoLink: "https://github.com/Justin-Chua/UCalgary-Parking-Application",
        tags: [
            "Python",
            "JavaScript",
            "CSS3",
            "Django",
            "React.js",
            "Bootstrap",
            "Git",
            "MySQL"
        ]
    },
    {
        type: "full stack web application",
        name: "make mobile great again",
        src: `${ PROJECT_PATH }/mmga.png`,
        description: `
            A web application designed for indie mobile game developers to showcase early versions of \
            their games, connect with gamers, and grow their community. Users can explore and view a \
            diverse variety of games, add their own games, add friends, and participate in discussions.
            `,
        repoLink: "https://github.com/Justin-Chua/MMGA",
        tags: [
            "JavaScript",
            "CSS3",
            "Vue.js",
            "Node.js",
            "Git",
            "MySQL",
            "Docker"
        ]
    },
    {
        type: "front-end mobile application",
        name: "cooking buddy",
        src: `${ PROJECT_PATH }/cooking_buddy.png`,
        description: `
            A front-end web application crafted as an intuitive platform for recipe learning and sharing. \
            The application prioritizes accessibility, envisioning features such as personalized recipe recommendations, \
            comprehensive recipe pages, ingredient substitutions, recipe sharing, user feedback, and notifications.
            `,
        repoLink: "https://github.com/Justin-Chua/Cooking-Buddy",
        tags: [
            "C#",
            "HTML5",
            "CSS3",
            "Blazor",
            ".NET",
            "Git"
        ]
    },
    {
        type: "full stack web application (in progress)",
        name: "nba trade finder",
        src: `${ PROJECT_PATH }/trade_finder.png`,
        description: `
            A web application designed to replicate the NBA Trade Finder feature in NBA 2K video games. \
            NBA enthusiasts are able to simulate trades involving their favorite teams and players, \
            complete with constraints akin to the official regulations in the NBA.
            `,
        tags: [
            "Python",
            "TypeScript",
            "Django",
            "Next.js",
            "ChakraUI",
            "Git",
            "MongoDB"
        ]
        
    }
]
//
//
// DELETE THIS LATER
//
//
export type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};
