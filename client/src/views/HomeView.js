/**
 * This represents the slideshow homepage for our app
 */
import React from "react";
import { UncontrolledCarousel } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import one from "./one.jpg";
import two from "./two.jpg";
import three from "./three.jpg";

const items = [
  {
    src: one,
    caption: ""
  },
  {
    src: two,
    caption: ""
  },
  {
    src: three,
    caption: ""
  }
];

const HomeView = () => <UncontrolledCarousel captionText={items.caption} items={items} />;

export default HomeView;
