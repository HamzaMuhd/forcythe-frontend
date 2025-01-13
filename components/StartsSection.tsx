import React from "react";

const StatisticsSection = () => {
  return (
    <section
      className="pt-20 px-5 sm:px-5 md:px-10 lg:px-14 xl:px-28"
      style={{
        background: "linear-gradient(rgb(12, 38, 69) 20%, rgb(3, 5, 22) 60%)",
      }}
    >
      {/* Arc Background */}
      <div className="max-w-[52rem] mx-auto bg-[url('/arc.svg')] lg:bg-[url('/arc-L.svg')] bg-cover md:bg-contain lg:bg-contain bg-top bg-no-repeat">
        {/* Content Section */}
        <div className="pt-20 sm:pt-40 lg:pt-60 pb-10 md:pb-14 lg:pb-20 max-w-xl mx-auto text-center px-5">
          {/* Heading */}
          <div className="mb-14 lg:mb-20 max-w-[19rem] md:max-w-md mx-auto">
            <p className="text-xl md:text-2xl lg:text-3xl font-medium font-sans">
              We build solutions that help 
              <span className="text-[#60a6e7]"> businesses </span>
              of all sizes to 
              <span className="text-[#60a6e7]"> scale</span>.
            </p>
          </div>

          {/* Statistics Section */}
          <div className="flex justify-evenly sm:justify-between items-center gap-3">
            {[
              { value: "50+", label: "Clients" },
              { value: "120+", label: "Projects" },
              { value: "10+", label: "Team Leads" },
              { value: "10+", label: "Glorious Years" },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 text-left w-fit"
              >
                <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-medium font-sans">
                  {stat.value}
                </div>
                <span className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis font-sans">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
