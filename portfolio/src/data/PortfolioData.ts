export const introduction: string = `Thanks for checking out my website! \ 
                                    I'm a recent computer science graduate from the University of Calgary, \ 
                                    with a strong passion for and expertise in developing full-stack web applications. \
                                    To find out more about me, feel free to keep scrolling down!`;

// Items with a href marked as '#' have not been completed
export const navItems: { label: string ; href: string }[] = [
    { label: "home", href: "#home-section" },
    { label: "about", href: "#" },
    { label: "skills", href: "#skills-section" },
    { label: "projects", href: "#" },
    { label: "resume", href: "#" },
    { label: "contact", href: "#" }
];

const ICON_PATH = "/resources/icons";

export const skillsItems: { category: string ; technologies: { name: string ; src: string }[] }[] = [
    {   category: "languages", 
        technologies: [
            { name: "Python", src: `${ ICON_PATH }/languages/python_logo.png` },
            { name: "JavaScript", src: `${ ICON_PATH }/languages/javascript_logo.png` },
            { name: "HTML5", src: `${ ICON_PATH }/languages/html5_logo.png` },
            { name: "CSS3", src: `${ ICON_PATH }/languages/css3_logo.png` },
            { name: "Java", src: `${ ICON_PATH }/languages/java_logo.png` },
            { name: "TypeScript", src: `${ ICON_PATH }/languages/typescript_logo.png` }
        ]
    },
    {   category: "frameworks",
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
    {   category: "dev tools",
        technologies: [
            { name: "Git", src: `${ ICON_PATH }/tools/git_logo.png` },
            { name: "MySQL", src: `${ ICON_PATH }/tools/mysql_logo.png` },
            { name: "Docker", src: `${ ICON_PATH }/tools/docker_logo.png` }
        ]
    }
]
