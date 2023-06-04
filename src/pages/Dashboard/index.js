import React from "react";

import { Img, Line, List, Text } from "components";

const DashboardPage = () => {
  return (
    <>
      <div className="bg-gray_100 flex flex-col font-poppins items-center justify-start mx-auto pb-[66px] w-full">
        <div className="flex flex-col gap-[45px] items-center justify-start w-full">
          <div className="bg-blue_gray_600 flex flex-row items-center justify-start p-[33px] sm:px-5 rounded-[20px] shadow-bs w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1361px] mx-auto md:px-5 w-full">
              <Text
                className="text-white_A700 tracking-[4.80px]"
                as="h1"
                variant="h1"
              >
                DASHBOARD
              </Text>
              <Img
                src="images/img_personcircle1.svg"
                className="h-[65px] w-[65px]"
                alt="personcircleOne"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[39px] items-center justify-start max-w-7xl mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-[43px] items-center justify-between w-full">
              <div className="bg-gray_50 flex md:flex-1 flex-col items-center justify-start p-[33px] sm:px-5 rounded-[40px] shadow-bs1 w-[32%] md:w-full">
                <div className="flex flex-col gap-[23px] justify-start mb-[57px] w-[94%] md:w-full">
                  <Text
                    className="font-medium text-black_900 text-center tracking-[2.64px]"
                    as="h3"
                    variant="h3"
                  >
                    Water Level Indicator
                  </Text>
                  <div className="flex flex-row gap-[21px] items-center justify-start md:ml-[0] ml-[26px] w-[64%] md:w-full">
                    <Img
                      src="images/img_droplethalf1.svg"
                      className="h-[100px] w-[100px]"
                      alt="droplethalfOne"
                    />
                    <div className="flex flex-col gap-[21px] items-start justify-start w-[39%]">
                      <div className="flex flex-row gap-1.5 items-start justify-start w-[59%] md:w-full">
                        <div className="bg-black_900 h-[15px] mt-0.5 rounded-[7px] w-[15px]"></div>
                        <Text
                          className="text-black_900 tracking-[1.20px]"
                          as="h4"
                          variant="h4"
                        >
                          Full
                        </Text>
                      </div>
                      <div className="flex flex-row gap-1.5 items-start justify-start w-full">
                        <div className="bg-black_900 h-[15px] mt-0.5 rounded-[7px] w-[15px]"></div>
                        <Text
                          className="text-black_900 tracking-[1.20px]"
                          as="h4"
                          variant="h4"
                        >
                          Medium
                        </Text>
                      </div>
                      <div className="flex flex-row gap-1.5 items-start justify-start w-[86%] md:w-full">
                        <div className="bg-black_900 h-[15px] mb-0.5 rounded-[7px] w-[15px]"></div>
                        <Text
                          className="text-black_900 tracking-[1.20px]"
                          as="h4"
                          variant="h4"
                        >
                          Empty
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <List
                className="md:flex-1 sm:flex-col flex-row gap-[43px] grid md:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
                orientation="horizontal"
              >
                <div className="bg-white_A700 flex flex-col items-center justify-start sm:ml-[0] p-9 sm:px-5 rounded-[40px] shadow-bs1 w-full">
                  <div className="flex flex-col gap-[21px] justify-start mb-[55px] w-[71%] md:w-full">
                    <Text
                      className="font-medium ml-2 md:ml-[0] text-black_900 text-center tracking-[2.64px]"
                      as="h3"
                      variant="h3"
                    >
                      Pump Indicator
                    </Text>
                    <div className="flex flex-row gap-[27px] items-center justify-start w-[77%] md:w-full">
                      <Img
                        src="images/img_gearwideconnected.svg"
                        className="h-[100px] w-[100px]"
                        alt="gearwideconnect"
                      />
                      <div className="flex flex-col gap-[22px] items-start justify-start w-[28%]">
                        <div className="flex flex-row gap-2.5 items-start justify-start w-[88%] md:w-full">
                          <div className="bg-black_900 h-[15px] mt-0.5 rounded-[7px] w-[15px]"></div>
                          <Text
                            className="h-[18px] text-black_900 tracking-[1.20px]"
                            as="h4"
                            variant="h4"
                          >
                            ON
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2.5 items-start justify-between w-full">
                          <div className="bg-black_900 h-[15px] mt-0.5 rounded-[7px] w-[15px]"></div>
                          <Text
                            className="text-black_900 tracking-[1.20px]"
                            as="h4"
                            variant="h4"
                          >
                            OFF
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start sm:ml-[0] p-[33px] sm:px-5 rounded-[40px] shadow-bs1 w-full">
                  <div className="flex flex-col gap-6 items-start justify-start mb-[58px] w-[71%] md:w-full">
                    <Text
                      className="font-medium ml-0.5 md:ml-[0] text-black_900 text-center tracking-[2.64px]"
                      as="h3"
                      variant="h3"
                    >
                      Buzzer Indicator
                    </Text>
                    <div className="flex flex-row gap-[19px] items-center justify-start w-[72%] md:w-full">
                      <Img
                        src="images/img_volumeupfill1.svg"
                        className="h-[100px] w-[100px]"
                        alt="volumeupfillOne"
                      />
                      <div className="flex flex-col gap-[22px] items-start justify-start w-[30%]">
                        <div className="flex flex-row gap-2.5 items-start justify-start w-[88%] md:w-full">
                          <div className="bg-black_900 h-[15px] mt-0.5 rounded-[7px] w-[15px]"></div>
                          <Text
                            className="h-[18px] text-black_900 tracking-[1.20px]"
                            as="h4"
                            variant="h4"
                          >
                            ON
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2.5 items-start justify-between w-full">
                          <div className="bg-black_900 h-[15px] mt-0.5 rounded-[7px] w-[15px]"></div>
                          <Text
                            className="text-black_900 tracking-[1.20px]"
                            as="h4"
                            variant="h4"
                          >
                            OFF
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex md:flex-col flex-row gap-3.5 items-center justify-between w-full">
              <div className="bg-white_A700 md:h-[375px] h-[448px] p-[21px] sm:px-5 relative rounded-[40px] shadow-bs1 w-[34%] md:w-full">
                <Text
                  className="absolute font-medium inset-x-[0] mx-auto text-black_900 text-center top-[9%] tracking-[2.64px] w-max"
                  as="h3"
                  variant="h3"
                >
                  Water Level
                </Text>
                <Text
                  className="absolute bottom-[5%] right-[15%] text-black_900 text-center tracking-[25.00px]"
                  as="h2"
                  variant="h2"
                >
                  17{" "}
                </Text>
              </div>
              <div className="bg-white_A700 flex md:flex-1 flex-col gap-10 items-center justify-center p-[33px] sm:px-5 rounded-[40px] shadow-bs1 w-[66%] md:w-full">
                <Text
                  className="font-normal mt-[9px] text-black_900 text-center tracking-[2.64px]"
                  as="h3"
                  variant="h3"
                >
                  Water Level History
                </Text>
                <div className="font-inter h-[235px] md:h-[267px] mb-[60px] relative w-full">
                  <div className="absolute bottom-[0] flex flex-col inset-x-[0] mx-auto w-[97%] md:w-full">
                    <Line className="bg-black_900 h-px mx-auto w-full" />
                    <div className="flex flex-row items-center justify-between mb-auto mt-[-1px] mx-auto w-[90%] z-[1]">
                      <div className="flex flex-col gap-[11px] items-start justify-start w-[2%]">
                        <div className="bg-black_900 h-[7px] md:ml-[0] ml-[3px] w-[15%]"></div>
                        <Text
                          className="text-black_900 text-center"
                          as="h4"
                          variant="h4"
                        >
                          0
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[11px] items-start justify-start w-[1%]">
                        <div className="bg-black_900 h-[7px] ml-0.5 md:ml-[0] w-1/4"></div>
                        <Text
                          className="text-black_900 text-center"
                          as="h4"
                          variant="h4"
                        >
                          1
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[11px] items-start justify-start w-[2%]">
                        <div className="bg-black_900 h-[7px] md:ml-[0] ml-[3px] w-[15%]"></div>
                        <Text
                          className="text-black_900 text-center"
                          as="h4"
                          variant="h4"
                        >
                          2
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[11px] items-start justify-start w-[2%]">
                        <div className="bg-black_900 h-[7px] md:ml-[0] ml-[3px] w-[15%]"></div>
                        <Text
                          className="text-black_900 text-center"
                          as="h4"
                          variant="h4"
                        >
                          3
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[11px] items-start justify-start w-[2%]">
                        <div className="bg-black_900 h-[7px] md:ml-[0] ml-[3px] w-[15%]"></div>
                        <Text
                          className="text-black_900 text-center"
                          as="h4"
                          variant="h4"
                        >
                          4
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[11px] items-start justify-start w-[2%]">
                        <div className="bg-black_900 h-[7px] md:ml-[0] ml-[3px] w-[15%]"></div>
                        <Text
                          className="text-black_900 text-center"
                          as="h4"
                          variant="h4"
                        >
                          5
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[11px] items-start justify-start w-[2%]">
                        <div className="bg-black_900 h-[7px] md:ml-[0] ml-[3px] w-[15%]"></div>
                        <Text
                          className="text-black_900 text-center"
                          as="h4"
                          variant="h4"
                        >
                          6
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[11px] items-start justify-start w-[2%]">
                        <div className="bg-black_900 h-[7px] ml-1 md:ml-[0] w-[15%]"></div>
                        <Text
                          className="text-black_900 text-center"
                          as="h4"
                          variant="h4"
                        >
                          7
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[11px] items-start justify-start w-[2%]">
                        <div className="bg-black_900 h-[7px] md:ml-[0] ml-[3px] w-[15%]"></div>
                        <Text
                          className="text-black_900 text-center"
                          as="h4"
                          variant="h4"
                        >
                          8
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-row items-center justify-evenly left-[0] top-[0] w-[4%]">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row gap-1.5 items-start justify-between w-full">
                        <Text
                          className="text-black_900 text-right"
                          as="h4"
                          variant="h4"
                        >
                          28
                        </Text>
                        <div className="bg-black_900 h-px mb-[9px] mt-1 w-1/4"></div>
                      </div>
                      <div className="flex flex-row gap-[7px] items-end justify-between mt-[29px] w-[93%] md:w-full">
                        <Text
                          className="text-black_900 text-right"
                          as="h4"
                          variant="h4"
                        >
                          21
                        </Text>
                        <div className="bg-black_900 h-px mb-1 mt-[9px] w-[27%]"></div>
                      </div>
                      <div className="flex flex-row gap-1.5 items-end justify-between mt-[34px] w-[93%] md:w-full">
                        <Text
                          className="text-black_900 text-right"
                          as="h4"
                          variant="h4"
                        >
                          14
                        </Text>
                        <div className="bg-black_900 h-px mb-1 mt-[9px] w-[27%]"></div>
                      </div>
                      <div className="flex flex-row gap-1.5 items-end justify-between md:ml-[0] ml-[7px] mt-[34px] w-[72%] md:w-full">
                        <Text
                          className="text-black_900 text-right"
                          as="h4"
                          variant="h4"
                        >
                          7
                        </Text>
                        <div className="bg-black_900 h-px mb-1 mt-[9px] w-[35%]"></div>
                      </div>
                      <div className="flex flex-row gap-1.5 items-end justify-between ml-1.5 md:ml-[0] mt-[34px] w-3/4 md:w-full">
                        <Text
                          className="text-black_900 text-right"
                          as="h4"
                          variant="h4"
                        >
                          0
                        </Text>
                        <div className="bg-black_900 h-px mb-1 mt-[9px] w-[34%]"></div>
                      </div>
                    </div>
                    <Line className="bg-black_900 h-[197px] my-1 w-px" />
                  </div>
                  <Img
                    src="images/img_group.svg"
                    className="absolute h-[183px] inset-x-[0] mx-auto top-[8%]"
                    alt="group"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
