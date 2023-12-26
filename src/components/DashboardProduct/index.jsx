import React from "react";

import { Button, Img, Text } from "components";

const DashboardProduct = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-3 items-center justify-center w-auto md:w-full">
          <div className="flex flex-col gap-2.5 items-start justify-center w-auto">
            {!!props?.userimage ? (
              <Img
                className="h-[175px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[183px] sm:w-full"
                alt="rectangleTwentyFive"
                src={props?.userimage}
              />
            ) : null}
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[146px] rounded-[5px]"
              leftIcon={
                <Img
                  className="h-5 mr-2.5"
                  src="images/img_mditag.svg"
                  alt="mdi:tag"
                />
              }
              color="gray_800"
              size="xs"
              variant="outline"
            >
              <div className="!text-gray-800 font-light font-signika leading-[normal] text-left text-sm">
                {props?.buttontext}
              </div>
            </Button>
          </div>
          <div className="flex flex-col gap-1 items-start justify-start w-auto md:w-full">
            <Text
              className="max-w-[201px] md:max-w-full text-black-900 text-xl"
              size="txtMontserratRomanRegular20"
            >
              {props?.earningstext}
            </Text>
            <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
              <Text
                className="text-[11px] text-indigo-500 w-auto"
                size="txtSignikaLight11"
              >
                {props?.moredetailstext}
              </Text>
              <Img
                className="h-[15px] w-[15px]"
                src="images/img_contrast.svg"
                alt="contrast"
              />
            </div>
            <div className="flex flex-row gap-[7px] items-start justify-start w-auto">
              <Text
                className="line-through text-base text-gray-400 w-auto"
                size="txtMontserratRomanSemiBold16"
              >
                {props?.edocounter1}
              </Text>
              <Text
                className="text-base text-black-900 w-auto"
                size="txtMontserratRomanSemiBold16Black900"
              >
                {props?.edocounter2}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start justify-center w-auto">
          <Button
            className="!text-indigo-900 cursor-pointer font-montserrat leading-[normal] rounded-[5px] text-center text-sm w-[186px]"
            color="indigo_900"
            size="sm"
            variant="outline"
          >
            {props?.buybutton}
          </Button>
          <Button
            className="cursor-pointer font-montserrat leading-[normal] min-w-[186px] rounded-[5px] text-center text-sm"
            color="indigo_900"
            size="sm"
            variant="fill"
          >
            {props?.resellbutton}
          </Button>
        </div>
      </div>
    </>
  );
};

DashboardProduct.defaultProps = {
  buttontext: "Others Category",
  earningstext: (
    <>
      Earn in Dollars with <br />
      Freelance jobs
    </>
  ),
  moredetailstext: "More Details",
  edocounter1: "EDO 5,600",
  edocounter2: "EDO 2,500",
  buybutton: "BUY THIS PRODUCT",
  resellbutton: "RESELL THIS PRODUCT",
};

export default DashboardProduct;
