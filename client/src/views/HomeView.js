import React from "react";
import { UncontrolledCarousel } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import one from "./one.jpg";
import two from "./two.jpg";
import three from "./three.jpg";

const items = [
    {
        src: one,
    },
    {
        src: two,
    },
    {
        src: three,
    }
];

const HomeView = () => <UncontrolledCarousel items={items} />;

export default HomeView;
