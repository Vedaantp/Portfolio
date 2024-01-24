export const Bio = {
    name: "Vedaant Patel",
    roles: [
        "Developer",
        "Software Engineer",
        "Student",
        "Programmer",
    ],
    description:
        "I am a fourth-year college student studying Computer Science at University of California, Irvine. I am eager to tackle any challenge that comes my way. I am excited to demonstrate the knowledge I have gained from academic and work experiences. I am passionate about programming, music, food, hiking, and video-games.",
    github: "https://github.com/Vedaantp",
    resume: "https://drive.google.com/file/d/1DfgP8dR7YXebaDVWATheWUKaZejFUWz2/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/vedaant-patel/",
    instagram: "https://www.instagram.com/vedaant_patel/",
};

export const skills = [
    {
        title: "Programming Languages",
        skills: [
            {
                name: "Python",
                image:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
            },
            {
                name: "C++",
                image:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png",
            },
            {
                name: "C",
                image:
                    "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
            },
            {
                name: "Java",
                image:
                    "https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png",
            },
            {
                name: "JavaScript",
                image:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
            },
            {
                name: "HTML",
                image:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png",
            },
            {
                name: "CSS",
                image:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
            },
        ],
    },
    {
        title: "Frame Works",
        skills: [
            {
                name: "React",
                image:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
            },
            {
                name: "React Native",
                image:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
            },
            {
                name: "Bootstrap",
                image:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
            },
        ],
    },
    {
        title: "Development Tools",
        skills: [
            {
                name: "VSCode",
                image:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
            },
            {
                name: "Git",
                image:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png",
            },
            {
                name: "IntelliJ",
                image:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/2048px-IntelliJ_IDEA_Icon.svg.png",
            },
            {
                name: "Eclipse",
                image:
                    "https://cdn.freebiesupply.com/logos/large/2x/eclipse-11-logo-png-transparent.png",
            },
            {
                name: "Docker",
                image:
                    "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png",
            },
            {
                name: "MuleSoft",
                image:
                    "https://cdn.icon-icons.com/icons2/2699/PNG/512/mulesoft_logo_icon_170933.png",
            },
            {
                name: "AnyPoint Studio",
                image:
                    "https://static.wixstatic.com/media/5e025b_82d62f47913c418e82a5d346497cadd7~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
            },
            {
                name: "Jenkins",
                image:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1483px-Jenkins_logo.svg.png",
            },
        ],
    },
];

export const experiences = [
    {
        id: 0,
        img: "https://photos.prnewswire.com/prnfull/20130731/LA56061LOGO?max=200",
        role: "Developer Intern",
        company: "Farmers Insurance",
        date: "June 2023 - August 2023",
        desc: "This role consisted of responsibilities such as developing and maintaining APIs, consulting with the teams to create a plan for future projects that would increase productivity, and programming automated tasks to reduce the amount of manual labor required.",
        skills: [
            "Java",
            "Python",
            "Bash Scripting",
            "APIs",
            "Automation",
            "MuleSoft",
            "Anypoint Studio",
        ],
    },
];

export const education = [
    {
        id: 0,
        img: "https://upload.wikimedia.org/wikipedia/en/0/0e/University_of_California%2C_Irvine_seal.svg",
        school: "University of California, Irvine",
        date: "Sept 2022 - June 2024",
        degree: "Bachelor of Science - Computer Science",
    },
    {
        id: 1,
        img: "https://greatcollegesprogram.com/wp-content/themes/chronicle/images/college_images/SantiagoCanyonCollege/logo/logo.png",
        school: "Santiago Canyon College",
        date: "Aug 2020 - Sept 2022",
        degree: "Computer Science",
    },
];

export const projects = [
    {
        id: 0,
        title: "Synq'd Mobile App",
        description:
            "Developed a collaborative music app, using React Native, allowing users to request and vote on songs that get automatically added to the host’s Spotify queue. Integrated Spotify Web API to provide users real time playback, queue information, and support for automatic queueing functionality. Created a secure Node JS server to manage session and voting functionalities with little overhead.",
        tags: ["JavaScript", "React Native", "Node JS"],
        link: "https://apps.apple.com/us/app/synqd/id6476221500",
    },
    {
        id: 1,
        title: "Memory Allocator Simulator",
        description:
            "Developed a best-fit memory allocator in C with a reduced memory fragmentation, efficient resource utilization, and high performance. Implemented block coalescing to reduce fragmentation and allows for users flexibility at allocation.",
        tags: ["C"],
        link: "https://github.com/Vedaantp/MemoryAllocatorSimulator",
    },
    {
        id: 2,
        title: "MineSweeper Solver",
        description:
            "Developed an algorithm in C++ that can solve minesweeper problems with an accuracy of 80%. Implemented DFS, backtracking, and heuristics to efficiently solve worlds in under 3 minutes.",
        tags: ["C++", "Git"],
        link: "https://github.com/Vedaantp/MinesweeperSolver",
    },
    {
        id: 3,
        title: "Graph Coloring Game",
        description:
            "Developed a graph coloring game that allows the user to adjust the graph and nodes to their liking. The objective of the game is to color the graph using the least amount of colors possible, however, a node cannot be the same color as it's neighbor. User can check if their answer is correct and/or see how the algorithm finds the answer.",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://vedaantp.github.io/GraphColoringGame/",
    },
    {
        id: 4,
        title: "Pong Game",
        description:
            "Developed a 2D ping pong game using the Unity game engine.",
        tags: ["C#", "Unity"],
        link: "https://vedaantp.github.io/PongGame/",
    },
];