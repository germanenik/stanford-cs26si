import React from 'react';
import "./UnitScreen.css"
import TabBar from '../components/TabBar';
import unitStyles from "../unitStyles";
import stanfordlogo from "../imgs/stanford-logo.png"
import me from "../imgs/me.png"

const HolderCard = ({label, children}) => {
    return (
        <div className='holder-card'>
            <div className='subtitle' style={{paddingBottom:"15px"}}>{label}</div>
            {children}
        </div>    
    );
}

const AboutScreen = () => {
    const unit = "about"; // About Screen is like a fake unit, fine for purposes for a personal website
    return (
        <div style={{display:"flex", flexDirection:"column", minHeight:"100vh", backgroundColor:unitStyles[unit].color2}}>
            <TabBar unit={unit} />
            <div className="container" style={{zIndex: 1, flexDirection:"column"}}>
                <h1 style={{color: unitStyles[unit].textColor}}>About</h1>
                <div className="about-section" style={{display: "flex", justifyContent:"space-between", alignItems:"top", paddingBottom:"50px"}}>
                    <div style={{width: "70%", display:"flex", flexDirection:"row", alignItems:"center"}}>
                        <HolderCard label={"The Class"}>
                            <p>This 1-credit class (offered at Stanford in fall '22) addresses intersections of writing systems and tech. Stanford has stellar NLP, yet I noticed a coursework gap. To fill it, I proposed this student-initiated class to the faculty senate.</p>
                            <p>Ten wonderful students enrolled, ranging from undeclared freshmen to Computer Science upperclassmen to master's students from East Asian studies. The small class size fostered great questions, conversations, and in-class team work.</p>
                        </HolderCard>
                    </div>
                    <div style={{width: "30%", display: "flex", flexDirection: "column", justifyContent:"center", alignItems:"center", paddingLeft:"50px"}}>
                        <img src={stanfordlogo} alt="" style={{display: "block", width:"auto", maxHeight:"250px"}}/>
                    </div>
                </div>
                <div className="about-section" style={{display: "flex", justifyContent:"space-between"}}>
                    <div style={{width: "30%", display: "flex", flexDirection: "column", justifyContent:"center", alignItems:"center", paddingRight:"50px"}}>
                        <img src={me} alt="" style={{display: "block", width:"auto", maxHeight:"250px"}}/>
                    </div>
                    <div style={{width: "70%", display:"flex", flexDirection:"row", alignItems:"center"}}>
                    <HolderCard label={"German"}>
                        <p>Hi! I'm German Enik. At the moment of writing this, I'm  a 23-year-old Master's student at Stanford pursuing CS.</p>
                        <p>I'm originally from Moscow. Growing up writing Cyrillic and speaking Russian fueled my interests in everything at the intersection of tech and language, which I also explored during my undergrad at Stanford studying CS and Linguistics.</p>  
                        <p>Feel free to reach out!</p>                           
                    </HolderCard>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default AboutScreen;