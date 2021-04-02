import React from 'react'
import Common from "./Common";
// import { NavLink } from 'react-router-dom';
import web from "../src/images/img1.jpg";

const Home = () => {
    return (
        <>
        <Common name="Grow your bsiness with" imgsrc={web} visit="./service" btname="Get started" />
        </>
    );
}

export default Home;
