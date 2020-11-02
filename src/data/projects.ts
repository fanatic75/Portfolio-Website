import { project } from "../types/module";
const projects: project[] = [


    {
        key: 1,
        image: {
            url: "quiz.png",
            title: "Logo",
            height: "313px",
            backgroundSize: "contain",
            website: "https://fanatic75.github.io/QuizApp"
        },
        title: "Quiz App",
        content: "A simple yet elegant quiz app written in vanilla JS. ",
        github: "https://github.com/fanatic75/QuizApp.git"
    }, {
        key: 2,
        image: {
            url: "breakout.gif",
            title: "Breakout Game",
            height: "313px",
            backgroundSize: "contain"
        },
        title: "Breakout",
        content: "Breakout, a game built in java when I was taking the class of Prof. Mehran Sahami. Best Teacher of my life, hands down.",
        github: "https://github.com/fanatic75/Breakout.git"
    }, {
        key: 3,
        image: {
            url: "blockchain.png",
            title: "Blockchain explanation",
            height: "313px",
            backgroundSize: "cover"
        },
        title: "A Simple Blockchain",
        content: "A Blockchain written in java which uses SHA256 algorithm for hashing. Block Difficulty can be increased.",
        github: "https://github.com/fanatic75/Basic-Blockchain.git"
    }, {
        key: 4,
        image: {
            url: "layoutdesigner.gif",
            title: "Real Time Layout Designer",
            height: "313px",
            backgroundSize: "contain"
        },
        title: "Real Time Layout Designer",
        content: "A layout designer built to increase productivity and to automate the designing System.",

    }, {
        key: 5,
        image: {
            url: "bitchat.png",
            title: "Logo",
            height: "313px",
            backgroundSize: "contain",
            website: "https://bitan.herokuapp.com"
        },
        title: "Bit Chat",
        content: "Shy in Life? Hang out virtually and make new Friends. Anonymous Chatting Client for Our College. ",
        github: "https://github.com/fanatic75/BitAn"
    }, {
        key: 7,
        image: {
            url: "inventory_management_system.gif",
            title: "App",
            height: "340px",
            backgroundSize: "contain",
            website: "https://github.com/fanatic75/InventoryManagementApp"
        },
        title: "Inventory Management System",
        content: "An Inventory Management System with all the industry standards and  Admin panel built in with the App. Available for Android.",
        github: "https://github.com/fanatic75/InventoryManagementApp"
    },{
        key: 8,
        image: {
            url: "AsteroidExplorer.png",
            title: "Asteroid Explorer",
            height: "340px",
            backgroundSize: "contain",
            website: "https://nervous-mccarthy-ab869d.netlify.app/"
        },
        title: "Asteroid Explorer",
        content: "Asteroid Explorer is a web app using NASA Asteroid API",
        github: "https://github.com/fanatic75/Asteroid"

    }
];
export default projects.reverse();
