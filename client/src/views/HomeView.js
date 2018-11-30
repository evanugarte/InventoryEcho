import React from "react";
import { UncontrolledCarousel } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import one from "./one.jpg";
import two from "./two.jpg";
import three from "./three.jpg";

const items = [
    {
        src: one,
        caption: "Slide 1",
        header: "Team 08 - CPME131"
    },
    {
        src: two,
        caption: "Slide 2",
        header: "Team 08 - CPME131"
    },
    {
        src: three,
        caption: "Slide 3",
        header: "Team 08 - CPME131"
    }
];

const HomeView = () => <UncontrolledCarousel items={items} />;

export default HomeView;
