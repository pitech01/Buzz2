import React from "react";

import { Button, Img, Line, List, PagerIndicator, Text } from "components";
import Header from "components/Header";

const HomePagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto py-[35px] w-full">
        <div className="flex flex-col gap-[54px] items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start max-w-[1376px] mx-auto md:px-5 w-full">
            <Header className="flex md:flex-col flex-row md:gap-10 gap-[284px] items-center justify-center w-full" />
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[46px] w-[97%] md:w-full">
              <div className="flex flex-col justify-start md:mt-0 mt-[78px]">
                <div className="md:h-[238px] h-[267px] relative w-full">
                  <Text
                    className="absolute capitalize left-[1%] text-2xl md:text-[22px] text-indigo-500 sm:text-xl top-[0]"
                    size="txtMontserratRomanSemiBold24"
                  >
                    Elevate your presence
                  </Text>
                  <Text
                    className="absolute bottom-[0] capitalize inset-x-[0] mx-auto md:text-5xl text-[100px] text-black-900"
                    size="txtMontserratRomanBold100"
                  >
                    <span className="text-black-900 font-montserrat text-left font-bold">
                      <>
                        monetize your
                        <br />
                      </>
                    </span>
                    <span className="text-indigo-500 font-montserrat text-left font-bold">
                      PASSIONS
                    </span>
                    <span className="text-black-900 font-montserrat text-left font-bold">
                      {" "}
                    </span>
                  </Text>
                </div>
                <Text
                  className="capitalize md:ml-[0] ml-[5px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                  size="txtMontserratRomanBold28Black900"
                >
                  Every Interaction is an opportunity.{" "}
                </Text>
                <div className="flex flex-row gap-3.5 items-center justify-start ml-1.5 md:ml-[0] mt-[34px] w-[46%] md:w-full">
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[149px] text-center text-xl"
                    shape="round"
                    color="indigo_900"
                    size="md"
                    variant="fill"
                  >
                    Get Started
                  </Button>
                  <Text
                    className="text-black-900 text-xl"
                    size="txtMontserratRomanRegular20"
                  >
                    #MonetizeYourBuzz
                  </Text>
                </div>
                <Line className="bg-indigo-500 h-px ml-1.5 md:ml-[0] mr-[34px] mt-[49px] w-[96%]" />
                <List
                  className="sm:flex-col flex-row gap-[53px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start md:ml-[0] ml-[11px] mt-12 w-auto md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-row gap-4 items-center justify-center w-auto">
                    <Img
                      className="h-10 w-10"
                      src="images/img_mdiaccounttagoutline.svg"
                      alt="mdiaccounttagou"
                    />
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
                        size="txtMontserratRomanBold40"
                      >
                        20,000+
                      </Text>
                      <Text
                        className="text-black-900 text-xl w-auto"
                        size="txtMontserratRomanRegular20"
                      >
                        Members
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-center w-auto">
                    <Img
                      className="h-10 w-10"
                      src="images/img_icons8advertising.svg"
                      alt="icons8advertisi"
                    />
                    <div className="flex flex-col items-start justify-center w-auto">
                      <Text
                        className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
                        size="txtMontserratRomanBold40"
                      >
                        5,000+
                      </Text>
                      <Text
                        className="text-black-900 text-xl w-auto"
                        size="txtMontserratRomanRegular20"
                      >
                        Advertisers
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-center w-auto">
                    <Img
                      className="h-10 w-10"
                      src="images/img_riadvertisementline.svg"
                      alt="riadvertisement"
                    />
                    <div className="flex flex-col gap-[3px] items-start justify-center w-auto">
                      <Text
                        className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
                        size="txtMontserratRomanBold40"
                      >
                        10,000+
                      </Text>
                      <Text
                        className="text-black-900 text-xl w-auto"
                        size="txtMontserratRomanRegular20"
                      >
                        Advert
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <Img
                className="h-[771px] md:h-auto object-cover"
                src="images/img_image1_771x369.png"
                alt="imageOne"
              />
            </div>
            <div className="flex flex-col md:gap-10 gap-[85px] items-center justify-start mt-[143px] w-[90%] md:w-full">
              <div className="h-28 md:h-[79px] relative w-[52%] md:w-full">
                <Text
                  className="absolute inset-x-[0] mx-auto md:text-5xl text-[64px] text-black-900 text-center top-[0] w-max"
                  size="txtMontserratRomanBold64Black900"
                >
                  <span className="text-black-900 font-montserrat font-bold">
                    Welcome to{" "}
                  </span>
                  <span className="text-indigo-500 font-montserrat font-bold">
                    Buzzy{" "}
                  </span>
                </Text>
                <Text
                  className="absolute bottom-[0] capitalize inset-x-[0] italic mx-auto text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-max"
                  size="txtMontserratItalicRegular30"
                >
                  where every interaction is an opportunity
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  className="md:flex-1 h-[771px] sm:h-auto object-cover w-[30%] md:w-full"
                  src="images/img_image1_771x369.png"
                  alt="imageTwo"
                />
                <div className="flex flex-col gap-[42px] items-start justify-start md:ml-[0] ml-[57px] w-auto">
                  <div className="flex flex-col gap-[27px] h-[342px] md:h-auto items-start justify-start w-auto">
                    <Text
                      className="text-black-900 text-xl w-auto"
                      size="txtMontserratRomanRegular20"
                    >
                      For Advertisers
                    </Text>
                    <Text
                      className="capitalize max-w-[329px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                      size="txtMontserratRomanBold28Black900"
                    >
                      Encourage people to distribute your promotional content on
                      their social media.
                    </Text>
                    <Text
                      className="max-w-[329px] md:max-w-full text-black-900 text-xl"
                      size="txtMontserratRomanRegular20"
                    >
                      Engage individuals with a minimum of 1,000 followers to
                      share your advertisements and undertake social tasks on
                      their social media accounts for you.
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[196px] text-center text-xl"
                    shape="round"
                    color="indigo_900"
                    size="md"
                    variant="fill"
                  >
                    SIGN UP TODAY
                  </Button>
                </div>
                <div className="flex flex-col gap-11 items-start justify-start md:ml-[0] ml-[154px] w-auto">
                  <div className="flex flex-col gap-[26px] items-start justify-start w-auto">
                    <Text
                      className="text-black-900 text-xl w-auto"
                      size="txtMontserratRomanRegular20"
                    >
                      For Earners
                    </Text>
                    <Text
                      className="capitalize max-w-[329px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                      size="txtMontserratRomanBold28Black900"
                    >
                      Earn money by sharing advertisements on your social media.
                    </Text>
                    <Text
                      className="max-w-[329px] md:max-w-full text-black-900 text-xl"
                      size="txtMontserratRomanRegular20"
                    >
                      Generate consistent income by reselling products, posting
                      ads, and completing social tasks for businesses and top
                      brands on your social media.
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[196px] text-center text-xl"
                    shape="round"
                    color="indigo_900"
                    size="md"
                    variant="fill"
                  >
                    SIGN UP TODAY
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-indigo-900 flex flex-col items-center justify-start p-[82px] md:px-10 sm:px-5 w-full">
              <Text
                className="md:text-5xl text-[64px] text-center text-gray-100"
                size="txtMontserratRomanBold64"
              >
                <>
                  What others have said
                  <br />
                  about Buzzy
                </>
              </Text>
              <Text
                className="mt-[17px] text-center text-gray-100 text-xl w-[45%] sm:w-full"
                size="txtMontserratRomanRegular20Gray100"
              >
                Buzzy is poised to redefine the social media landscape by
                combining social interaction, targeted advertising, and
                e-commerce in a seamless and user-friendly manner.
              </Text>
              <div className="flex md:flex-col flex-row font-manrope md:gap-10 gap-[124px] items-center justify-between max-w-[1141px] mt-[79px] mx-auto w-full">
                <div className="border-2 border-gray-100 border-solid flex flex-col items-center justify-center sm:px-5 px-[30px] py-[23px] rounded-[50%] w-20">
                  <Img
                    className="h-[34px] w-5"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft"
                  />
                </div>
                <div className="h-[310px] md:h-auto p-12 md:px-10 sm:px-5 relative w-[733px] md:w-full">
                  <div className="h-[310px] ml-auto my-auto w-[96%] md:w-full">
                    <div className="bg-black-900_01 h-[310px] ml-auto my-auto outline outline-[8px] outline-white-A700 rounded-[16px] shadow-bs1 w-full"></div>
                    <div className="absolute flex flex-col gap-8 h-max inset-y-[0] items-start justify-start my-auto md:pl-10 sm:pl-5 pl-[180px] right-[2%] w-full">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
                        size="txtManropeBold40"
                      >
                        Debbie Hagenes
                      </Text>
                      <Text
                        className="leading-[36.00px] max-w-[457px] md:max-w-full text-2xl md:text-[22px] text-indigo-100 sm:text-xl"
                        size="txtManropeMedium24"
                      >
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit.
                      </Text>
                      <div className="flex flex-row gap-4 items-center justify-center w-auto">
                        <List
                          className="sm:flex-col flex-row grid grid-cols-5 justify-start w-auto"
                          orientation="horizontal"
                        >
                          <div className="flex flex-col items-center justify-start w-full">
                            <Img
                              className="h-7 rounded-[1px] w-7"
                              src="images/img_star1.svg"
                              alt="starOne"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <Img
                              className="h-7 rounded-[1px] w-7"
                              src="images/img_star1_28x28.svg"
                              alt="starOne"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <Img
                              className="h-7 rounded-[1px] w-7"
                              src="images/img_star1_1.svg"
                              alt="starOne"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <Img
                              className="h-7 rounded-[1px] w-7"
                              src="images/img_star1_2.svg"
                              alt="starOne"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <Img
                              className="h-7 rounded-[1px] w-7"
                              src="images/img_star1_3.svg"
                              alt="starOne"
                            />
                          </div>
                        </List>
                        <Text
                          className="text-indigo-100 text-xl w-auto"
                          size="txtManropeRegular20"
                        >
                          5.0 rating
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute bottom-[15%] h-[218px] left-[15%] object-cover rounded-[16px] w-[210px]"
                    src="images/img_rectangle12.png"
                    alt="rectangleTwelve"
                  />
                </div>
                <div className="border-2 border-gray-100 border-solid flex flex-col items-center justify-center sm:px-5 px-[30px] py-[23px] rotate-[180deg] rounded-[50%] w-20">
                  <Img
                    className="h-[34px] w-5"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
              <PagerIndicator
                className="flex gap-[21px] h-[25px] items-start justify-start mb-1 mt-[150px] w-[209px]"
                count={5}
                activeCss="inline-block cursor-pointer rounded-[50%] h-[25px] border-gray-100 border-2 border-solid w-[25px]"
                activeIndex={1}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-[25px] bg-blue_gray-100 w-[25px]"
                selectedWrapperCss="inline-block"
                unselectedWrapperCss="inline-block"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[98px] items-center justify-center max-w-[1250px] mt-[63px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start w-[53%] md:w-full">
                <Text
                  className="text-indigo-900 text-xl"
                  size="txtMontserratRomanRegular20Indigo900"
                >
                  How to Earn
                </Text>
                <Text
                  className="capitalize mt-[26px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-[96%] sm:w-full"
                  size="txtMontserratRomanBold40"
                >
                  <span className="text-black-900 font-montserrat text-left font-bold">
                    Transform your social media activity into a lucrative
                    opportunity with{" "}
                  </span>
                  <span className="text-indigo-500 font-montserrat text-left font-bold">
                    buzzy!
                  </span>
                </Text>
                <Text
                  className="mt-[27px] text-black-900 text-xl"
                  size="txtMontserratRomanRegular20"
                >
                  For a one-time fee of EDO1000, enjoy lifetime access to:
                </Text>
                <div className="flex flex-col gap-[35px] items-start justify-center mt-[43px] w-auto md:w-full">
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
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-center mt-[49px] w-auto sm:w-full">
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[196px] text-center text-xl"
                    shape="round"
                    color="indigo_900"
                    size="md"
                    variant="fill"
                  >
                    SIGN UP TODAY
                  </Button>
                  <Text
                    className="text-black-900 text-xl w-auto"
                    size="txtMontserratRomanRegular20"
                  >
                    #MonetizeYourBuzz
                  </Text>
                </div>
              </div>
              <Img
                className="md:flex-1 h-[910px] sm:h-auto object-cover w-2/5 md:w-full"
                src="images/img_image1_771x369.png"
                alt="imageThree"
              />
            </div>
            <div className="bg-indigo-900 flex flex-col items-center justify-start mt-[84px] p-[75px] md:px-10 sm:px-5 w-full">
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

export default HomePagePage;
