import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Position {
  left: number;
  width: number;
  opacity: number;
}

interface TabProps {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  onClick: () => void;
}

interface SlideTabsProps {
  tabs: { label: string; onClick: () => void }[];
  activeIdx: number;
}

export const SlideTabs: React.FC<SlideTabsProps> = ({ tabs, activeIdx }) => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);

  // Update hover position state dynamically whenever the active index shifts
  useEffect(() => {
    const selectedTab = tabsRef.current[activeIdx];
    if (selectedTab) {
      setPosition({
        left: selectedTab.offsetLeft,
        width: selectedTab.clientWidth,
        opacity: 1,
      });
    }
  }, [activeIdx]);

  return (
    <ul
      onMouseLeave={() => {
        const selectedTab = tabsRef.current[activeIdx];
        if (selectedTab) {
          setPosition({
            left: selectedTab.offsetLeft,
            width: selectedTab.clientWidth,
            opacity: 1,
          });
        }
      }}
      className="relative flex items-center w-fit rounded-none bg-black p-0.5 border-2 border-white shadow-[2px_2px_0px_0px_#ffffff]"
    >
      {tabs.map((tab, i) => (
        <Tab
          key={tab.label}
          ref={(el) => {
            tabsRef.current[i] = el;
          }}
          setPosition={setPosition}
          onClick={tab.onClick}
        >
          {tab.label}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
};

const Tab = React.forwardRef<HTMLLIElement, TabProps>(
  ({ children, setPosition, onClick }, ref) => {
    return (
      <li
        ref={ref}
        onClick={onClick}
        onMouseEnter={() => {
          if (ref && 'current' in ref && ref.current) {
            setPosition({
              left: ref.current.offsetLeft,
              width: ref.current.clientWidth,
              opacity: 1,
            });
          }
        }}
        className="relative z-10 block cursor-pointer px-4.5 py-1 text-[13px] font-black uppercase tracking-wider text-white/80 hover:text-white transition-colors duration-150"
      >
        {children}
      </li>
    );
  }
);

Tab.displayName = "Tab";

const Cursor: React.FC<{ position: Position }> = ({ position }) => {
  return (
    <motion.li
      animate={position as any}
      className="absolute z-0 h-6.5 rounded-full bg-white/10"
      style={{ top: "3px" }}
      transition={{ type: "spring", stiffness: 350, damping: 26 }}
    />
  );
};
