import React, { useState } from "react";
import "./TabBar.css";

const ExpandedMenu = () => {
    return (
        <div style={{position:"absolute", left:"50%", transform: "translateX(-50%)", paddingTop: "4vh"}}
        >
            <div className="expanded-menu">
                <div className="expanded-entry hoverable">Alphabets</div>
                <div className="expanded-entry hoverable">Abjads</div>
                <div className="expanded-entry hoverable">Abugidas</div>
                <div className="expanded-entry hoverable">Syllabaries</div>
                <div className="expanded-entry hoverable">Alphasyllabaries</div>
                <div className="expanded-entry hoverable">Last</div>
            </div>
        </div>
    )
}

const Tab = ({name, isExpandable=false}) => {
    const [hover, setHover] = useState(false);
    const handleMouseOver = () => {
        if (!hover) {
            setHover(true);
            console.log("setting to true");
        }
    }
    const handleMouseLeave = () => {
        if (hover) {
            setHover(false);
            console.log("setting to false");
        }
    }
    return (
        <div 
            style={{position:"relative"}}
            onMouseOver={()=>handleMouseOver()}
            onMouseLeave={()=>handleMouseLeave()}
        >
            <div 
                className="bar-button" 
                style={{
                    backgroundColor: hover ? "rgb(87, 87, 87)" : null,
                    cursor: hover ? "pointer" : "initial"
                }}
            >{name}</div>
            {isExpandable && hover && <ExpandedMenu />}
            
        </div>
    )
}

const TabBar = () => {
    return (
        <div className="tabbar-container" style={{display: 'flex', flexDirection: 'row', alignItems:"center", justifyContent: "space-between", height: "10vh", backgroundColor:"grey"}}
        >
            <Tab name={"Logo"} />
            <div style={{display: 'flex', flexDirection: 'row', justifyContent:"flex-end"}}>
                <Tab name={"Units v"} isExpandable={true} />
                
                <Tab name={"About"} />
            </div>
        </div>
    )
}

export default TabBar;