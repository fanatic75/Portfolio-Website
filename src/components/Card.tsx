import React, { CSSProperties } from "react";
import useMedia from "use-media";
import { UrlObjectCommon } from "url";


const Card: React.FC<cardProps> = (props: cardProps) => {
    const isWide: boolean = useMedia({ minWidth: 700 });
    async function shareMenu(): Promise<void> {
        try {
            //@ts-ignore
            if (navigator.share) {
                //@ts-ignore
                await navigator.share({
                    title: props.title,
                    text: "Check out " + props.title,
                    url: props.github.href,
                })
            }

        }
        catch (err) {
            console.error(err);
        }
    }
    return (
        <div className="card-root">
            <button type="button" tabIndex={0} className={["card-action-area-root", "base-button-root", !isWide ? "ripple" : ""].join(" ")}>
                <div style={props.image.url} title={props.image.title} className="card-media-root" />
                <div className="card-content-root">
                    <h2>{props.title}</h2>
                    <p>{props.content}</p>
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
                    <button onClick={() => window.location.href = props.github.href} type="button" tabIndex={0} className={["card-action-button", "base-button-root", !isWide ? "ripple" : ""].join(" ")}>
                        LEARN MORE
                </button>
                }
            </div>
        </div>

    )
}
export default Card;

type cardProps = {
    image: {
        url: CSSProperties,
        title: string
    },
    title: string,
    content: string,
    github: UrlObjectCommon
}