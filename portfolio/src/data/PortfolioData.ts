export const introduction: string = `
    Thanks for checking out my portfolio!  
    I'm a Computer Science grad from the University of Calgary,  
    with a solid background in full-stack development and data analysis.
    Right now, I'm working as a Data Engineer for OPIS.
    Feel free to keep scrolling if you want to learn more!
    `

interface navItem {
  label: string
  href: string
}

export const navItems: navItem[] = [
  { label: 'home', href: '#home' },
  { label: 'about', href: '#about' },
  { label: 'skills', href: '#skills' },
  { label: 'projects', href: '#projects' },
  { label: 'resume', href: '#resume' },
  { label: 'contact', href: '#contact' }
]

interface aboutItem {
  topic: string
  src: string
  description: string
};

const ABOUT_PATH = '/resources/about'

export const aboutItems: aboutItem[] = [
  {
    topic: 'programming 💻',
    src: `${ABOUT_PATH}/programming.jpg`,
    description: `
            My journey into programming started in my first year of university, 
            with an intro course in Java that taught me the basics. I'll never forget the horrors of learning
            recursion for the first time - wondering if I would ever get the hang of it.
            Fast forward to today, and I'm officially a Computer Science graduate! Along the way, I
            developed a strong interest in full-stack development - which I'm super excited to keep learning and building on.
            `
  },
  {
    topic: 'family 👨‍👩‍👦‍👦',
    src: `${ABOUT_PATH}/family.jpg`,
    description: `
            Nothing is more important to me than my family, and it's no exaggeration to say that they've
            shaped me into the person I am today. I feel incredibly blessed to be so close to them after 
            all these years. The wisdom they've shared to me over the years still 
            guides me in my daily life. Wherever I am, this influence is what drives me to pay forward 
            the same level of respect and kindness that I've been fortunate enough to receive from them.
            `
  },
  {
    topic: 'travelling ✈️',
    src: `${ABOUT_PATH}/zipline.jpg`,
    description: `
            I'm a lifelong learner by nature, which makes me a fanatic for 
            travelling! Whether it's participating in local festivities, visiting historical 
            landmarks, or strolling through the city to admire the architecture. I love discovering 
            what the world has to offer and how we've progressed into modern society. On that note, here's a picture
            of me on a zipline during a family trip to Mexico last year - I promise I wasn't scared 😂.
            `
  },
  {
    topic: 'nba 🏀',
    src: `${ABOUT_PATH}/rockets.jpg`,
    description: `
            I don't really play basketball that much, but I've always loved watching NBA games. 
            Growing up as a Rockets fan in a family full of Lakers fans definitely wasn't easy 😅. 
            But let's just say that this is one of the reasons that I developed such thick skin. 
            The Rockets are looking good this year though, with Alpy as a candidate for the All-Star team. 
            Hopefully we can make it past the first round in the playoffs. Go Rockets! 🚀
            `
  },
  {
    topic: 'video games 🎮',
    src: `${ABOUT_PATH}/witcher.jpg`,
    description: `
            Video games have been a part of my life for as long as I can remember. 
            My favorite genre has to be single player, open-world RPGs with intricate world design, 
            complex characters and a captivating story. Some of my top picks include The Witcher 3, 
            Red Dead Redemption 2, the Uncharted series and Horizon series. More recently, I've
            been playing a ton of Marvel Rivals with my friends. BEHOLD THE GOD OF THUNDER! ⚡️🔨
            `
  },
  {
    topic: 'typing ⌨️',
    src: `${ABOUT_PATH}/typing.jpg`,
    description: `
            A fun fact about me is that I can type as fast as ~120WPM with punctuation. I randomly discovered that I
            could do this years ago, but it's actually been a useful skill to have as a developer. It's helped me work 
            efficiently when writing countless lines of code or documentation, so I'm pretty proud of it 😎.
            If this whole software thing doesn't pan out, maybe I have a backup career as a professional
            typist... just kidding.
            `
  }
]

interface Technology {
  name: string
  src: string
}

interface skillItem {
  category: string
  technologies: Technology[]
}

const ICON_PATH = '/resources/icons'

export const skillsItems: skillItem[] = [
  {
    category: 'languages',
    technologies: [
      { name: 'Python', src: `${ICON_PATH}/languages/python_logo.png` },
      { name: 'JavaScript', src: `${ICON_PATH}/languages/javascript_logo.png` },
      { name: 'TypeScript', src: `${ICON_PATH}/languages/typescript_logo.png` },
      { name: 'HTML5', src: `${ICON_PATH}/languages/html5_logo.png` },
      { name: 'CSS3', src: `${ICON_PATH}/languages/css3_logo.png` },
      { name: 'Java', src: `${ICON_PATH}/languages/java_logo.png` }
    ]
  },
  {
    category: 'frameworks',
    technologies: [
      { name: 'Django', src: `${ICON_PATH}/frameworks/django_logo.png` },
      { name: 'React.js', src: `${ICON_PATH}/frameworks/react_logo.png` },
      { name: 'Vue.js', src: `${ICON_PATH}/frameworks/vue_logo.png` },
      { name: 'Node.js', src: `${ICON_PATH}/frameworks/node_logo.png` },
      { name: 'Express.js', src: `${ICON_PATH}/frameworks/express_logo.png` },
      { name: 'Next.js', src: `${ICON_PATH}/frameworks/next_logo.png` },
      { name: 'Bootstrap', src: `${ICON_PATH}/frameworks/bootstrap_logo.png` },
      { name: 'Tailwind CSS', src: `${ICON_PATH}/frameworks/tailwindcss_logo.png` },
      { name: 'ChakraUI', src: `${ICON_PATH}/frameworks/chakra_logo.png` }
    ]
  },
  {
    category: 'dev tools',
    technologies: [
      { name: 'Git', src: `${ICON_PATH}/tools/git_logo.png` },
      { name: 'MySQL', src: `${ICON_PATH}/tools/mysql_logo.png` },
      { name: 'MongoDB', src: `${ICON_PATH}/tools/mongo_logo.png` },
      { name: 'Docker', src: `${ICON_PATH}/tools/docker_logo.png` }
    ]
  }
]

interface resumeItem {
  type: string
  title: string
  company: string
  location: string
  date: string
  description?: string
}

export const resumeItems: resumeItem[] = [
  {
    type: 'work',
    title: 'Data Engineer',
    company: 'OPIS, A Dow Jones Company',
    location: 'Toronto, ON - Remote',
    date: 'April 2025 - Present'
  },
  {
    type: 'education',
    title: 'Bachelor of Science in Computer Science',
    company: 'University of Calgary',
    location: 'Calgary, AB',
    date: 'June 2024'
  },
  {
    type: 'work',
    title: 'Meat Clerk',
    company: 'Sobeys Inc.',
    location: 'Calgary, AB',
    date: 'June 2023 - January 2024',
    description: `
            Provided exceptional customer service at the service case, managed inventory  
            of meat products, and efficiently handled department closing procedures.
            `
  },
  {
    type: 'work',
    title: 'Barista',
    company: 'Snowcapz Cafe',
    location: 'Calgary, AB',
    date: 'May 2022 - August 2022',
    description: `
            Prepared high-quality desserts and baked goods with meticulous attention to detail. 
            Consistently adapted to evolving work procedures and the addition of new menu items.
            `
  },
  {
    type: 'work',
    title: 'Crew Member',
    company: 'Tim Hortons',
    location: 'Lethbridge, AB',
    date: 'July 2018 - August 2019',
    description: `
            Successfully processed orders at both the drive-thru and counter in a fast-paced, 
            team-oriented environment. Leveraged strong communication and collaboration skills 
            to ensure smooth operations while maintaining efficiency.
            `
  }
]

interface projectItem {
  type: string
  name: string
  src: string
  description: string
  repoLink?: string
  demoLink?: string
  tags: string[]
}

const PROJECT_PATH = '/resources/projects'

export const projectItems: projectItem[] = [
  {
    type: 'full stack web application',
    name: 'nba trade finder v1',
    src: `${PROJECT_PATH}/trade_finder.png`,
    description: `
            A web application designed to replicate the NBA Trade Finder feature in NBA 2K video games. \
            NBA enthusiasts are able to simulate trades involving two different teams and players, \
            complete with salary matching restrictions used in the NBA.
            `,
    repoLink: 'https://github.com/Justin-Chua/NBA-Trade-Finder',
    tags: [
      'Python',
      'JavaScript',
      'React.js',
      'Node.js',
      'Express.js',
      'ChakraUI',
      'Git',
      'MongoDB',
      'Docker'
    ]
  },
  {
    type: 'full stack web application',
    name: 'ucalgary parking',
    src: `${PROJECT_PATH}/ucalgary_parking.png`,
    description: `
            A proof-of-concept web application, aimed at transforming UCalgary's parking services by 
            unifying them into one application. Users can easily manage 
            parking tickets, parking permits and an innovative parking reservation feature. 
            Administrative users can issue tickets, notifications, and revoke permits.
            `,
    repoLink: 'https://github.com/Justin-Chua/UCalgary-Parking-Application',
    demoLink: 'https://ucalgary-parking.vercel.app',
    tags: [
      'Python',
      'JavaScript',
      'CSS3',
      'Django',
      'React.js',
      'Bootstrap',
      'Git',
      'MySQL'
    ]
  },
  {
    type: 'full stack web application',
    name: 'make mobile great again',
    src: `${PROJECT_PATH}/mmga.png`,
    description: `
            A web application designed for indie mobile game developers to showcase early versions of 
            their games, connect with gamers, and grow their community. Users can explore and view a 
            diverse variety of games, add their own games, add friends, and participate in discussions.
            `,
    repoLink: 'https://github.com/Justin-Chua/MMGA',
    demoLink: 'https://makemobilegreatagain.vercel.app',
    tags: [
      'JavaScript',
      'CSS3',
      'Vue.js',
      'Node.js',
      'Express.js',
      'Git',
      'MySQL',
      'Docker'
    ]
  },
  {
    type: 'front end mobile application',
    name: 'cooking buddy',
    src: `${PROJECT_PATH}/cooking_buddy.png`,
    description: `
            A front-end web application crafted as an intuitive platform for recipe learning and sharing. 
            The application prioritizes accessibility, envisioning features such as personalized recipe recommendations, 
            comprehensive recipe pages, ingredient substitutions, recipe sharing, user feedback, and notifications.
            `,
    repoLink: 'https://github.com/Justin-Chua/Cooking-Buddy',
    tags: [
      'C#',
      'HTML5',
      'CSS3',
      'Blazor',
      '.NET',
      'Git'
    ]
  },
  // {
  //   type: 'front end web application (in progress)',
  //   name: 'genrefy',
  //   src: `${PROJECT_PATH}/genrefy.png`,
  //   description: `
  //           A simple web application that tags each song in a Spotify playlist entered by the user
  //           with appropriate genres. This intuitive tool enables users to categorize their music,
  //           filter songs by genre, and create tailored, genre-specific playlists.
  //         `,
  //   tags: [
  //     'TypeScript',
  //     'Next.js',
  //     'NextUI',
  //     'Tailwind CSS',
  //     'Git'
  //   ]
  // }
]
