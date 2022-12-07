import React from "react";
import './Contents.css';
import { contents } from './categories';
function ContentsMain() {
    return(
        // <div className="contents__main">
            <ul className="contents__main-list">
                {contents.map((content, index) => {
                    return <li key={index} className="contents__main-list-el" style={{gridRow: content.style && `${content.style.rowStart}/${content.style.rowEnd}`, gridColumn: content.style && `${content.style.columnStart}/${content.style.columnEnd}`}}>
                        <div className="contents__main-list-el-text" style={{textAlign: content.style && content.style.order && "center"}}>
                            <p className="contents__main-list-el-text-p contents__main-list-el-text-p_large-size">{content.page}</p>
                            <p className="contents__main-list-el-text-p">{content.product}</p>
                        </div>

                        {/* <p>{content.designer}</p> */}
                        <img style={{order: content.style && content.style.order}} className="contents__main-list-el-img" src={content.img}></img>
                    </li>
                })}
            </ul>
        // </div>
    )
}

export default ContentsMain;