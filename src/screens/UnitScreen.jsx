import React, {useState} from 'react';
import "./UnitScreen.css"
import alph_ex from "../slides/alph-ex.png" 
import abj_ex from "../slides/abj-ex.png"
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";


//BsFillCaretLeftFill
//BsFillCaretRightFill
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
        <div className="carousel-container" style={{flex: 2, display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", paddingLeft:"5vw", paddingRight:"5vw"}}>
            <div onClick={()=>handleArrowClick(-1)} className="arrow"><BsFillCaretLeftFill size={40}/></div>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <>
                {imgs.map((img, idx) => (
                    <img 
                        key={`slide-${idx}`} 
                        className={idx===activeIndex ? "active" : "inactive"}
                        src={img} 
                        alt=""
                        style={{maxWidth:"90%", height:"auto"}}/>
                ))}
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
            <div onClick={()=>handleArrowClick(1)} className="arrow"><BsFillCaretRightFill size={40} /></div>
        </div>
    );
}

const UnitScreen = ({unitName}) => {
    return (
        <div className="container">
            <div style={{flex:1}}>
                <h1>Alphabets</h1>
                <div>description description description description description description description description description description description description description description description description</div>
            </div>
            <Carousel imgs={[alph_ex, abj_ex, abj_ex, alph_ex, abj_ex, abj_ex, alph_ex, abj_ex, abj_ex, abj_ex]} />
        </div>
    );
}

export default UnitScreen;