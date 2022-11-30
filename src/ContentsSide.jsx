import React from "react";
import { categories } from './categories';
function ContentsSide() {

    return (
        <div className="contents__sidebar">
            <h3>ISSUE #63</h3>
            <ul className="contacts__sidebar-list">
                {categories.map((category, index) => {
                    return <li className="contacts__sidebar-list-element" key={index}>{category}</li>
                })}
            </ul>
        </div>
    )
}

export default ContentsSide;