import React, {useState} from 'react';
import "./UnitScreen.css"
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import TabBar from '../components/TabBar';
import { unitData } from '../data';
import unitStyles from "../unitStyles";

// importing pngs
function importAllAsArr(r) {
    const sortedKeys = r.keys().sort();
    const arr = sortedKeys.map((key) => r(key));
    return arr;
}
const slidesData = {
    unit1: importAllAsArr(require.context('../slides/unit1/', true, /\.(png)$/)),
    unit2: importAllAsArr(require.context('../slides/unit2/', true, /\.(png)$/)),
    unit3: importAllAsArr(require.context('../slides/unit3/', true, /\.(png)$/)),
    unit4: importAllAsArr(require.context('../slides/unit4/', true, /\.(png)$/)),
    unit5: importAllAsArr(require.context('../slides/unit5/', true, /\.(png)$/)),
    unit6: importAllAsArr(require.context('../slides/unit6/', true, /\.(png)$/)),
    unit7: importAllAsArr(require.context('../slides/unit7/', true, /\.(png)$/)),
}
Object.entries(unitData).forEach(([key, value], idx) => {
    value.slides = slidesData[key];
});
// done


const Carousel = ({imgs, unit}) => {
    const size = imgs.length;
    const [activeIndex, setActiveIndex] = useState(0);

    const handleArrowClick = (val) => {
        let newIndex = activeIndex + val;
        if (newIndex >= size) newIndex %= size;
        else if (newIndex < 0) newIndex += size;
        setActiveIndex(newIndex);
    }

    return (
        <div className="carousel-container" style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", paddingLeft:"5vw", paddingRight:"5vw"}}>
            <div onClick={()=>handleArrowClick(-1)} className="arrow"><BsFillCaretLeftFill size={"3vw"}/></div>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <>
                {/* {imgs.map((img, idx) => ( */}
                <img 
                    // key={`slide-${idx}`} 
                    // className={idx===activeIndex ? "active" : "inactive"}
                    src={imgs[activeIndex]} 
                    alt=""
                    style={{maxWidth:"90%", height:"auto", borderRadius:20, borderColor:unitStyles[unit].color1, borderWidth:"5px", borderStyle:"solid"}}/>
                {/* ))} */}
                <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", width:"50%", paddingTop:20}}>
                    {imgs.map((_, idx) => (
                        <div 
                            key={`tick-${idx}`} 
                            onClick={() => setActiveIndex(idx)}
                            style={{
                                flex:1,
                                margin:"0 2%",
                                height: 5,
                                width: "auto",
                                backgroundColor:"black",
                                borderRadius:5,
                                opacity: idx===activeIndex ? 1 : 0.5,
                                cursor:"pointer"
                            }}/>
                    ))}
                </div>
                </>
            </div>
            <div onClick={()=>handleArrowClick(1)} className="arrow"><BsFillCaretRightFill size={"3vw"} /></div>
        </div>
    );
}

const UnitScreen = ({unit}) => {
    const data = unitData[unit];
    return (
        <div style={{display:"flex", flexDirection:"column", minHeight:"100vh", backgroundColor:unitStyles[unit].color2}}>
            <TabBar unit={unit} />
            <div className="container">
                <div className="text-container">
                    <h1>{`Unit ${data.num}: ${data.name}`}</h1>
                    <h4>{data.body}</h4>
                </div>
                <Carousel imgs={data.slides} unit={unit} />
            </div>
        </div>
    );
}

export default UnitScreen;