import React from "react";

const Apply = () => {
  return (
    <div className="w-full h-full">
      <div className="m-4">
        <div className="max-w-[1300px] rounded-3xl overflow-hidden flex-wrap photo border-2 border-[#e7e7e7] h-[600px] md:h-[500px] lg:h-[600px] xl:h-[750px] m-auto">
          <div className="flex items-center mt-2 h-full justify-center">
            <div className="text-center lg:p-20">
              <div className="p-10 md:p-20 mx-10 my-10 rounded-xl bg-blur-xl border-2 bg-inherit border-blue-300 backdrop-filter backdrop-blur">
                <div className="my-10">
                  <p className="lg:text-[35px] text-[22px] text-white leading-[29px] lg:mx-40 lg:px-20">
                    Submit your Application
                  </p>
                </div>
                <div className="flex lg:mx-40 my-10 lg:px-30 items-center text-center justify-center">
                  <p className="text-white font-normal text-center lg:mx-20">
                    Applications for future Ambassador cohorts are open. If you
                    have got something to bring to the table and want to support
                    the Sui community, apply now.
                  </p>
                </div>
                <div className="flex items-center justify-center my-10">
                  <button className="flex my-text1 items-center cursor-pointer rounded-2xl bg-blue-500 p-4">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
