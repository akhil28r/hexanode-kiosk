import React, { useState } from "react";
import possibility1 from "../assets/possibilities1.webp";
import possibility2 from "../assets/possibilities2.webp";
import possibility3 from "../assets/possibilities3.webp";
import possibility4 from "../assets/possibilities4.webp";

function Possibilities() {
  const data = [
    {
      img: possibility1,
      heading: "Effortless kiosk deployment & management",
      content:
        "Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.",
    },
    {
      img: possibility2,
      heading: "Customized interface for brand visibility",
      content:
        "Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.",
    },
    {
      img: possibility3,
      heading: "Enhanced security and control",
      content:
        "Implement strong security features to safeguard user data and ensure secure access to your kiosk applications.",
    },
    {
      img: possibility4,
      heading: "Seamless user experience",
      content:
        "Provide a smooth and intuitive interface that enhances user engagement and satisfaction.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0); // Default to first item open

  const toggleAccordion = (index) => {
    setOpenIndex(index);
  };

  return (
    <div className="tailwind-container mx-auto">
      <div className="flex justify-center items-center mb-10 md:mb-20">
        <p className="text-center text-[32px] font-bold max-w-[800px]">
          What additional possibilities does the Kiosk mode offer?
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-10 pb-10">
        {/* Left Side: Image (visible on large screens) */}
        <div className="hidden lg:flex flex-1 justify-start">
          <img
            src={data[openIndex]?.img}
            alt={data[openIndex]?.heading}
            className="w-full max-w-lg rounded-lg shadow-md"
          />
        </div>


        <div className="flex-1 w-full">
          {data.map((item, index) => (
            <div key={index} className="mb-6 rounded-lg ">

              {openIndex === index && (
                <div className="lg:hidden">
                  <img
                    src={item.img}
                    alt={item.heading}
                    className="w-full h-auto rounded-t-lg"
                  />
                </div>
              )}

              <button
                className="w-full text-left px-6 py-4 font-medium flex justify-between items-center"
                onClick={() => toggleAccordion(index)}
              >
                <h2 className="text-[30px] font-bold">{item.heading}</h2>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4">
                  <p className="text-gray-700">{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Possibilities;
