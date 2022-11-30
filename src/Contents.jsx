import React from "react";
import './Contents.css';
import ContentsSide from "./ContentsSide";
import ContentsMain from "./ContentsMain";
function Contents() {
    return (
        <section className="contents">
            <ContentsSide />
            <ContentsMain />
        </section>
        
    )
};

export default Contents;