"use client";
import React, { useState } from "react";
import tab1 from "../assets/tab1.webp";
import tab2 from "../assets/tab2.webp";
import tab3 from "../assets/tab3.webp";
import tab4 from "../assets/tab4.webp";
import tab5 from "../assets/tab5.webp";
import ToggleTabs from "./ToggleTabs";

function TabSection() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      label: "Single App Kiosk",
      content: "Powerful Single-App Kiosk solutions for enhanced control",
      list: [
        "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
        "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
        "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
      ],
      image: tab1,
    },
    {
      id: 2,
      label: "Multi-App Kiosk",
      content: "Elevate efficiency with Multi-App Kiosk",
      list: [
        "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
        "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
        "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
      ],
      image: tab2,
    },
    {
      id: 3,
      label: "Web Based Kiosk",
      content: "Explore the new way to manage web apps and websites",
      list: [
        "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
        "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
      ],
      image: tab3,
    },
    {
      id: 4,
      label: "Digital Signages",
      content: "Capture attention with Digital Signage Kiosks",
      list: [
        "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
        "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
        "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
      ],
      image: tab4,
    },
    {
      id: 5,
      label: "ASAM Kiosk",
      content: "Unlock the power of Autonomous Single App Mode (ASAM)",
      list: [
        "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
        "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
        "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
      ],
      image: tab5,
    },
  ];

  // Find active tab data
  const tabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="overflow-hidden overflow-x-auto scroll-smooth">
      {/* Heading */}
      <div className="flex justify-center my-10">
        <h1 className="text-center font-bold text-4xl">
          Specific kiosk modes for unique use cases
        </h1>
      </div>
      <div className=" hidden md:block tailwind-container mx-auto">
        {/* Tabs Section */}
        <div className="w-full flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex-1 py-3 text-lg font-medium text-center transition-colors duration-300 ease-in-out
          ${
            activeTab === tab.id
              ? "bg-black text-white border-b-2"
              : "bg-white text-black border border-gray-300 hover:bg-gray-100"
          }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-between gap-8 p-6">
          {/* Left Side: Title & List */}
          <div className="lg:w-[70%] text-left">
            <h2 className="text-2xl font-bold text-gray-800">
              {tabData?.content}
            </h2>
            <ul className="mt-4 space-y-2">
              {tabData?.list.map((item, index) => (
                <li
                  key={index}
                  className="text-gray-600 text-lg flex items-stretch gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="green"
                    className="bi bi-check-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                  </svg>
                  <p className="mt-0">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Image */}
          <div className="flex max-w-[360px] lg:max-w-auto lg:min-w-[400px}">
            <img
              src={tabData?.image}
              alt={tabData?.label}
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <ToggleTabs tabs={tabs} />
      </div>
    </div>
  );
}

export default TabSection;
