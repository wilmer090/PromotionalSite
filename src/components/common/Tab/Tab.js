import React, { useState } from 'react';
import './Tab.css';
import ListComponent from '../ListComponent/ListComponent';

const TabComponent = ({ tabs, layout: LayoutComponent }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tab-container">
      <div className="tab-header">
        <ListComponent 
          data={tabs}
          renderItem={(tab, index) =>(
            <div
            key={index}
            className={`tab-item ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
            >
              <a>{tab.title}</a>
            </div>
          )}
        />
      </div>
      <div className="tab-content">
        <LayoutComponent>{tabs[activeTab].content}</LayoutComponent>
      </div>
    </div>
  );
};

export default TabComponent;
