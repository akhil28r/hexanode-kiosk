import { useState } from "react";

const ToggleTabs = ({ tabs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="my-16 sm:my-18 w-[90%] mx-auto">
      {tabs.map((item, index) => (
        <div key={index} className=" sm:px-10 mb-2 rounded-lg border border-gray-300">
          <button
            className={`flex w-full  items-center justify-between text-left px-5 py-5 font-medium ${
              openIndex === index
                ? "bg-black text-white"
                : "bg-[#FFFFFF] text-black"
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex items-center gap-4">
              <h2>{item.label}</h2>
            </div>

            {openIndex === index ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-up"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                />
              </svg>
            )}
          </button>

          {openIndex === index && (
            <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-between gap-8 p-6">
              <div className="lg:w-[70%] text-left">
                <h2 className="text-2xl font-bold text-gray-800">
                  {tabs[index]?.content}
                </h2>
                <ul className="mt-4 space-y-2">
                  {tabs[index]?.list?.map((listItem, idx) => (
                    <li
                      key={idx}
                      className="text-gray-600 text-lg flex items-center gap-2"
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
                      <p className="mt-0">{listItem}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex max-w-[360px] lg:max-w-auto lg:min-w-[400px]">
                <img
                  src={tabs[index]?.image}
                  alt={tabs[index]?.label}
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ToggleTabs;
