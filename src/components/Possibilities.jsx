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
    {
      img: possibility2,
      heading: "Customized interface for brand visibility",
      content:
        "Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(index);
  };

  return (
    <div className="tailwind-container mx-auto md:mt-20">
      <div className="flex justify-center items-center mb-10">
        <p className="text-center text-[42px] font-bold max-w-[800px]">
          What additional possibilities does the Kiosk mode offer?
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-5">
        <div className="hidden lg:flex flex-1 md:max-w-[545px] max-h-[545px] justify-center items-center">
          <img
            src={data[openIndex]?.img}
            alt={data[openIndex]?.heading}
            className=" rounded-lg shadow-md max-w-[500px] max-h-[500px]"
          />
        </div>

        <div className="flex-1 w-full mb-10 ">
          {data.map((item, index) => (
            <div key={index} className="mb-5 rounded-lg  ">
              {openIndex === index && (
                <div className="lg:hidden">
                  <img
                    src={item.img}
                    alt={item.heading}
                    className="w-full object-cover sm:object-contain max-w-[500px] max-h-[500px]  rounded-t-lg"
                  />
                </div>
              )}

              <button
                className="w-full text-left md:px-6 py-4  flex justify-between items-center"
                onClick={() => toggleAccordion(index)}
              >
                <h1 className="text-[30px] font-bold">{item.heading}</h1>
              </button>

              {openIndex === index && (
                <div className="md:pl-7">
                  <p className="text-[#333333] text-lg">{item.content}</p>
                  <span className="text-[#DD0735]  inline-flex items-center font-semibold mt-3 gap-2">TRY FOR FREE
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                      />
                    </svg>
                    
                  </span>
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
