import {project} from "../types/module";
const projects: project[] = [
    {
        key:1,
        image:{
            url:"lamp.png",
            title:"Lamp",
            height:"340px",
            backgroundSize:"contain",
            website:"https://play.google.com/store/apps/details?id=com.dyfolite&hl=en_IN"

        },
        title:"Dyfo Lite",
        content:"Now control your lamps with a touch of your Finger"
    },
    {
        key: 2,
        image: {
            url: "bitchat.png",
            title: "Logo",
            height:"313px",
            backgroundSize:"contain",
            website:"https://bitchat.website"
        },
        title: "Bit Chat",
        content: "Shy in Life? Hang out virtually and make new Friends. Anonymous Chatting Client for Our College. ",
        github:"https://github.com/fanatic75/BitAn"
    },
    {
        key: 3,
        image: {
            url: "layoutdesigner.gif",
            title: "Real Time Layout Designer",
            height:"313px",
            backgroundSize:"contain"
        },
        title: "Real Time Layout Designer",
        content: "A layout designer built to increase productivity and to automate the designing System.",
        
    },{
        key: 4,
        image: {
            url: "blockchain.png",
            title: "Blockchain explanation",
            height:"313px",
            backgroundSize:"cover"
        },
        title: "A Simple Blockchain",
        content: "A Blockchain written in java which uses SHA256 algorithm for hashing. Block Difficulty can be increased.",
        github:"https://github.com/fanatic75/Basic-Blockchain.git"
    },{
        key: 5,
        image: {
            url: "breakout.gif",
            title: "Breakout Game",
            height:"313px",
            backgroundSize : "contain"
        },
        title: "Breakout",
        content: "Breakout, a game built in java when I was taking the class of Prof. Mehran Sahami. Best Teacher of my life, hands down.",
        github:"https://github.com/fanatic75/Breakout.git"
    },{
        key: 6,
        image: {
            url: "quiz.png",
            title: "Logo",
            height:"313px",
            backgroundSize:"contain",
            website:"https://fanatic75.github.io/QuizApp"
        },
        title: "Quiz App",
        content: "A simple yet elegant quiz app written in vanilla JS. ",
        github:"https://github.com/fanatic75/QuizApp.git"
    }
];
export default projects;