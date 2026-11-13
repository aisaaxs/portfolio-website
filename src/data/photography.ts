import type { Photo } from "@/src/types/content";
import buildingsInContrast from "@/public/images/photography/buildings-in-contrast.jpg";
import burningDusk from "@/public/images/photography/burning-dusk.jpg";
import cat from "@/public/images/photography/cat.jpg";
import chameleon from "@/public/images/photography/chameleon.jpg";
import colorfulSky from "@/public/images/photography/colorful-sky.jpg";
import blueMustang from "@/public/images/photography/blue-mustang.jpg";
import spider from "@/public/images/photography/spider.jpg";
import vanDowntownGlow from "@/public/images/photography/van-downtown-glow.jpg";
import whytecliffe from "@/public/images/photography/whytecliffe.jpg";

// Each record supplies the image and hover-caption metadata for the gallery.
export const photographyData: Photo[] = [
        {
        title: "Old Meets New",
        description: "A century of architecture stacked in one frame. The old hotel holds its ground while glass towers climb past it — Vancouver refusing to pick a decade.",
        location: "Vancouver, BC, Canada",
        image: buildingsInContrast,
        imageAlt: "Historic hotel framed against modern glass towers in downtown Vancouver"
    },
    {
        title: "Kelowna Sunset Commute",
        description: "Everyone's rushing somewhere and nobody's looking up. The sky was on fire and the mountains were right there.",
        location: "Kelowna, BC, Canada",
        image: burningDusk,
        imageAlt: "Cars commuting beneath a vivid orange sunset and dark mountain silhouettes"
    },
    {
        title: "Green-Eyed Calico",
        description: "She looked at me the way cats always do — like I was the guest and she was tolerating it. Those eyes though.",
        location: "Kelowna, BC, Canada",
        image: cat,
        imageAlt: "Close portrait of a calico cat with green eyes"
    },
    {
        title: "Veiled Chameleon On A Branch",
        description: "Every scale catches the light differently. Sat perfectly still for exactly as long as it wanted to, then didn't.",
        location: "Vancouver, BC, Canada",
        image: chameleon,
        imageAlt: "Green veiled chameleon resting on a branch"
    },
    {
        title: "Vibrant Sky Over Brick Walls",
        description: "Shot straight up from a narrow lane. The sky was doing something absurd with colour and the buildings just framed it.",
        location: "Gurugram, HR, India",
        image: colorfulSky,
        imageAlt: "Colorful evening sky framed by tall brick walls"
    },
    {
        title: "Blue Mustang, Golden Hour",
        description: "Stumbled across this in a parking lot. Low sun, lens flare, perfect light — some shots just hand themselves to you.",
        location: "Kelowna, BC, Canada",
        image: blueMustang,
        imageAlt: "Blue Ford Mustang photographed in warm golden-hour light"
    },
    {
        title: "Spider Above The Highway",
        description: "Spotted this at night with a streetlight behind it. The web caught everything — light, shadow, geometry.",
        location: "Kelowna, BC, Canada",
        image: spider,
        imageAlt: "Spider and web silhouetted against a streetlight at night"
    },
    {
        title: "Vancouver Dusk Street",
        description: "That hour just after sunset when the city lights up from inside. Everything wet, everything glowing. Vancouver at its most cinematic.",
        location: "Vancouver, BC, Canada",
        image: vanDowntownGlow,
        imageAlt: "Wet downtown Vancouver street glowing with city lights after sunset"
    },
    {
        title: "Whytecliffe Island At Sunset",
        description: "Tiny people on top of that rock, sky melting into peach and blue behind them. The whole scene felt borrowed from somewhere quieter.",
        location: "West Vancouver, BC, Canada",
        image: whytecliffe,
        imageAlt: "People standing on Whytecliffe Island beneath a peach and blue sunset"
    }
];
