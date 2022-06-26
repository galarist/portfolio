import React from "react";  
import Frontendmentor from "./projects/Frontendmentor";
import Medhx from "./projects/medhx";
import Portfolio from "./projects/Portfolio";
import Tea from "./projects/Tea";
import TodoPick from "./projects/Todopick";
export default function Projects () {
    return (
        <>
            <article>
                <header>Project(s)</header>
                <div className="grid">
                    <div>
                        <Portfolio/>
                    </div>
                    <div>
                        <TodoPick/>
                    </div>

                    <div>
                        <Tea/>
                    </div>
                </div>
                <div className="grid">
                    <div>
                        <Medhx/>
                    </div>
                    <div>
                        <Frontendmentor/>
                    </div>
                </div>
            </article>
        </>
    )
}