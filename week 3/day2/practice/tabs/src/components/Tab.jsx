import React from 'react'
import './Tab.css';
const Tab = (props) => {
    const { tabs, currentIndex, setCurrentTabIndex } = props;
    const handleSelectedTab = (e, index) => {
        setCurrentTabIndex(index)
    }
    return (
        <div>
            <div className="main">
                {tabs.map((el, index) => 
                    index  === currentIndex ? <span className="tabHeaderSelected" key={index} onClick={(e) => { handleSelectedTab(e, index) }}>
                        {el.label}
                    </span> : <span className="tabHeader" key={index} onClick={(e) => { handleSelectedTab(e, index) }}>
                        {el.label}
                    </span>
                )}
            </div>
            <div className="mainContent">
                <div className="tabContent">  {tabs[currentIndex].content}</div>
            </div>
        </div>
    )
}

export default Tab

