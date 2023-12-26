import React from "react";

import { Button, Img, Line, Text } from "components";
import Header from "components/Header";

const RegisterPageFourPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto py-[30px] w-full">
        <div className="flex flex-col items-center justify-start mb-[3px] w-full">
          <div className="flex flex-col md:gap-10 gap-[147px] items-center justify-start max-w-[1376px] mx-auto md:px-5 w-full">
            <Header className="flex md:flex-col flex-row md:gap-10 gap-[284px] items-center justify-center w-full" />
            <div className="flex md:flex-col flex-row font-signikanegative md:gap-10 items-start justify-between w-full">
              <Img
                className="h-[1036px] md:h-auto object-cover"
                src="images/img_image5.png"
                alt="imageFive"
              />
              <div className="flex flex-col items-center justify-start md:mt-0 mt-[162px]">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center w-[539px] sm:w-full">
                  <Button
                    className="border-2 border-indigo-900 border-solid flex h-8 items-center justify-center w-8"
                    shape="circle"
                    color="indigo_900"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_iconactioncheck.svg"
                      alt="iconactioncheck"
                    />
                  </Button>
                  <Img
                    className="h-8 w-[94px]"
                    src="images/img_television.svg"
                    alt="television"
                  />
                  <Button
                    className="border-2 border-indigo-900 border-solid flex h-8 items-center justify-center w-8"
                    shape="circle"
                    color="indigo_900"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_iconactioncheck.svg"
                      alt="iconactioncheck_One"
                    />
                  </Button>
                  <Img
                    className="h-8 w-[94px]"
                    src="images/img_television.svg"
                    alt="television_One"
                  />
                  <Button
                    className="border-2 border-indigo-900 border-solid flex h-8 items-center justify-center w-8"
                    shape="circle"
                    color="indigo_900"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_iconactioncheck.svg"
                      alt="iconactioncheck_Two"
                    />
                  </Button>
                  <Img
                    className="h-8 w-[94px]"
                    src="images/img_television.svg"
                    alt="television_Two"
                  />
                  <Button
                    className="border-2 border-indigo-900 border-solid flex h-8 items-center justify-center w-8"
                    shape="circle"
                    color="indigo_900"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_iconactioncheck.svg"
                      alt="iconactioncheck_Three"
                    />
                  </Button>
                  <Img
                    className="h-8 w-[97px]"
                    src="images/img_grid.svg"
                    alt="grid"
                  />
                  <div className="flex flex-col items-center justify-start w-8">
                    <div className="flex flex-col h-8 items-center justify-start w-8">
                      <Text
                        className="bg-white-A700 border-2 border-blue_gray-200 border-solid flex h-8 items-center justify-center rounded-[50%] text-[13px] text-blue_gray-900 text-center w-8"
                        size="txtSignikaNegativeMedium13"
                      >
                        05
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-montserrat gap-2.5 items-start justify-start mt-[46px] w-[534px] sm:w-full">
                  <Text
                    className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-auto"
                    size="txtMontserratRomanBold48Black900"
                  >
                    Add profile picture
                  </Text>
                  <div className="flex flex-col font-signikanegative items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-base text-gray-800"
                      size="txtSignikaNegativeSemiBold16Gray800"
                    >
                      <span className="text-gray-800 font-signikanegative text-left font-semibold">
                        <>
                          You are almost done setting up your account.
                          <br />
                        </>
                      </span>
                      <span className="text-gray-800 font-signikanegative text-left font-normal">
                        <>
                          Simply upload a profile picture to enable people
                          recognise and connect <br />
                          with you later.
                        </>
                      </span>
                    </Text>
                  </div>
                </div>
                <Img
                  className="h-[200px] mt-[53px] w-[200px]"
                  src="images/img_frame402.svg"
                  alt="frame402"
                />
                <div className="flex flex-col font-montserrat gap-4 items-center justify-center mt-[89px] w-auto sm:w-full">
                  <Button
                    className="cursor-pointer leading-[normal] text-center text-xl w-[417px]"
                    shape="round"
                    color="indigo_500"
                    size="md"
                    variant="fill"
                  >
                    Continue
                  </Button>
                  <div className="flex flex-row font-signikanegative gap-[5px] items-start justify-center w-auto">
                    <Text
                      className="text-base text-indigo-900 w-auto"
                      size="txtSignikaNegativeRegular16"
                    >
                      Skip
                    </Text>
                    <Img
                      className="h-5 w-5"
                      src="images/img_arrowright_black_900.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-indigo-900 flex flex-col items-center justify-start p-[75px] md:px-10 sm:px-5 w-full">
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
                <div className="leading-[normal] text-left text-xl">Login</div>
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start max-w-[1374px] mt-[47px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
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
              <div className="flex flex-col font-signikanegative gap-[17px] items-start justify-start md:mt-0 mt-[15px] w-auto">
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
              <div className="flex flex-col font-signikanegative gap-[17px] items-start justify-start md:mt-0 mt-[15px] w-auto">
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
              <div className="flex md:flex-1 flex-col font-signikanegative gap-[25px] items-start justify-start md:mt-0 mt-[15px] w-[21%] md:w-full">
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
            <Line className="bg-indigo-500 h-px md:ml-[0] ml-[5px] mt-[27px] w-full" />
            <Text
              className="md:ml-[0] ml-[5px] mt-[38px] text-indigo-900 text-xl"
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

export default RegisterPageFourPage;
