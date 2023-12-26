import React from "react";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import Header from "components/Header";

const selectLgaOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const RegisterPageThreePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto py-[30px] w-full">
        <div className="flex flex-col items-center justify-start mb-[3px] w-full">
          <div className="flex flex-col md:gap-10 gap-[147px] items-center justify-start max-w-[1376px] mx-auto md:px-5 w-full">
            <Header className="flex md:flex-col flex-row md:gap-10 gap-[284px] items-center justify-center w-full" />
            <div className="flex md:flex-col flex-row font-signikanegative md:gap-10 items-start justify-between w-[99%] md:w-full">
              <Img
                className="h-[1036px] md:h-auto object-cover"
                src="images/img_image5.png"
                alt="imageFive"
              />
              <div className="flex flex-col items-start justify-start md:mt-0 mt-[162px]">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-[529px] sm:w-full">
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
                    className="h-8 w-[88px]"
                    src="images/img_grid.svg"
                    alt="grid"
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
                    className="h-8 w-[88px]"
                    src="images/img_grid.svg"
                    alt="grid_One"
                  />
                  <div className="flex flex-col items-center justify-start w-8">
                    <div className="flex flex-col h-8 items-center justify-start w-8">
                      <div className="bg-white-A700 border-2 border-blue_gray-200 border-solid flex flex-col h-8 items-center justify-start p-1.5 rounded-[50%] w-8">
                        <Text
                          className="text-[13px] text-blue_gray-900 text-center"
                          size="txtSignikaNegativeMedium13"
                        >
                          04
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="h-8 w-[97px]"
                    src="images/img_grid.svg"
                    alt="grid_Two"
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
                <div className="flex flex-col font-montserrat gap-2.5 items-start justify-start mt-[47px] w-auto sm:w-full">
                  <Text
                    className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-auto"
                    size="txtMontserratRomanBold48Black900"
                  >
                    Welcome to BUZZY!
                  </Text>
                  <div className="flex flex-col font-signikanegative items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-base text-gray-800"
                      size="txtSignikaNegativeRegular16Gray800"
                    >
                      <>
                        Congratulations, John Doe!
                        <br />
                        Your email has been verified successfully. Before you
                        continue, please set
                        <br />
                        your gender and current location to enhance your BUZZY
                        experience.
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col font-signikanegative gap-[30px] items-start justify-start mt-[22px] w-auto sm:w-full">
                  <div className="flex flex-col gap-5 items-start justify-start w-[417px] sm:w-full">
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtSignikaNegativeSemiBold16Black900"
                    >
                      Gender
                    </Text>
                    <Input
                      name="frameTwo"
                      placeholder="Select gender"
                      className="font-light font-signika leading-[normal] p-0 placeholder:text-gray-400_01 text-left text-sm w-full"
                      wrapClassName="flex md:h-auto w-[417px] sm:w-full"
                      suffix={
                        <Img
                          className="h-5 ml-[35px] my-auto"
                          src="images/img_arrowdown_gray_400_01.svg"
                          alt="arrow_down"
                        />
                      }
                      shape="square"
                      size="xs"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start w-[417px] sm:w-full">
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtSignikaNegativeSemiBold16Black900"
                    >
                      State
                    </Text>
                    <Input
                      name="frameTwo_One"
                      placeholder="Select state"
                      className="font-light font-signika leading-[normal] p-0 placeholder:text-gray-400_01 text-left text-sm w-full"
                      wrapClassName="flex md:h-auto w-[417px] sm:w-full"
                      suffix={
                        <Img
                          className="h-5 ml-[35px] my-auto"
                          src="images/img_arrowdown_gray_400_01.svg"
                          alt="arrow_down"
                        />
                      }
                      shape="square"
                      size="xs"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start w-[417px] sm:w-full">
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtSignikaNegativeSemiBold16Black900"
                    >
                      LGA
                    </Text>
                    <div className="flex flex-col font-signika gap-1.5 items-start justify-start w-auto sm:w-full">
                      <SelectBox
                        className="font-light h-[37px] leading-[normal] text-left text-sm w-full"
                        placeholderClassName="text-gray-400_01"
                        indicator={
                          <Img
                            className="h-5 w-5"
                            src="images/img_arrowdown_gray_400_01.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="frameTwo_Two"
                        options={selectLgaOptionsList}
                        isSearchable={false}
                        placeholder="Select LGA"
                        shape="square"
                        color="blue_gray_100"
                        size="xs"
                        variant="outline"
                      />
                      <div className="flex flex-col font-signikanegative h-[42px] md:h-auto items-center justify-start w-[417px] sm:w-full">
                        <Text
                          className="max-w-[378px] md:max-w-full text-base text-gray-400_01"
                          size="txtSignikaNegativeRegular16Gray40001"
                        >
                          Prior to choosing your Local Government Area (LGA),
                          please ensure that you first select your state.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-montserrat items-center justify-center mt-[47px] w-auto sm:w-full">
                  <Button
                    className="cursor-pointer leading-[normal] text-center text-xl w-[417px]"
                    shape="round"
                    color="indigo_500"
                    size="md"
                    variant="fill"
                  >
                    Continue
                  </Button>
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

export default RegisterPageThreePage;
