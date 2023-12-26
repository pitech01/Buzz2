import React from "react";

import { Button, Img, Text } from "components";

const MarketplacePagination = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button
          className="flex h-10 items-center justify-center rounded-[50%] w-10"
          shape="circle"
          color="indigo_900"
          size="sm"
          variant="outline"
        >
          <Img className="h-6" src="images/img_arrowdown.svg" alt="arrowdown" />
        </Button>
        <div className="flex flex-row gap-2 items-start justify-start w-auto">
          <Text
            className="bg-indigo-900 flex h-10 items-center justify-center rounded-[50%] text-center text-sm text-white-A700 w-10"
            size="txtPublicSansSemiBold14WhiteA700"
          >
            {props?.pageone}
          </Text>
          <Text
            className="bg-white-A700 border border-gray-300 border-solid flex h-10 items-center justify-center rounded-[50%] text-center text-gray-900 text-sm w-10"
            size="txtPublicSansRegular14Gray900"
          >
            {props?.pagetwo}
          </Text>
          <Text
            className="bg-white-A700 border border-gray-300 border-solid flex h-10 items-center justify-center rounded-[50%] text-center text-gray-900 text-sm w-10"
            size="txtPublicSansRegular14Gray900"
          >
            {props?.pagethree}
          </Text>
          <Text
            className="bg-white-A700 border border-gray-300 border-solid flex h-10 items-center justify-center rounded-[50%] text-center text-gray-900 text-sm w-10"
            size="txtPublicSansRegular14Gray900"
          >
            {props?.pagefour}
          </Text>
          <Text
            className="bg-white-A700 border border-gray-300 border-solid flex h-10 items-center justify-center rounded-[50%] text-center text-gray-900 text-sm w-10"
            size="txtPublicSansRegular14Gray900"
          >
            {props?.pagefive}
          </Text>
          <Text
            className="bg-white-A700 border border-gray-300 border-solid flex h-10 items-center justify-center rounded-[50%] text-center text-gray-900 text-sm w-10"
            size="txtPublicSansRegular14Gray900"
          >
            {props?.pagesix}
          </Text>
        </div>
        <Button
          className="flex h-10 items-center justify-center rounded-[50%] w-10"
          shape="circle"
          color="indigo_900"
          size="sm"
          variant="outline"
        >
          <Img
            className="h-6"
            src="images/img_arrowdown.svg"
            alt="arrowdown_One"
          />
        </Button>
      </div>
    </>
  );
};

MarketplacePagination.defaultProps = {
  pageone: "01",
  pagetwo: "02",
  pagethree: "03",
  pagefour: "04",
  pagefive: "05",
  pagesix: "06",
};

export default MarketplacePagination;
