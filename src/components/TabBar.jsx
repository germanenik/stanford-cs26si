import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TabBar.css";
import { unitData } from "../data";
import unitStyles from "../unitStyles";
import {BsChevronDown} from "react-icons/bs";

const MenuItem = ({clickHandler, unit, unitKey, value}) => {
    const [hover, setHover] = useState(false);
    return (
        <div 
            style={{
                backgroundColor:hover ? unitStyles[unit].color4 : null,
                cursor: "pointer",
                color: unitStyles[unit].textColor
            }}
            className="expanded-entry"
            onClick={() => clickHandler(`/${unitKey}`)}
            onMouseOver={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}
        >
            {`${value.num}: ${value.name}`}
        </div>
    );
}

const ExpandedMenu = ({clickHandler, unit}) => {
    return (
        <div style={{position:"absolute", left:"50%", transform: "translateX(-50%)", paddingTop: "4vh"}}
        >
            <div className="expanded-menu" style={{backgroundColor: unitStyles[unit].color3}}>
                {
                    Object.entries(unitData).map(([unitKey, value]) => (
                        <MenuItem 
                            key={`expanded-entry-${unitKey}`} 
                            clickHandler={clickHandler} 
                            unit={unit} 
                            unitKey={unitKey} 
                            value={value}
                        />
                    ))
                }
            </div>
        </div>
    )
}

const Tab = ({name, unit, isExpandable=false, isLogo=false}) => {
    // TODO: restructure this component
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();

    const handleMouseOver = () => {
        if (!hover) {
            setHover(true);
        }
    }
    const handleMouseLeave = () => {
        if (hover) {
            setHover(false);
        }
    }

    const handleEntryClick = (routeName) => {
        navigate(routeName);
        setHover(false);
    }

    const handleTabClick = (routeName) => {
        if (!isExpandable) {
            // i know this is ugly, i just need to get this website out
            navigate(!isLogo ? `/${routeName.toLowerCase()}` : "/");
        }
    }

    return (
        <div 
            style={{position:"relative"}}
            onMouseOver={!isLogo ? ()=>handleMouseOver() : null}
            onMouseLeave={!isLogo ? ()=>handleMouseLeave() : null}
            onClick={()=>handleTabClick(name)}
        >
            <div 
                className={isLogo ? "logo-button" : "bar-button"} 
                style={{
                    backgroundColor: hover ? unitStyles[unit].color4 : null,
                    cursor: hover ? "pointer" : "default",
                    color: unitStyles[unit].textColor
                }}
            >{name}</div>
            {isExpandable && hover && <ExpandedMenu clickHandler={handleEntryClick} unit={unit}/>}
            
        </div>
    )
}

const UnitsLabel = () => (
    <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
        <span>{'Units '}</span>
        <BsChevronDown style={{marginLeft: "0.5vw"}}/>
    </div>
);

const TabBar = ({unit}) => {
    return (
        <div className={"tabbar-container"} style={{
            display: 'flex', 
            flexDirection: 'row', 
            alignItems:"center", 
            justifyContent: "space-between", 
            height: "10vh",
            backgroundColor: unitStyles[unit].color3,
            zIndex: 3
        }}
        >
            <Tab name={"CS 26SI @ Stanford"} unit={unit} isLogo={true}/>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent:"flex-end"}}>
                <Tab name={<UnitsLabel />} unit={unit} isExpandable={true} />
                
                <Tab name={"About"} unit={unit} />
            </div>
        </div>
    )
}

export default TabBar;