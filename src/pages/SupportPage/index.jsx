import React from "react";

import { Button, Img, Line, Text } from "components";
import Header from "components/Header";

const SupportPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto py-[30px] w-full">
        <div className="flex flex-col items-center justify-start mb-[3px] w-full">
          <div className="flex flex-col items-center justify-start max-w-[1376px] mx-auto md:px-5 w-full">
            <Header className="flex md:flex-col flex-row md:gap-10 gap-[284px] items-center justify-center w-full" />
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[46px] w-[98%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[75px] items-start justify-start md:mt-0 mt-[84px] w-[64%] md:w-full">
                <div className="flex flex-col gap-[59px] items-start justify-start w-full">
                  <Text
                    className="capitalize md:text-5xl text-[100px] text-black-900"
                    size="txtMontserratRomanBold100"
                  >
                    <span className="text-black-900 font-montserrat text-left font-bold">
                      <>
                        Engage in <br />
                        Social Activities <br />
                        and{" "}
                      </>
                    </span>
                    <span className="text-indigo-500 font-montserrat text-left font-bold">
                      <>
                        Attain <br />
                        Rewards.
                      </>
                    </span>
                  </Text>
                  <Text
                    className="ml-1 md:ml-[0] text-[22px] text-black-900 sm:text-lg md:text-xl"
                    size="txtMontserratRomanSemiBold22"
                  >
                    Transform your social media profile into a lucrative revenue
                    source.
                  </Text>
                </div>
                <div className="flex flex-col gap-[43px] items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col gap-[5px] items-start justify-start w-auto md:w-full">
                    <div className="bg-indigo-500 h-[7px] w-[9%]"></div>
                    <Text
                      className="max-w-[759px] md:max-w-full text-black-900 text-xl"
                      size="txtMontserratRomanRegular20"
                    >
                      Earn daily income through simple social tasks like
                      watching videos, likes, follows, comments, and more.
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start justify-start w-auto md:w-full">
                    <div className="bg-indigo-500 h-[7px] w-[9%]"></div>
                    <Text
                      className="max-w-[759px] md:max-w-full text-black-900 text-xl"
                      size="txtMontserratRomanRegular20"
                    >
                      Get an instant EDO500 referral commission for every new
                      member you bring in.
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start justify-start w-auto md:w-full">
                    <div className="bg-indigo-500 h-[7px] w-[9%]"></div>
                    <Text
                      className="max-w-[759px] md:max-w-full text-black-900 text-xl"
                      size="txtMontserratRomanRegular20"
                    >
                      Receive a 20% Social Boost Referral Commission for
                      introducing others to buy likes, followers, comments, and
                      more.
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start justify-start w-auto md:w-full">
                    <div className="bg-indigo-500 h-[7px] w-[9%]"></div>
                    <Text
                      className="max-w-[759px] md:max-w-full text-black-900 text-xl"
                      size="txtMontserratRomanRegular20"
                    >
                      Showcase and sell your products on BUZZY Market,
                      leveraging our extensive traffic.
                    </Text>
                  </div>
                </div>
              </div>
              <Img
                className="h-[820px] sm:h-auto object-cover w-[37%] md:w-full"
                src="images/img_image1.png"
                alt="imageOne"
              />
            </div>
            <div className="flex flex-col gap-[54px] items-center justify-start mt-[156px] w-[83%] md:w-full">
              <Text
                className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-center text-indigo-500"
                size="txtMontserratRomanBold48"
              >
                <>
                  Don&#39;t miss out on these incredible benefits! <br />
                  Click below to make your payment and <br />
                  activate your membership now.&quot;
                </>
              </Text>
              <div className="flex flex-col gap-[21px] items-start justify-start w-auto sm:w-full">
                <Button
                  className="cursor-pointer leading-[normal] text-center text-xl w-[417px]"
                  shape="round"
                  color="indigo_500"
                  size="md"
                  variant="fill"
                >
                  Create account
                </Button>
                <Button
                  className="!text-indigo-900 cursor-pointer leading-[normal] outline-[2px] text-center text-xl w-[417px]"
                  shape="round"
                  color="indigo_900"
                  size="md"
                  variant="outline"
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-indigo-900 flex flex-col items-center justify-start mt-[127px] p-[75px] md:px-10 sm:px-5 w-full">
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

export default SupportPagePage;
