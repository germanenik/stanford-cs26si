import React, {useState} from 'react';
import "./UnitScreen.css"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import TabBar from '../components/TabBar';
import { unitData } from '../data';
import unitStyles from "../unitStyles";

import glyph_2_p1 from '../glyphs/glyph_2_p1.svg';
import glyph_4_p1 from '../glyphs/glyph_4_p1.svg';
import glyph_1_p4 from '../glyphs/glyph_1_p4.svg';
import glyph_3_n1 from '../glyphs/glyph_3_n1.svg';
import glyph_1_n7 from '../glyphs/glyph_1_n7.svg';
import glyph_1_n6 from '../glyphs/glyph_1_n6.svg';
import glyph_2_n2 from '../glyphs/glyph_2_n2.svg';
import glyph_4_n5 from '../glyphs/glyph_4_n5.svg';
import glyph_2_p4 from '../glyphs/glyph_2_p4.svg';
import glyph_4_0 from '../glyphs/glyph_4_0.svg';
import glyph_1_p3 from '../glyphs/glyph_1_p3.svg';
import glyph_2_n1 from '../glyphs/glyph_2_n1.svg';
import glyph_of_0 from '../glyphs/glyph_of_0.svg';
import glyph_of_1 from '../glyphs/glyph_of_1.svg';

function importAllAsArr(r) {
    const sortedKeys = r.keys().sort();
    const arr = sortedKeys.map((key) => r(key));
    return arr;
}

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

const UnitScreen = ({unit}) => {
    // set up
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
        value.backgroundGlyphs = backgroundGlyphs[key];
    });
    const data = unitData[unit];
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
                <Carousel imgs={data.slides} unit={unit} />
            </div>
        </div>
    );
}

export default UnitScreen;

const backgroundGlyphs = {
    unit1: [ // alphabets
        {className: "background-glyph", src: glyph_2_p1, style: {position:"absolute", height:"85vh", bottom: "2vh", transform:"translateX(-50%)", opacity: 0.3, zIndex: 0}},
        {className: "background-glyph", src: glyph_4_p1, style: {position:"absolute", height:"80vh", bottom: "2vh", right:0, transform:"translateX(50%)", opacity: 0.3, zIndex: 0}},
    ],
    unit2: [ // abjads
        {className: "background-glyph", src: glyph_1_p4, style: {position:"absolute", height:"85vh", bottom: "2vh", transform:"translateX(-62%)", opacity: 0.4, zIndex: 0}},
        {className: "background-glyph", src: glyph_3_n1, style: {position:"absolute", height:"85vh", bottom: "2vh", right:0, transform:"translateX(25%)", opacity: 0.4, zIndex: 0}},
    ],
    unit3: [ // abugidas
        {className: "background-glyph", src: glyph_1_n7, style: {position:"absolute", height:"80vh", bottom: "2vh", transform:"translateX(-55%)", opacity: 0.4, zIndex: 0}},
        {className: "background-glyph", src: glyph_1_n6, style: {position:"absolute", height:"80vh", bottom: "2vh", right:0, transform:"translateX(50%)", opacity: 0.4, zIndex: 0}},
    ],
    unit4: [ // syllabaries
        {className: "background-glyph", src: glyph_2_n2, style: {position:"absolute", height:"80vh", bottom: "2vh", transform:"translateX(-50%)", opacity: 0.6, zIndex: 0}},
        {className: "background-glyph", src: glyph_4_n5, style: {position:"absolute", height:"80vh", bottom: "2vh", right:0, transform:"translateX(55%)", opacity: 0.6, zIndex: 0}},
    ],
    unit5: [ // alphasyllabaries
        {className: "background-glyph", src: glyph_2_p4, style: {position:"absolute", height:"80vh", bottom: "2vh", transform:"translateX(-70%)", opacity: 0.35, zIndex: 0}},
        {className: "background-glyph", src: glyph_4_0, style: {position:"absolute", height:"80vh", bottom: "2vh", right:0, transform:"translateX(70%)", opacity: 0.35, zIndex: 0}},
    ],
    unit6: [ // logosyllabaries
        {className: "background-glyph", src: glyph_1_p3, style: {position:"absolute", height:"80vh", bottom: "2vh", transform:"translateX(-60%)", opacity: 0.6, zIndex: 0}},
        {className: "background-glyph", src: glyph_2_n1, style: {position:"absolute", height:"80vh", bottom: "2vh", right:0, transform:"translateX(60%)", opacity: 0.6, zIndex: 0}},
    ],
    unit7: [ // unicode
        {className: "background-glyph", src: glyph_of_0, style: {position:"absolute", height:"80vh", bottom: "2vh", transform:"translateX(-60%)", opacity: 0.05, zIndex: 0}},
        {className: "background-glyph", src: glyph_of_1, style: {position:"absolute", height:"80vh", bottom: "2vh", right:0, transform:"translateX(20%)", opacity: 0.05, zIndex: 0}},
    ],
}