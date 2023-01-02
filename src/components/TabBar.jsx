import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TabBar.css";
import { unitData } from "../data";

const ExpandedMenu = ({clickHandler}) => {
    
    return (
        <div style={{position:"absolute", left:"50%", transform: "translateX(-50%)", paddingTop: "4vh"}}
        >
            <div className="expanded-menu">
                {
                    Object.entries(unitData).map(([key, value]) => {
                        return (
                        <div 
                            key={`expanded-entry-${key}`} 
                            className="expanded-entry hoverable"
                            onClick={() => clickHandler(`/${key}`)}
                        >
                            {`${value.num}: ${value.name}`}
                        </div>
                    )})
                }
            </div>
        </div>
    )
}

const Tab = ({name, isExpandable=false}) => {
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();

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

    const handleEntryClick = (routeName) => {
        navigate(routeName);
        setHover(false);
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
            {isExpandable && hover && <ExpandedMenu clickHandler={handleEntryClick}/>}
            
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