import { useState } from "react";

function ImgMessageType({ src, imgClass, loadingClass }) {

    const [loaded, setLoaded] = useState(false);

    return (
        <img className={imgClass} style={{opacity: loaded ? 1 : 0}} onLoad={(() => setLoaded(true))} src={src} alt="" />
    )
}

export default ImgMessageType;