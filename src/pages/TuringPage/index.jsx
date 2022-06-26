import Clock from "../../components/clock";
import React from "react";
import Cau2 from "../../components/cau2";
import {MeMoDemo} from "../../components/useMemo";
import {useWindowSize} from "../../components/useWindowSize";


export default function TuringPage() {
    console.log(React.version);
    // const {wSize, setWSize} = useState(useWindowSize());
    // useEffect(() => {
    //     setWSize(useWindowSize());
    // }, [useWindowSize]);
    const wSize = useWindowSize();
    return <div className={"card card-body"}>
        WxH: {wSize.width} x {wSize.height}
        <MeMoDemo/>
        <Cau2/>
        <Clock/>
    </div>;
}
