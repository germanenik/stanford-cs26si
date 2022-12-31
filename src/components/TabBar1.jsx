import "./TabBar.css";
const Tab = ({name}) => {
    return (
        <div className="hoverable bar-button" style={{padding: "2vh"}}>
            {name}
        </div>
    )
}

const TabBar = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', alignItems:"center", justifyContent: "space-between", paddingLeft: 50, paddingRight: 50, height: "10vh", backgroundColor:"grey"}}
        >
            <Tab name={"Logo"} />
            <div style={{display: 'flex', flexDirection: 'row', justifyContent:"flex-end"}}>
                <Tab name={"Units v"} />
                <Tab name={"About"} />
            </div>
        </div>
    )
}

export default TabBar;