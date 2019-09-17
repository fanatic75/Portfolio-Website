import React from "react";
import useMedia from "use-media";
import useDarkMode from "use-dark-mode";
import {project} from "../types/module";

const Card: React.FC<project> = (props: project) => {
    

    const isWide: boolean = useMedia({ minWidth: 700 });
    const darkMode = useDarkMode();
    async function shareMenu(): Promise<void> {
        try {
            //@ts-ignore
            if (navigator.share) {
                //@ts-ignore
                await navigator.share({
                    title: props.title,
                    text: "Check out " + props.title,
                    url: props.github&&props.github,
                })
            }

        }
        catch (err) {
            console.error(err);
        }
    }
    return (
        <div style={{backgroundColor:darkMode.value?"#1e1e1e":"#fff"}} className="card-root">
            <button type="button" tabIndex={0} onClick={() => props.github?window.location.href = props.github:""} className={["card-action-area-root", "base-button-root", !isWide ? "ripple" : ""].join(" ")}>
                <div style={props.image&&{backgroundImage:`url("/${props.image.url}")`,height:props.image.height,backgroundSize:props.image.backgroundSize?props.image.backgroundSize:"auto"}} title={props.image&&props.image.title} className="card-media-root" />
                <div className="card-content-root">
                    <h2>{props.title}</h2>
                    <p style={{marginBottom:"0px"}}>{props.content}</p>
                </div>
            </button>
            <div className="card-actions-root">
                {
                    !isWide && <button onClick={shareMenu} type="button" tabIndex={0} className={["card-action-button", "base-button-root", !isWide ? "ripple" : ""].join(" ")}>
                        SHARE
                        </button>
                }
                {
                    //@ts-ignore
                    <button onClick={() => props.github?window.location.href = props.github:""} type="button" tabIndex={0} className={["card-action-button", "base-button-root", !isWide ? "ripple" : ""].join(" ")}>
                        LEARN MORE
                </button>
                }
            </div>
        </div>

    )
}
export default Card;

