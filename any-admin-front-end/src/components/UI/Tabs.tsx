import React, { useState } from 'react';
import Button from './Button'; // Assuming Button component is in the same directory or adjust path

interface TabItem {
  label: string;
  content: React.ReactNode;
  value: string;
}

interface TabsProps {
  tabs: TabItem[];
  initialTab?: string;
  containerClassName?: string;

  activeTabClassName?: string;
  inactiveTabClassName?: string;
  tabContentClassName?: string;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  initialTab,
  containerClassName = '',
  tabContentClassName = 'py-4',
}) => {
  const [activeTab, setActiveTab] = useState(
    initialTab || (tabs.length > 0 ? tabs[0].value : '')
  );

  const tabListClassName = 'flex border-b border-gray-200';
  const activeTabClassName = 'text-primary';
  const inactiveTabClassName = '';
  
  if (!tabs || tabs.length === 0) {
    return null; // Or some placeholder/error message
  }

  return (
    <div className={containerClassName}>
      {/* Tab List */}
      <div className={tabListClassName}>
        {tabs.map((tab) => (
          <Button
            key={tab.value}
            variant="transparent" // Assuming a transparent variant exists for Button
            className={`${activeTab === tab.value ? activeTabClassName : inactiveTabClassName}`}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Tab Content */}
      <div className={tabContentClassName}>
        {tabs.map(
          (tab) =>
            activeTab === tab.value && (
              <div key={tab.value} className="py-2 px-2">
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Tabs;
