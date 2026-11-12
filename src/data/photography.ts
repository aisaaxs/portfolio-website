import { photographyInterface } from "@/src/shared/interfaces";
import buildingsInContrast from "@/public/images/photography/buildings-in-contrast.jpg";
import burningDusk from "@/public/images/photography/burning-dusk.jpg";
import cat from "@/public/images/photography/cat.jpg";
import chameleon from "@/public/images/photography/chameleon.jpg";
import colorfulSky from "@/public/images/photography/colorful-sky.jpg";
import blueMustang from "@/public/images/photography/blue-mustang.jpg";
import spider from "@/public/images/photography/spider.jpg";
import vanDowntownGlow from "@/public/images/photography/van-downtown-glow.jpg";
import whytecliffe from "@/public/images/photography/whytecliffe.jpg";

export const photographyData: photographyInterface[] = [
        {
        title: "Old Meets New",
        description: "A century of architecture stacked in one frame. The old hotel holds its ground while glass towers climb past it — Vancouver refusing to pick a decade.",
        location: "Vancouver, BC, Canada",
        image: buildingsInContrast
    },
    {
        title: "Kelowna Sunset Commute",
        description: "Everyone's rushing somewhere and nobody's looking up. The sky was on fire and the mountains were right there.",
        location: "Kelowna, BC, Canada",
        image: burningDusk
    },
    {
        title: "Green-Eyed Calico",
        description: "She looked at me the way cats always do — like I was the guest and she was tolerating it. Those eyes though.",
        location: "Kelowna, BC, Canada",
        image: cat
    },
    {
        title: "Veiled Chameleon On A Branch",
        description: "Every scale catches the light differently. Sat perfectly still for exactly as long as it wanted to, then didn't.",
        location: "Vancouver, BC, Canada",
        image: chameleon
    },
    {
        title: "Vibrant Sky Over Brick Walls",
        description: "Shot straight up from a narrow lane. The sky was doing something absurd with colour and the buildings just framed it.",
        location: "Gurugram, HR, India",
        image: colorfulSky
    },
    {
        title: "Blue Mustang, Golden Hour",
        description: "Stumbled across this in a parking lot. Low sun, lens flare, perfect light — some shots just hand themselves to you.",
        location: "Kelowna, BC, Canada",
        image: blueMustang
    },
    {
        title: "Spider Above The Highway",
        description: "Spotted this at night with a streetlight behind it. The web caught everything — light, shadow, geometry.",
        location: "Kelowna, BC, Canada",
        image: spider
    },
    {
        title: "Vancouver Dusk Street",
        description: "That hour just after sunset when the city lights up from inside. Everything wet, everything glowing. Vancouver at its most cinematic.",
        location: "Vancouver, BC, Canada",
        image: vanDowntownGlow
    },
    {
        title: "Whytecliffe Island At Sunset",
        description: "Tiny people on top of that rock, sky melting into peach and blue behind them. The whole scene felt borrowed from somewhere quieter.",
        location: "West Vancouver, BC, Canada",
        image: whytecliffe
    }
];