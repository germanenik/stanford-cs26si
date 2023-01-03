import React, {useState} from 'react';
import "./UnitScreen.css"
import alph_ex from "../slides/alph-ex.png" 
import abj_ex from "../slides/abj-ex.png"
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import TabBar from '../components/TabBar';
import { unitData } from '../data';

const Carousel = ({imgs}) => {
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
                    style={{maxWidth:"90%", height:"auto", borderRadius:20, border:"5px #C8CDEF solid"}}/>
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
        <div style={{display:"flex", flexDirection:"column", minHeight:"100vh", backgroundColor:"#A9B1E6"}}>
            <TabBar unit={unit} />
            <div className="container">
                <div className="text-container">
                    <h1>{`Unit ${data.num}: ${data.name}`}</h1>
                    <h4>{data.body}</h4>
                </div>
                <Carousel imgs={[alph_ex, abj_ex]} />
            </div>
        </div>
    );
}

export default UnitScreen;