import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Header from "components/Header";

const LoginPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto py-[30px] w-full">
        <div className="flex flex-col items-center justify-start mb-[3px] w-full">
          <div className="flex flex-col md:gap-10 gap-[147px] justify-start max-w-[1376px] mx-auto md:px-5 w-full">
            <Header className="flex md:flex-col flex-row md:gap-10 gap-[284px] items-center justify-center w-full" />
            <div className="flex md:flex-col flex-row font-signikanegative md:gap-10 items-center justify-between md:ml-[0] ml-[9px] w-[91%] md:w-full">
              <Img
                className="h-[1036px] md:h-auto object-cover"
                src="images/img_image5.png"
                alt="imageFive"
              />
              <div className="flex flex-col gap-[49px] items-center justify-start">
                <div className="flex flex-col gap-[53px] items-start justify-start w-full">
                  <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-auto"
                      size="txtMontserratRomanBold48Black900"
                    >
                      Welcome Back!
                    </Text>
                    <Text
                      className="text-base text-gray-800 w-auto"
                      size="txtSignikaNegativeRegular16Gray800"
                    >
                      Login to your account to continue
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[30px] items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col gap-5 items-start justify-start w-[417px] sm:w-full">
                      <Text
                        className="text-base text-black-900 w-auto"
                        size="txtSignikaNegativeSemiBold16Black900"
                      >
                        Enter email or Phone Number{" "}
                      </Text>
                      <Input
                        name="frameTwo"
                        placeholder="*****123@gmail.com"
                        className="font-light font-signika leading-[normal] md:h-auto p-0 placeholder:text-gray-400_01 sm:h-auto text-left text-sm w-full"
                        wrapClassName="w-full"
                        shape="square"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-5 items-start justify-start w-[417px] sm:w-full">
                      <Text
                        className="text-base text-black-900 w-auto"
                        size="txtSignikaNegativeSemiBold16Black900"
                      >
                        Password
                      </Text>
                      <div className="flex flex-col font-signika gap-2.5 items-end justify-start w-auto sm:w-full">
                        <Input
                          name="password_One"
                          placeholder="**********"
                          className="font-light leading-[normal] p-0 placeholder:text-gray-400_01 text-left text-sm w-full"
                          wrapClassName="flex md:h-auto w-[417px] sm:w-full"
                          suffix={
                            <Img
                              className="mt-0.5 mb-auto h-5 ml-[35px]"
                              src="images/img_eye_gray_800.svg"
                              alt="eye"
                            />
                          }
                          shape="square"
                          size="xs"
                        ></Input>
                        <a
                          href="javascript:"
                          className="text-indigo-900 text-sm w-auto"
                        >
                          <Text size="txtSignikaLight14">Forgot password?</Text>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[30px] items-center justify-start w-auto sm:w-full">
                  <Button
                    className="cursor-pointer font-montserrat leading-[normal] text-center text-xl w-[417px]"
                    shape="round"
                    color="indigo_500"
                    size="md"
                    variant="fill"
                  >
                    Login
                  </Button>
                  <Text
                    className="text-base text-gray-800 w-auto"
                    size="txtSignikaNegativeRegular16Gray800"
                  >
                    <span className="text-gray-800 font-signikanegative text-left font-normal">
                      Don’t have an account on BUZZY?
                    </span>
                    <span className="text-indigo-900 font-signikanegative text-left font-semibold">
                      {" "}
                      Register now
                    </span>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-indigo-900 flex flex-col items-center justify-start mt-[3px] p-[75px] md:px-10 sm:px-5 w-full">
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
            <div className="flex flex-row gap-[31px] items-start justify-start mt-[25px] w-auto">
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
          <div className="flex flex-col items-start justify-start max-w-[1374px] mt-[49px] mx-auto md:px-5 w-full">
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
            <Line className="bg-indigo-500 h-px md:ml-[0] ml-[5px] mt-7 w-full" />
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

export default LoginPagePage;
