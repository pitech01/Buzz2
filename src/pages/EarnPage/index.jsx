import React from "react";

import { Button, Img, Line, Text } from "components";
import Header from "components/Header";

const EarnPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto py-[30px] w-full">
        <div className="flex flex-col gap-[22px] items-center justify-start mb-[5px] w-full">
          <div className="flex flex-col gap-14 items-center justify-start max-w-[1376px] mx-auto md:px-5 w-full">
            <Header className="flex md:flex-col flex-row md:gap-10 gap-[284px] items-center justify-center w-full" />
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
              <div className="flex flex-col items-start justify-start md:mt-0 mt-[88px]">
                <Text
                  className="capitalize text-2xl md:text-[22px] text-indigo-500 sm:text-xl"
                  size="txtMontserratRomanSemiBold24"
                >
                  Generate income
                </Text>
                <Text
                  className="capitalize mt-2 md:text-5xl text-[100px] text-black-900 w-full"
                  size="txtMontserratRomanBold100"
                >
                  <span className="text-black-900 font-montserrat text-left font-bold">
                    Diversify your earnings with{" "}
                  </span>
                  <span className="text-indigo-500 font-montserrat text-left font-bold">
                    multiple opportunities
                  </span>
                  <span className="text-black-900 font-montserrat text-left font-bold">
                    .
                  </span>
                </Text>
                <Text
                  className="mt-[39px] text-black-900 text-xl w-full"
                  size="txtMontserratRomanRegular20"
                >
                  Transform your social media activity into a lucrative
                  opportunity with BUZZY! For a one-time fee of EDO1000, enjoy
                  lifetime access.
                </Text>
              </div>
              <Img
                className="md:flex-1 h-[837px] sm:h-auto object-cover w-2/5 md:w-full"
                src="images/img_image1_837x544.png"
                alt="imageOne"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-[51px] items-end justify-start w-full">
              <div className="flex md:flex-col flex-row gap-[15px] items-start justify-end md:px-5 w-[90%] md:w-full">
                <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start w-auto md:w-full">
                  <Img
                    className="h-[50px] w-[50px]"
                    src="images/img_materialsymbol.svg"
                    alt="materialsymbol"
                  />
                  <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-[22px] text-black-900 sm:text-lg md:text-xl w-[151px]"
                      size="txtMontserratRomanSemiBold22"
                    >
                      Daily Earning
                    </Text>
                    <Text
                      className="max-w-[578px] md:max-w-full text-black-900 text-xl"
                      size="txtMontserratRomanRegular20"
                    >
                      Earn daily income through simple social tasks like
                      watching videos, likes, follows, comments, and more.
                    </Text>
                  </div>
                </div>
                <Img
                  className="h-[18px] sm:h-auto md:mt-0 mt-[51px] object-cover w-[57%] md:w-full"
                  src="images/img_rectangle14_18x877.png"
                  alt="rectangleFourteen"
                />
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex md:flex-col flex-row gap-10 items-start justify-start md:px-5 w-[88%] md:w-full">
                  <Img
                    className="h-[18px] sm:h-auto md:mt-0 mt-5 object-cover w-[54%] md:w-full"
                    src="images/img_rectangle16_18x814.png"
                    alt="rectangleSixteen"
                  />
                  <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start w-auto md:w-full">
                    <Img
                      className="h-[50px] w-[50px]"
                      src="images/img_typcnlink.svg"
                      alt="typcnlink"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-[22px] text-black-900 sm:text-lg md:text-xl w-[235px]"
                        size="txtMontserratRomanSemiBold22"
                      >
                        Referral Commission
                      </Text>
                      <Text
                        className="max-w-[578px] md:max-w-full text-black-900 text-xl"
                        size="txtMontserratRomanRegular20"
                      >
                        Get an instant EDO500 referral commission for every new
                        member you bring in.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[37px] items-center justify-end md:ml-[0] ml-[178px] mt-[25px] md:px-5 w-[90%] md:w-full">
                  <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start w-auto md:w-full">
                    <Img
                      className="h-[50px] w-[50px]"
                      src="images/img_materialsymbol_black_900.svg"
                      alt="materialsymbol_One"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-[22px] text-black-900 sm:text-lg md:text-xl w-[139px]"
                        size="txtMontserratRomanSemiBold22"
                      >
                        Social Boost
                      </Text>
                      <Text
                        className="max-w-[558px] md:max-w-full text-black-900 text-xl"
                        size="txtMontserratRomanRegular20"
                      >
                        Receive a 20% Social Boost Referral Commission for
                        introducing others to buy likes, followers, comments,
                        and more.
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-[18px] sm:h-auto object-cover w-[57%] md:w-full"
                    src="images/img_rectangle15_18x875.png"
                    alt="rectangleFifteen"
                  />
                </div>
                <div className="flex md:flex-col flex-row gap-[47px] items-start justify-start mt-10 md:px-5 w-[87%] md:w-full">
                  <Img
                    className="h-[18px] sm:h-auto md:mt-0 mt-5 object-cover w-[55%] md:w-full"
                    src="images/img_rectangle17_18x816.png"
                    alt="rectangleSeventeen"
                  />
                  <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start w-auto md:w-full">
                    <Img
                      className="h-[45px] w-[45px]"
                      src="images/img_epsell.svg"
                      alt="epsell"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-[22px] text-black-900 sm:text-lg md:text-xl w-[195px]"
                        size="txtMontserratRomanSemiBold22"
                      >
                        Sell your Product
                      </Text>
                      <Text
                        className="max-w-[556px] md:max-w-full text-black-900 text-xl"
                        size="txtMontserratRomanRegular20"
                      >
                        Showcase and sell your products on BUZZY Market,
                        leveraging our extensive traffic.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-indigo-900 flex flex-col items-center justify-start mt-24 p-[75px] md:px-10 sm:px-5 w-full">
              <Text
                className="md:text-5xl text-[64px] text-center text-gray-100"
                size="txtMontserratRomanBold64"
              >
                <>
                  Promote and Generate Daily Income <br />
                  Using Your Social Media Profile.
                </>
              </Text>
              <Text
                className="mt-[17px] text-center text-gray-100 text-xl w-[45%] sm:w-full"
                size="txtMontserratRomanRegular20Gray100"
              >
                Join countless individuals leveraging Hawkit for advertising and
                consistent social media earnings. Start for free today.
              </Text>
              <div className="flex flex-row gap-[31px] items-start justify-start mt-6 w-auto">
                <Button
                  className="cursor-pointer leading-[normal] min-w-[149px] text-center text-xl"
                  shape="round"
                  color="gray_100"
                  size="md"
                  variant="outline"
                >
                  Get Started
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[124px]"
                  leftIcon={
                    <Img
                      className="h-6 mb-0.5"
                      src="images/img_mdiaccountoutline_indigo_900.svg"
                      alt="mdi:account-outline"
                    />
                  }
                  shape="round"
                  color="gray_100"
                  size="md"
                  variant="fill"
                >
                  <div className="leading-[normal] text-left text-xl">
                    Login
                  </div>
                </Button>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1374px] mt-[47px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[46%] md:w-full">
                <div className="flex flex-row gap-[9px] items-center justify-start w-auto">
                  <Img
                    className="h-[92px] md:h-auto object-cover w-[78px]"
                    src="images/img_buzzitlogo1.png"
                    alt="buzzitlogoOne_One"
                  />
                  <Text
                    className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-center text-indigo-900 w-auto"
                    size="txtMontserratRomanBold48Indigo900"
                  >
                    BUZZY.
                  </Text>
                </div>
                <div className="flex flex-col font-signikanegative gap-[17px] items-start justify-center md:ml-[0] ml-[5px] w-auto md:w-full">
                  <Text
                    className="text-base text-indigo-900 w-[414px]"
                    size="txtSignikaNegativeSemiBold16"
                  >
                    Join our newsletter to stay up to date on feature and
                    release.
                  </Text>
                  <div className="flex flex-col items-center justify-start w-[96%] md:w-full">
                    <div className="border-2 border-indigo-900 border-solid flex flex-row gap-[-2px] items-center justify-start px-[13px] py-[25px] rounded-[10px] w-[598px] md:w-full">
                      <Text
                        className="text-base text-indigo-900 w-auto"
                        size="txtSignikaNegativeRegular16"
                      >
                        Enter your email
                      </Text>
                      <Button
                        className="cursor-pointer font-montserrat font-semibold leading-[normal] min-w-[133px] text-[22px] text-center sm:text-lg md:text-xl"
                        shape="round"
                        color="indigo_900"
                        size="lg"
                        variant="fill"
                      >
                        Subscribe
                      </Button>
                    </div>
                  </div>
                  <Text
                    className="max-w-[625px] md:max-w-full text-base text-indigo-900"
                    size="txtSignikaNegativeRegular16"
                  >
                    By subscribing you agree to our Privacy Policy and provice
                    consent to receive updates from our Company.
                  </Text>
                </div>
              </div>
              <div className="flex flex-col font-signikanegative gap-[17px] items-start justify-start md:ml-[0] ml-[70px] md:mt-0 mt-[15px] w-auto">
                <Text
                  className="text-base text-indigo-900 w-16"
                  size="txtSignikaNegativeSemiBold16"
                >
                  Company
                </Text>
                <div className="flex flex-col gap-5 items-start justify-start w-auto">
                  <Text
                    className="text-base text-indigo-900 w-[41px]"
                    size="txtSignikaNegativeRegular16"
                  >
                    About
                  </Text>
                  <Text
                    className="text-base text-indigo-900 w-10"
                    size="txtSignikaNegativeRegular16"
                  >
                    Terms
                  </Text>
                  <Text
                    className="text-base text-indigo-900 w-[93px]"
                    size="txtSignikaNegativeRegular16"
                  >
                    Refund Policy
                  </Text>
                  <a
                    href="javascript:"
                    className="text-base text-indigo-900 w-[94px]"
                  >
                    <Text size="txtSignikaNegativeRegular16">
                      Privacy Policy
                    </Text>
                  </a>
                </div>
              </div>
              <div className="flex flex-col font-signikanegative gap-[17px] items-start justify-start md:ml-[0] ml-[67px] md:mt-0 mt-[15px] w-auto">
                <Text
                  className="text-base text-indigo-900 w-[73px]"
                  size="txtSignikaNegativeSemiBold16"
                >
                  Quick Link
                </Text>
                <div className="flex flex-col gap-[18px] items-start justify-start w-auto">
                  <Text
                    className="text-base text-indigo-900 w-[78px]"
                    size="txtSignikaNegativeRegular16"
                  >
                    Get Started
                  </Text>
                  <a
                    href="javascript:"
                    className="text-base text-indigo-900 w-[37px]"
                  >
                    <Text size="txtSignikaNegativeRegular16">Login</Text>
                  </a>
                  <Text
                    className="text-base text-indigo-900 w-[31px]"
                    size="txtSignikaNegativeRegular16"
                  >
                    Earn
                  </Text>
                  <Text
                    className="text-base text-indigo-900 w-12"
                    size="txtSignikaNegativeRegular16"
                  >
                    Pricing
                  </Text>
                  <Text
                    className="text-base text-indigo-900 w-[84px]"
                    size="txtSignikaNegativeRegular16"
                  >
                    Marketplace
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col font-signikanegative gap-[25px] items-start justify-start md:ml-[0] ml-[66px] md:mt-0 mt-[15px] w-[21%] md:w-full">
                <div className="flex flex-col gap-[17px] items-start justify-start w-auto">
                  <a
                    href="javascript:"
                    className="text-base text-indigo-900 w-14"
                  >
                    <Text size="txtSignikaNegativeSemiBold16">Support</Text>
                  </a>
                  <div className="flex flex-col gap-[17px] items-start justify-start w-auto">
                    <Text
                      className="text-base text-indigo-900 w-28"
                      size="txtSignikaNegativeRegular16"
                    >
                      Contact Support
                    </Text>
                    <Text
                      className="text-base text-indigo-900 w-[230px]"
                      size="txtSignikaNegativeRegular16"
                    >
                      Frequently Asked Questions (FAQ)
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[17px] items-start justify-start w-auto">
                  <Text
                    className="text-base text-indigo-900 w-[88px]"
                    size="txtSignikaNegativeSemiBold16"
                  >
                    Social Media
                  </Text>
                  <div className="flex flex-col gap-[17px] items-start justify-start w-auto">
                    <Text
                      className="text-base text-indigo-900 w-[133px]"
                      size="txtSignikaNegativeRegular16"
                    >
                      Follow on Facebook
                    </Text>
                    <Text
                      className="text-base text-indigo-900 w-[137px]"
                      size="txtSignikaNegativeRegular16"
                    >
                      Follow on Instagram
                    </Text>
                    <Text
                      className="text-base text-indigo-900 w-[117px]"
                      size="txtSignikaNegativeRegular16"
                    >
                      Follow on Twitter
                    </Text>
                    <Text
                      className="text-base text-indigo-900 w-[127px]"
                      size="txtSignikaNegativeRegular16"
                    >
                      Follow on LinkedIn
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Line className="bg-indigo-500 h-px max-w-[1368px] mt-[27px] mx-auto w-full" />
            <Text
              className="mt-[38px] text-indigo-900 text-xl"
              size="txtMontserratRomanRegular20Indigo900"
            >
              (c) 2023 BUZZY. All right reserved.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default EarnPagePage;
