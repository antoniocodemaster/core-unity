import React, { useState } from 'react';
import Button from './Button';

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
  const activeTabClassName = 'text-primary font-semibold border-b-2 border-primary';
  const inactiveTabClassName = 'border-b-2 border-transparent';

  if (!tabs || tabs.length === 0) {
    return null;
  }

  return (
    <div className={containerClassName}>
      {/* Tab List */}
      <div className={tabListClassName}>
        {tabs.map((tab) => (
          <Button
            key={tab.value}
            variant="transparent"
            className={`px-4 py-2 rounded-none ${activeTab === tab.value ? activeTabClassName : inactiveTabClassName}`}
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
