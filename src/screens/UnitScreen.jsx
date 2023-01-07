import React, {useState} from 'react';
import "./UnitScreen.css"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import TabBar from '../components/TabBar';
import unitStyles from "../unitStyles";

const Carousel = ({imgs, unit}) => {
    const size = imgs.length;
    const [activeIndex, setActiveIndex] = useState(0);
    console.log("active index", activeIndex);

    const handleArrowClick = (val) => {
        let newIndex = activeIndex + val;
        if (newIndex >= size) newIndex %= size;
        else if (newIndex < 0) newIndex += size;
        setActiveIndex(newIndex);
    }

    return (
        <div className="carousel-container" style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
            <div onClick={()=>handleArrowClick(-1)} className="arrow">
                <BsChevronLeft size={"3vw"} style={{color:unitStyles[unit].textColor, strokeWidth:1}}/>
            </div>
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
                                height: "5px",
                                width: "auto",
                                backgroundColor:unitStyles[unit].textColor,
                                borderRadius:5,
                                opacity: idx===activeIndex ? 1 : 0.5,
                                cursor:"pointer"
                            }}/>
                    ))}
                </div>
                </>
            </div>
            <div onClick={()=>handleArrowClick(1)} className="arrow">
                <BsChevronRight size={"3vw"} style={{color:unitStyles[unit].textColor, strokeWidth:1}}/>
            </div>
        </div>
    );
}

const UnitScreen = ({unit, data}) => {
    console.log(data);
    return (
        <div style={{display:"flex", flexDirection:"column", minHeight:"100vh", backgroundColor:unitStyles[unit].color2}}>
            <TabBar unit={unit} />
            {/* background glyphs */}
            <img {...data.backgroundGlyphs[0]} alt=""/>
            <img {...data.backgroundGlyphs[1]} alt=""/>

            <div className="container" style={{zIndex: 1}}>
                <div className="text-container">
                    <h1 style={{color: unitStyles[unit].textColor}}>{`Unit ${data.num}: ${data.name}`}</h1>
                    {data.body.map((string, idx) => (
                        <div key={`body-${idx}`} className="text-body" style={{color: unitStyles[unit].textColor}}>{string}</div>
                    ))}
                </div>
                <Carousel key={`carousel-${unit}`} imgs={data.slides} unit={unit} />
            </div>
        </div>
    );
}

export default UnitScreen;

