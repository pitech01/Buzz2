import React from "react";

import { Button, Img, Text } from "components";

const MarketplaceProduct = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-44 md:h-[172px] relative w-[99%]">
          <Img
            className="absolute h-[172px] inset-[0] justify-center m-auto object-cover w-[99%]"
            alt="image"
            src={props?.image}
          />
          <Button
            className="!text-gray-900 absolute cursor-pointer font-publicsans font-semibold left-[0] min-w-[73px] rounded-sm text-center text-xs top-[0]"
            color="amber_A200"
            size="xs"
            variant="fill"
          >
            {props?.p25off}
          </Button>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start mb-1 w-auto">
          <div className="flex flex-row gap-1 items-start justify-start w-auto">
            <div className="flex flex-row items-start justify-start w-auto">
              <Img
                className="h-4 w-4"
                src="images/img_signal.svg"
                alt="signal"
              />
              <Img
                className="h-4 w-4"
                src="images/img_signal.svg"
                alt="signal_One"
              />
              <Img
                className="h-4 w-4"
                src="images/img_signal.svg"
                alt="signal_Two"
              />
              <Img
                className="h-4 w-4"
                src="images/img_signal.svg"
                alt="signal_Three"
              />
              <Img
                className="h-4 w-4"
                alt="signal_Four"
                src={props?.signalFour}
              />
            </div>
            <Text
              className="text-blue_gray-400 text-xs w-auto"
              size="txtPublicSansRegular12"
            >
              {props?.p56767}
            </Text>
          </div>
          <Text
            className="leading-[20.00px] max-w-[202px] md:max-w-full text-gray-900 text-sm"
            size="txtPublicSansRegular14Gray900"
          >
            {props?.dell215inchfull}
          </Text>
          <div className="flex flex-row gap-1 items-start justify-start w-auto">
            {!!props?.p86599 ? (
              <Text
                className="line-through text-blue_gray-300 text-sm w-auto"
                size="txtPublicSansRegular14Bluegray300"
              >
                {props?.p86599}
              </Text>
            ) : null}
            <Text
              className="text-blue-500 text-sm w-auto"
              size="txtPublicSansSemiBold14"
            >
              {props?.p44212}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

MarketplaceProduct.defaultProps = {
  image: "images/img_image_6.png",
  p25off: "25% OFF",
  signalFour: "images/img_signal_white_a700.svg",
  p56767: "(877)",
  dell215inchfull:
    "Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...",
  p44212: "N1,200",
};

export default MarketplaceProduct;
