import React from "react";

import { Button, Img, Text } from "components";

const MarketplaceProduct2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[172px] relative w-full">
          <Img
            className="h-[172px] m-auto object-cover w-full"
            src="images/img_image_7.png"
            alt="image"
          />
          <div className="absolute bottom-[31%] flex flex-row gap-2 items-center justify-center right-[7%] w-auto">
            <Button
              className="flex h-12 items-center justify-center rounded-[50%] w-12"
              shape="circle"
              color="white_A700"
              size="md"
              variant="fill"
            >
              <Img
                className="h-6"
                src="images/img_favorite.svg"
                alt="favorite"
              />
            </Button>
            <Button
              className="flex h-12 items-center justify-center rounded-[50%] w-12"
              shape="circle"
              color="white_A700"
              size="md"
              variant="fill"
            >
              <Img className="h-6" src="images/img_cart.svg" alt="cart" />
            </Button>
            <Button
              className="flex h-12 items-center justify-center rounded-[50%] w-12"
              shape="circle"
              color="indigo_900"
              size="md"
              variant="fill"
            >
              <Img className="h-6" src="images/img_eye.svg" alt="eye" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start w-auto">
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
                src="images/img_signal.svg"
                alt="signal_Four"
              />
            </div>
            <Text
              className="text-blue_gray-400 text-xs w-auto"
              size="txtPublicSansRegular12"
            >
              {props?.signalcount}
            </Text>
          </div>
          <Text
            className="leading-[20.00px] max-w-[202px] md:max-w-full text-gray-900 text-sm"
            size="txtPublicSansRegular14Gray900"
          >
            {props?.producttitle}
          </Text>
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-blue-500 text-sm w-auto"
              size="txtPublicSansSemiBold14"
            >
              {props?.price}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

MarketplaceProduct2.defaultProps = {
  signalcount: "(426)",
  producttitle: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
  price: "N250",
};

export default MarketplaceProduct2;
