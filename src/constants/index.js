import { meta, shopify,jiit, starbucks, tesla,innoventure } from "../assets/images";
import {
    mysql,
    java,
    c,
    solidity,
    car,
    contact,
    css,
    estate,
    express,
    linux,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: linux,
        name: "Linux",
        type: "Operating System",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mysql,
        name: "MySql",
        type: "Database",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: solidity,
        name: "Solidity",
        type: "Blockchain",
    },
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: c,
        name: "C++",
        type: "Programming Language",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Programming Language",
    },
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // }
];

export const experiences = [
    {
        title: "Web Developer Intern",
        company_name: "Innoventure Fintech Pvt. Ltd",
        icon: innoventure,
        iconBg: "#accbe1",
        date: "June 2023 - August 2023",
        points: [
            "Developed a saloon booking website as a Web Design and Development Intern, utilizing the MERN stack",
            "Redesigned and implemented the website, incorporating features such as service booking and an employee/ admin dashboard.",
            "Demonstrated expertise in frontend development, employing React.js and Tailwind CSS for a responsive and visually appealing user interface",
            "Proficiently managed the entire project, handling both frontend and backend development using Node.js and MongoDB",
        ],
    },
    {
        title: "React Developer, Volunteer",
        company_name: "Jaypee Institute of Info. Tech.",
        icon: jiit,
        iconBg: "#fbc3bc",
        date: "March 2023 - May 2023",
        points: [
            "Led the development and execution of an online quiz application, addressing the specific request from the Head of the Department (HOD) to facilitate junior student assessments.",
            "Successfully conducted the quiz for 250 students, ensuring a flawless and error-free experience that garnered positive feedback.",
            "Due to the success of the project, the HOD requested the reuse of the application for future assessments.",
            "Implemented a unique solution to the challenge of storing quiz data remotely while keeping the quiz system disconnected from the internet, showcasing problem-solving, system design expertise.",
        ],
    },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#b7e4c7",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Salon booking app',
        description: 'Led MERN-based salon site development, introducing features and managing end-to-end development during my internship at Innoventure Fintech',
        link: 'https://64c0d70f5d9dfa3d2757cdd2--adorable-panda-bed764.netlify.app/#',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'vikasChain',
        description: 'Crafted a blockchain crowdfunding platform, using React and smart contracts, ensuring secure and transparent fundraising with MetaMask, IPFS, and AI verification.        .',
        link: 'https://preeminent-marshmallow-836026.netlify.app/',
    },
        // },

    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Foodzapp',
        description: 'Streamlining restaurant operations with QR-based access, order management, theme customization, and booking records.',
        link: 'https://github.com/2kSHIVAM/FOODZAPP',
    },
    // {
    //     iconUrl: car,
    //     theme: 'btn-back-blue',
    //     name: 'Car Finding App',
    //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    // },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'Full Stack Instagram Clone',
    //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    //     link: 'https://github.com/adrianhajdin/social_media_app',

    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Quizzy',
        description: 'Developed and executed a seamless online quiz application for 250 students, showcasing strong system design and problem-solving skills, prompting a request for future use.',
        link: 'https://github.com/2kSHIVAM/quizzy',
    }
];