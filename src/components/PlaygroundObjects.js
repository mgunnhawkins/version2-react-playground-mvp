import React from 'react';

const tillesMapLink = "https://www.google.com/maps/place/Tilles+Park/@38.6004652,-90.2916472,17z/data=!3m1!4b1!4m5!3m4!1s0x87d8b59aa67d372b:0xe6e780b7fe23bb17!8m2!3d38.6004652!4d-90.2894532";

const creveCouerLakeLink = "https://www.google.com/maps/place/Creve+Coeur+Lake/@38.7154818,-90.4938074,15z/data=!3m1!4b1!4m5!3m4!1s0x87df2dca7a3cd231:0xbbbdc18bde2553a3!8m2!3d38.7161801!4d-90.4844505";

const deerCreekParkLink= "https://goo.gl/maps/urcHkYBxf8v3CTqR9";



const playgroundObjects = [
    {
        playgroundImg: "/images/tillesplayground.jpg",
        name: "Tilles Park",
        location: "Hampton and Fyler Avenues",
        neighborhood: "North Hampton neighborhood in St. Louis, MO",
        listItemOne: "Shady playground area",
        listItemTwo: "Splashpad in the summer",
        listItemThree: "Bathrooms nearby",
        linkText: "Get directions to Tilles Park",
        link: {tillesMapLink}
    },
    {
        playgroundImg: "/images/cclakeupper.jpg",
        name: "Creve Couer Lake Memorial Park",
        location: "13725 Marine Ave.",
        neighborhood: "Creve Couer, MO",
        listItemOne: "Sprawling lake with water activities",
        listItemTwo: "Ropes course for older children",
        listItemThree: "Four playgrounds on-site",
        linkText: "Get directions to Creve Couer Lake",
        link: {creveCouerLakeLink}
    }, 
    {
        playgroundImg: "/images/rocketplay3.jpg",
        name: "Deer Creek Park Playground",
        location: "3200 Laclede Station Rd.",
        neighborhood: "St. Louis County/ Maplewood",
        listItemOne: 'Known as "Rocket Playground"',
        listItemTwo: "Ample ladders and climbing equipment",
        listItemThree: "Geared towards older children.",
        linkText: "Get directions to Deer Creek Park",
        link: {deerCreekParkLink}
    }
];



export default playgroundObjects;