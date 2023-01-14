import React from 'react';
import "./UnitScreen.css"
import TabBar from '../components/TabBar';
import unitStyles from "../unitStyles";
import stanfordlogo from "../imgs/stanford-logo.png"

const HolderCard = ({label, children}) => {
    return (
        <div className='holder-card' style={{flex:1}}>
            <div className='subtitle' style={{paddingBottom:"15px"}}>{label}</div>
            {children}
        </div>    
    );
}

const AboutScreen = () => {
    const unit = "about"; // About Screen is like a fake unit, fine for purposes for a personal website
    return (
        <>
            <div style={{display:"flex", flexDirection:"column", minHeight:"100vh", backgroundColor:unitStyles[unit].color2}}>
            <TabBar unit={unit} />
                <div className="container" style={{zIndex: 1}}>
                    <div className="text-container">
                        <h1 style={{color: unitStyles[unit].textColor}}>About</h1>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <HolderCard label={"The Class"}>
                                <p>This 1-credit class was offered at Stanford during the fall quarter of 2022. Stanford has stellar NLP, yet I noticed a coursework gap. To fill it, I proposed this student-initiated class to the faculty senate</p>
                                <p>Ten wonderful students enrolled, ranging from undeclared freshmen to Computer Science upperclassmen to master's students from East Asian studies. The small class size fostered great questions, conversations, and in-class team work.</p>
                                <div style={{display: "flex", flexDirection: "row", justifyContent:"center"}}>
                                    <img src={stanfordlogo} alt="" style={{width:"200px"}}/>
                                </div>
                                
                            </HolderCard>
                            <div className='about-separator'/>
                            <HolderCard label={"German"}>
                                <p>Hi! I'm German Enik. At the moment of writing this, I'm  a 23-year-old Master's student at Stanford pursuing CS.</p>
                                <p>I'm originally from Moscow, and growing up writing Cyrillic and speaking Russian fueled my interests in everything at the intersection of tech and language, which I also explored during my undergrad at Stanford studying CS and Linguistics.</p>  
                                <p>Feel free to reach out!</p>                           
                            </HolderCard>
                        </div>
                    </div>
                </div>
                {/* <div style={{display:"flex", flexDirection:"row"}}>
                    <div>This 1-credit class was offered at Stanford during the fall quarter of 2022. Ten wonderful students enrolled, ranging from undeclared freshmen to Computer Science upperclassmen to master’s students from East Asian studies. The small class size fostered great questions, conversations, and in-class team work.</div>
                    <div>Hi! I'm German. At the moment of writing this, I'm  a 23-year-old Master's student at Stanford pursuing CS. I'm originally from Moscow, and growing up writing Cyrillic and speaking Russian fueled my interests in everything at the intersection of tech and language, which I also explored during my undergrad at Stanford studying CS and Linguistics.  
                        Stanford has stellar NLP, yet I noticed a coursework gap. To fill it, I proposed this student-initiated class to the faculty senate and had a lot of fun teaching.
                        Feel free to reach out!
                    </div>
                </div> */}
            </div>
            
        </>
    )
}

export default AboutScreen;