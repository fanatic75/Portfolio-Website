import {project} from "../types/module";

const projects: project[] = [
    {
        key:1,
        image:{
            url:"lamp.png",
            title:"Lamp",
            height:"340px"
        },
        title:"Dyfo Lite",
        content:"Now control your lamps with a touch of your Finger",
        github:"https://play.google.com/store/apps/details?id=com.dyfolite&hl=en_IN"
    },
    {
        key: 2,
        image: {
            url: "bitchat.png",
            title: "Logo",
            height:"313px"
        },
        title: "Bit Chat",
        content: "Shy in Life? Hang out virtually and make new Friends. Anonymous Chatting Client for Our College. ",
        github:"https://bitchat.website"
    },{
        key: 3,
        image: {
            url: "blockchain.png",
            title: "Blockchain explanation",
            height:"313px"
        },
        title: "A Simple Blockchain",
        content: "A Blockchain written in java which uses SHA256 algorithm for hashing. Block Difficulty can be increased.",
        github:"https://github.com/fanatic75/Basic-Blockchain.git"
    },{
        key: 4,
        image: {
            url: "breakout.gif",
            title: "Breakout Game",
            height:"313px"
        },
        title: "Breakout",
        content: "Breakout, a game built in java when I was taking the class of Prof. Mehran Sahami. Best Teacher of my life, hands down.",
        github:"https://github.com/fanatic75/Breakout.git"
    },{
        key: 5,
        image: {
            url: "quiz.png",
            title: "Logo",
            height:"313px"
        },
        title: "Quiz App",
        content: "A simple yet elegant quiz app written in vanilla JS. ",
        github:"https://github.com/fanatic75/QuizApp.git"
    }
];

export default projects;