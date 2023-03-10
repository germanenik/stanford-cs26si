import React, {useEffect, useState} from 'react';
import "./UnitScreen.css"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import TabBar from '../components/TabBar';
import unitStyles from "../unitStyles";

const Carousel = ({imgs, slidesNums, slidesTotal, unit}) => {
    const size = imgs.length;
    const [activeIndex, setActiveIndex] = useState(0);
    console.log("active index", activeIndex);

    const handleArrowClick = (val) => {
        let newIndex = activeIndex + val;
        if (newIndex >= size) newIndex %= size;
        else if (newIndex < 0) newIndex += size;
        setActiveIndex(newIndex);
    }

    // preloading all images for this unit
    useEffect(() => {
        imgs.forEach(imageUrl => {
            const img = new Image();
            img.src = imageUrl;
        });
    }, [imgs]);

    return (
        <div className="carousel-container" style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"stretch"}}>
            <div onClick={()=>handleArrowClick(-1)} className="arrow">
                <BsChevronLeft size={"3vw"} style={{color:unitStyles[unit].textColor, strokeWidth:1, cursor:"pointer"}}/>
            </div>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"flex-end", width:"90%", paddingBottom:5, color:unitStyles[unit].textColor}}>
                    <div className="subtitle" style={{fontStyle:"italic"}}>Slides Preview</div>
                    <div className="subsubtitle" style={{fontStyle:"italic"}}>{slidesNums[activeIndex]} / {slidesTotal}</div>
                </div>
                <img 
                    id="slide"
                    src={imgs[activeIndex]} 
                    alt=""
                    style={{maxWidth:"90%", height:"auto", borderRadius:20, borderColor:unitStyles[unit].color1, borderWidth:"5px", borderStyle:"solid"}}/>
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
                <BsChevronRight size={"3vw"} style={{color:unitStyles[unit].textColor, strokeWidth:1, cursor:"pointer"}}/>
            </div>
        </div>
    );
}

const UnitScreen = ({unit, data}) => {
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
                <Carousel key={`carousel-${unit}`} imgs={data.slides} slidesNums={data.slidesNums} slidesTotal={data.slidesTotal} unit={unit} />
            </div>
        </div>
    );
}

export default UnitScreen;

