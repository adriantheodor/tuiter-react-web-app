import React from "react";
import TuitSummaryList from "../tuits";

import "./index.css"
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return (
        <div>
            <WhatsHappening/>
            <TuitSummaryList/>
        </div>
    );
};
export default HomeComponent;