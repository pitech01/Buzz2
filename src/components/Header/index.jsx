import React from "react";

import { Button, Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[84px] items-center justify-start w-auto md:w-full">
          <Img
            className="h-[92px] md:h-auto object-cover w-[78px] sm:w-full"
            src="images/img_buzzitlogo1.png"
            alt="buzzitlogoOne"
          />
          <div className="flex sm:flex-col flex-row sm:gap-10 gap-[60px] items-start justify-start w-auto md:w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-black-900 text-xl"
                size="txtMontserratRomanRegular20"
              >
                Home
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-black-900 text-xl"
                size="txtMontserratRomanRegular20"
              >
                Earn
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start">
              <Text
                className="text-indigo-900 text-xl"
                size="txtMontserratRomanRegular20Indigo900"
              >
                Advertise
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-black-900 text-xl"
                size="txtMontserratRomanRegular20"
              >
                Marketplace
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-black-900 text-xl"
                size="txtMontserratRomanRegular20"
              >
                Support
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-[47px] items-center justify-start w-auto">
          <Text
            className="text-black-900 text-xl w-auto"
            size="txtMontserratRomanRegular20"
          >
            Register
          </Text>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[124px]"
            leftIcon={
              <Img
                className="h-6 mb-0.5 mr-[9px]"
                src="images/img_mdiaccountoutline.svg"
                alt="mdi:account-outline"
              />
            }
            shape="round"
            color="indigo_900"
            size="md"
            variant="fill"
          >
            <div className="font-montserrat leading-[normal] text-left text-xl">
              Login
            </div>
          </Button>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
