import React from "react";

import { categories } from './categories';
import './Contents.css';

function ContentsSide() {

    return (
        <div className="contents__sidebar">
            <h3>ISSUE #63</h3>
            <ul className="contents__sidebar-list">
                {categories.map((category, index) => {
                    return <li className="contents__sidebar-list-element" key={index}><p>{category.name}</p></li>
                })}
            </ul>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%"}}>
                <img style={{maxWidth: 75}} src="https://michaelmccann.io/wp-content/uploads/2019/09/dxuniverse.png" alt="" />
                <nav>
                    <ul style={{padding: 0, listStyle: "none"}}>
                        <li>О Нас</li>
                        <li>Наша миссия</li>
                        <li>Наша цель</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default ContentsSide;