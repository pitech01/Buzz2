import React from "react";

import { Button, Img, Input, List, Text } from "components";
import DashboardProduct from "components/DashboardProduct";

const DashboardOnlyAccessedbyaLoggedinUserPage = () => {
  const dashboardProductPropList = [
    { userimage: "images/img_rectangle25.png" },
    {},
    {},
    {},
    {},
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto p-10 sm:px-5 w-full">
        <div className="flex flex-col gap-[13px] items-center justify-start max-w-[1648px] mb-5 mt-0.5 mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[98%] md:w-full">
            <div className="flex flex-row font-montserrat gap-[7px] items-center justify-start w-auto">
              <Img
                className="h-[92px] md:h-auto object-cover w-[78px]"
                src="images/img_buzzitlogo1.png"
                alt="buzzitlogoOne"
              />
              <Text
                className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-indigo-900 w-auto"
                size="txtMontserratRomanBold48Indigo900"
              >
                BUZZY
              </Text>
            </div>
            <Input
              name="frame410"
              placeholder="Search Products/Services"
              className="font-light font-signika leading-[normal] p-0 placeholder:text-black-900 text-left text-sm w-full"
              wrapClassName="flex md:ml-[0] ml-[73px] md:mt-0 my-[19px] w-auto md:w-full"
              suffix={
                <Img
                  className="h-6 ml-[35px] my-auto"
                  src="images/img_frame.svg"
                  alt="Frame"
                />
              }
              shape="round"
              color="gray_50_a8"
              size="lg"
              variant="fill"
            ></Input>
            <div className="bg-gray-50_a8 flex sm:flex-col flex-row font-montserrat sm:gap-10 gap-[66px] items-center justify-center mb-[15px] md:ml-[0] ml-[68px] md:mt-0 mt-5 sm:px-5 px-[30px] py-[15px] rounded-[28px] w-auto sm:w-full">
              <Text
                className="text-[22px] text-indigo-500 sm:text-lg md:text-xl w-auto"
                size="txtMontserratRomanSemiBold22Indigo500"
              >
                Home
              </Text>
              <Text
                className="text-black-900 text-xl w-auto"
                size="txtMontserratRomanRegular20"
              >
                Earn
              </Text>
              <Text
                className="text-black-900 text-xl w-auto"
                size="txtMontserratRomanRegular20"
              >
                Advertise
              </Text>
              <Text
                className="text-black-900 text-xl w-auto"
                size="txtMontserratRomanRegular20"
              >
                Market
              </Text>
            </div>
            <div className="flex flex-row gap-20 items-start justify-start ml-4 md:ml-[0] w-auto">
              <Img
                className="h-[55px] rounded-[27px] w-[117px]"
                src="images/img_frame412.svg"
                alt="frame412"
              />
              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                <Img
                  className="h-[53px] md:h-auto rounded-[50%] w-[53px]"
                  src="images/img_ellipse18.png"
                  alt="ellipseEighteen"
                />
                <Img
                  className="h-5 w-5"
                  src="images/img_arrowdown_black_900.svg"
                  alt="arrowdown"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[23px] items-center justify-between w-full">
            <div className="flex md:flex-1 flex-col justify-start w-[19%] md:w-full">
              <div className="bg-gray-50_a8 flex flex-col items-start justify-start p-[58px] md:px-10 sm:px-5 rounded-[30px] w-full">
                <div className="flex flex-col gap-[54px] items-start justify-center mb-3.5 ml-1 md:ml-[0] w-auto">
                  <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_frame_indigo_500.svg"
                      alt="frame"
                    />
                    <Text
                      className="text-indigo-500 text-xl w-auto"
                      size="txtMontserratRomanRegular20Indigo500"
                    >
                      Overview
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                    <Text
                      className="text-black-900 text-xl w-auto"
                      size="txtMontserratRomanRegular20"
                    >
                      My Orders
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_frame_black_900.svg"
                      alt="frame_One"
                    />
                    <Text
                      className="text-black-900 text-xl w-auto"
                      size="txtMontserratRomanRegular20"
                    >
                      Wallet
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_frame_black_900_24x24.svg"
                      alt="frame_Two"
                    />
                    <Text
                      className="text-black-900 text-xl w-auto"
                      size="txtMontserratRomanRegular20"
                    >
                      Chats
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_frame_24x24.svg"
                      alt="frame_Three"
                    />
                    <Text
                      className="text-black-900 text-xl w-auto"
                      size="txtMontserratRomanRegular20"
                    >
                      Notification
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_frame_1.svg"
                      alt="frame_Four"
                    />
                    <Text
                      className="text-black-900 text-xl w-auto"
                      size="txtMontserratRomanRegular20"
                    >
                      Settings
                    </Text>
                  </div>
                </div>
              </div>
              <a
                href="javascript:"
                className="md:ml-[0] ml-[101px] mt-[325px] text-black-900 text-xl"
              >
                <Text size="txtMontserratRomanRegular20">Logout</Text>
              </a>
              <Text
                className="md:ml-[0] ml-[63px] mt-[106px] text-black-900 text-xl"
                size="txtMontserratRomanRegular20"
              >
                © 2023 Buzzy.
              </Text>
            </div>
            <div className="bg-gray-50_a8 flex md:flex-1 flex-col items-center justify-end mb-0.5 p-[29px] sm:px-5 rounded-[30px] w-4/5 md:w-full">
              <div className="flex flex-col items-start justify-start mt-[9px] w-[95%] md:w-full">
                <Text
                  className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                  size="txtMontserratRomanBold48Black900"
                >
                  Welcome back, ‘username’.
                </Text>
                <div className="gap-[42px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between ml-1 md:ml-[0] mt-[25px] w-full">
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-7 sm:px-5 rounded-[30px] w-full">
                    <div className="flex flex-col gap-[13px] items-center justify-start mb-[5px] w-auto">
                      <Text
                        className="text-base text-black-900 w-auto"
                        size="txtSignikaNegativeRegular16Black900"
                      >
                        My Balance
                      </Text>
                      <Text
                        className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-auto"
                        size="txtMontserratRomanBold28Black900"
                      >
                        EDO500.00
                      </Text>
                      <div className="flex flex-row font-signikanegative gap-[17px] items-start justify-start w-auto">
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[99px] rounded-[5px]"
                          leftIcon={
                            <Img
                              className="h-6 mr-2.5"
                              src="images/img_frame_black_900.svg"
                              alt="Frame"
                            />
                          }
                          color="black_900"
                          size="lg"
                          variant="outline"
                        >
                          <div className="font-semibold leading-[normal] text-base text-left">
                            FUND
                          </div>
                        </Button>
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[158px] rounded-[5px]"
                          leftIcon={
                            <Img
                              className="h-6 mr-2.5"
                              src="images/img_uilmoneywithdraw.svg"
                              alt="uil:money-withdraw"
                            />
                          }
                          color="black_900"
                          size="lg"
                          variant="outline"
                        >
                          <div className="font-semibold leading-[normal] text-base text-left">
                            WITHDRAWAL
                          </div>
                        </Button>
                      </div>
                      <Text
                        className="text-base text-black-900 w-auto"
                        size="txtSignikaNegativeRegular16Black900"
                      >
                        Buy Airtime/Data
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center p-[26px] sm:px-5 rounded-[30px] w-full">
                    <div className="flex flex-col gap-6 items-center justify-start my-6 w-auto">
                      <div className="flex flex-row gap-[49px] items-start justify-start w-auto">
                        <div className="flex flex-col gap-[5px] items-center justify-start w-auto">
                          <Text
                            className="text-base text-black-900 w-auto"
                            size="txtSignikaNegativeRegular16Black900"
                          >
                            Pending Balance
                          </Text>
                          <Text
                            className="text-[22px] text-black-900 sm:text-lg md:text-xl w-auto"
                            size="txtMontserratRomanSemiBold22"
                          >
                            EDO100.00
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[5px] items-center justify-start w-auto">
                          <Text
                            className="text-base text-black-900 w-auto"
                            size="txtSignikaNegativeRegular16Black900"
                          >
                            Amount Spent
                          </Text>
                          <Text
                            className="text-[22px] text-black-900 sm:text-lg md:text-xl w-auto"
                            size="txtMontserratRomanSemiBold22"
                          >
                            EDO100.00
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[5px] items-center justify-start w-auto">
                        <Text
                          className="text-base text-black-900 w-auto"
                          size="txtSignikaNegativeRegular16Black900"
                        >
                          Total Earnings
                        </Text>
                        <Text
                          className="text-[22px] text-black-900 sm:text-lg md:text-xl w-auto"
                          size="txtMontserratRomanSemiBold22"
                        >
                          EDO100.00
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 h-[229px] rounded-[30px] w-full"></div>
                </div>
                <div className="bg-white-A700 flex flex-col font-montserrat gap-[33px] h-[582px] md:h-auto items-start justify-start md:ml-[0] ml-[3px] mt-[18px] sm:px-5 px-[31px] py-[30px] rounded-[30px] w-auto md:w-full">
                  <div className="flex sm:flex-col flex-row md:gap-10 gap-[624px] items-center justify-between w-auto md:w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                      <Text
                        className="text-[22px] text-indigo-900 sm:text-lg md:text-xl w-auto"
                        size="txtMontserratRomanSemiBold22Indigo900"
                      >
                        BUZZY MARKETPLACE
                      </Text>
                      <Text
                        className="text-base text-black-900 w-auto"
                        size="txtSignikaNegativeRegular16Black900"
                      >
                        Buy, Sell and resell anything on Buzzy Market
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[192px]"
                      leftIcon={
                        <Img
                          className="h-[30px] mr-[15px]"
                          src="images/img_ggadd.svg"
                          alt="gg:add"
                        />
                      }
                      shape="round"
                      color="indigo_900"
                      size="md"
                      variant="fill"
                    >
                      <div className="!text-white-A700 leading-[normal] text-left text-xl">
                        Post Advert
                      </div>
                    </Button>
                  </div>
                  <List
                    className="sm:flex-col flex-row font-signika gap-[30px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-start w-auto md:w-full"
                    orientation="horizontal"
                  >
                    {dashboardProductPropList.map((props, index) => (
                      <React.Fragment key={`DashboardProduct${index}`}>
                        <DashboardProduct
                          className="flex flex-col gap-[13px] items-center justify-center w-auto"
                          {...props}
                        />
                      </React.Fragment>
                    ))}
                  </List>
                </div>
                <Text
                  className="md:ml-[0] ml-[565px] mt-[27px] text-indigo-900 text-sm"
                  size="txtSignikaLight14"
                >
                  <>View More &gt;&gt;</>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardOnlyAccessedbyaLoggedinUserPage;
