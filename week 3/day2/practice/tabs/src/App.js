import './App.css';
import React, { useState } from 'react';
import Tab from './components/Tab';

function App() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const tabs = [
    { label: "Tab 1", content: "Tab 1 is showing here." },
    { label: "Tab 2", content: "Tab 2 is showing here." },
    { label: "Tab 3", content: "Tab 3 is showing here." },
    { label: "Tab 4", content: "Tab 4 is showing here." },
    { label: "Tab 5", content: "Tab 5 is showing here." },
    { label: "Tab 6", content: "Tab 6 is showing here." },
  ]
  return (
    <div className="App">
      <Tab tabs={tabs} currentIndex={currentTabIndex} setCurrentTabIndex={setCurrentTabIndex} />
    </div>
  );
}

export default App;