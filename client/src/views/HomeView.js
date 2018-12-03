import React from "react";
import { UncontrolledCarousel } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import one from "./one.jpg";
import two from "./two.jpg";
import three from "./three.jpg";

const items = [
    {
        src: one,
        caption: "photo1"
    },
    {
        src: two,
        caption: "photo2"
    },
    {
        src: three,
        caption: "photo3"
    }
];

const HomeView = () => <UncontrolledCarousel captionText={items.caption} items={items} />;

export default HomeView;
