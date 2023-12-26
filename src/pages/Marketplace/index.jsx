import React from "react";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  Radio,
  RadioGroup,
  SelectBox,
  Text,
} from "components";
import Header from "components/Header";
import MarketplacePagination from "components/MarketplacePagination";
import MarketplaceProduct from "components/MarketplaceProduct";
import MarketplaceProduct1 from "components/MarketplaceProduct1";
import MarketplaceProduct2 from "components/MarketplaceProduct2";

const dropdownOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MarketplacePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto py-[33px] w-full">
        <div className="flex flex-col items-center justify-start mb-0.5 w-full">
          <div className="flex flex-col gap-8 items-center justify-start max-w-[1376px] mx-auto md:px-5 w-full">
            <Header className="flex md:flex-col flex-row md:gap-10 gap-[284px] items-center justify-center w-full" />
            <div className="flex md:flex-col flex-row font-publicsans gap-6 items-start justify-start max-w-[1364px] pb-[72px] pt-10 w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <Text
                    className="text-base text-gray-900 uppercase w-auto"
                    size="txtPublicSansMedium16"
                  >
                    Category
                  </Text>
                  <RadioGroup
                    selectedValue="ElectronicsDevices"
                    className="flex flex-col gap-3 items-start justify-start w-auto"
                    name="radio"
                  >
                    <Radio
                      value="ElectronicsDevices"
                      className="font-medium sm:pr-5 text-gray-900 text-left text-sm"
                      inputClassName="bg-indigo-900 h-5 mr-[5px] rounded-[10px] w-5"
                      checked={true}
                      name="radio"
                      label="Electronics Devices"
                      id="ElectronicsDevices"
                    ></Radio>
                    <Radio
                      value="ComputerLaptop"
                      className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                      inputClassName="bg-white-A700 border border-blue_gray-100_02 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                      checked={false}
                      name="radio"
                      label="Computer  Laptop"
                      id="ComputerLaptop"
                    ></Radio>
                    <Radio
                      value="ComputerAccessories"
                      className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                      inputClassName="bg-white-A700 border border-blue_gray-100_02 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                      checked={false}
                      name="radio"
                      label="Computer Accessories"
                      id="ComputerAccessories"
                    ></Radio>
                    <Radio
                      value="SmartPhone"
                      className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                      inputClassName="bg-white-A700 border border-blue_gray-100_02 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                      checked={false}
                      name="radio"
                      label="SmartPhone"
                      id="SmartPhone"
                    ></Radio>
                    <Radio
                      value="Headphone"
                      className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                      inputClassName="bg-white-A700 border border-blue_gray-100_02 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                      checked={false}
                      name="radio"
                      label="Headphone"
                      id="Headphone"
                    ></Radio>
                    <Radio
                      value="MobileAccessories"
                      className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                      inputClassName="bg-white-A700 border border-blue_gray-100_02 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                      checked={false}
                      name="radio"
                      label="Mobile Accessories"
                      id="MobileAccessories"
                    ></Radio>
                    <Radio
                      value="GamingConsole"
                      className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                      inputClassName="bg-white-A700 border border-blue_gray-100_02 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                      checked={false}
                      name="radio"
                      label="Gaming Console"
                      id="GamingConsole"
                    ></Radio>
                    <Radio
                      value="CameraPhoto"
                      className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                      inputClassName="bg-white-A700 border border-blue_gray-100_02 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                      checked={false}
                      name="radio"
                      label="Camera  Photo"
                      id="CameraPhoto"
                    ></Radio>
                    <Radio
                      value="TVHomesAppliances"
                      className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                      inputClassName="bg-white-A700 border border-blue_gray-100_02 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                      checked={false}
                      name="radio"
                      label="TV  Homes Appliances"
                      id="TVHomesAppliances"
                    ></Radio>
                    <Radio
                      value="WatchsAccessories"
                      className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                      inputClassName="bg-white-A700 border border-blue_gray-100_02 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                      checked={false}
                      name="radio"
                      label="Watchs  Accessories"
                      id="WatchsAccessories"
                    ></Radio>
                    <Radio
                      value="GPSNavigation"
                      className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                      inputClassName="bg-white-A700 border border-blue_gray-100_02 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                      checked={false}
                      name="radio"
                      label="GPS  Navigation"
                      id="GPSNavigation"
                    ></Radio>
                    <Radio
                      value="WarableTechnology"
                      className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                      inputClassName="bg-white-A700 border border-blue_gray-100_02 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                      checked={false}
                      name="radio"
                      label="Warable Technology"
                      id="WarableTechnology"
                    ></Radio>
                  </RadioGroup>
                </div>
                <Line className="bg-gray-300 h-px w-full" />
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <Text
                    className="text-base text-gray-900 uppercase w-auto"
                    size="txtPublicSansMedium16"
                  >
                    Price Range
                  </Text>
                  <Img
                    className="h-3 w-[312px]"
                    src="images/img_pricerange.svg"
                    alt="pricerange_One"
                  />
                  <div className="flex flex-row gap-3 items-start justify-start w-auto">
                    <Text
                      className="bg-white-A700 border border-gray-300 border-solid justify-center pl-3 sm:pr-5 pr-[35px] py-[11px] rounded-[3px] text-blue_gray-400 text-sm w-auto"
                      size="txtPublicSansRegular14"
                    >
                      Min price
                    </Text>
                    <Text
                      className="bg-white-A700 border border-gray-300 border-solid justify-center pl-3 sm:pr-5 pr-[35px] py-[11px] rounded-[3px] text-blue_gray-400 text-sm w-auto"
                      size="txtPublicSansRegular14"
                    >
                      Max price
                    </Text>
                  </div>
                  <RadioGroup
                    className="flex flex-col gap-3 items-start justify-start w-auto"
                    name="radio1"
                  >
                    <Radio
                      value="AllPrice"
                      className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                      inputClassName="bg-white-A700 border border-blue_gray-100_02 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                      checked={false}
                      name="radio1"
                      label="All Price"
                      id="AllPrice"
                    ></Radio>
                    <Radio
                      value="UnderN20"
                      className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                      inputClassName="bg-white-A700 border border-blue_gray-100_02 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                      checked={false}
                      name="radio1"
                      label="Under N20"
                      id="UnderN20"
                    ></Radio>
                    <Radio
                      value="N25toN100"
                      className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                      inputClassName="bg-white-A700 border border-blue_gray-100_02 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                      checked={false}
                      name="radio1"
                      label="N25 to N100"
                      id="N25toN100"
                    ></Radio>
                    <Radio
                      value="N100toN300"
                      className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                      inputClassName="bg-white-A700 border border-blue_gray-100_02 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                      checked={false}
                      name="radio1"
                      label="N100 to N300"
                      id="N100toN300"
                    ></Radio>
                    <Radio
                      value="N300toN500"
                      className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                      inputClassName="bg-white-A700 border-2 border-indigo-900 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                      checked={false}
                      name="radio1"
                      label="N300 to N500"
                      id="N300toN500"
                    ></Radio>
                    <Radio
                      value="N500toN1000"
                      className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                      inputClassName="bg-white-A700 border border-blue_gray-100_02 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                      checked={false}
                      name="radio1"
                      label="N500 to N1000"
                      id="N500toN1000"
                    ></Radio>
                    <Radio
                      value="N1000toN10000"
                      className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                      inputClassName="bg-white-A700 border border-blue_gray-100_02 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                      checked={false}
                      name="radio1"
                      label="N1000 to N10000"
                      id="N1000toN10000"
                    ></Radio>
                  </RadioGroup>
                </div>
                <Line className="bg-gray-300 h-px w-full" />
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <Text
                    className="text-base text-gray-900 uppercase w-auto"
                    size="txtPublicSansMedium16"
                  >
                    popular Brands
                  </Text>
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <div className="flex flex-row gap-2 items-start justify-start w-auto sm:w-full">
                      <CheckBox
                        className="text-left text-sm"
                        inputClassName="h-5 mr-[5px] rounded-sm w-5"
                        name="apple"
                        id="apple"
                        label="Apple"
                        color="indigo_900"
                      ></CheckBox>
                      <CheckBox
                        className="text-left text-sm"
                        inputClassName="h-5 mr-[5px] rounded-sm w-5"
                        name="google"
                        id="google"
                        label="Google"
                        color="indigo_900"
                      ></CheckBox>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-start w-auto sm:w-full">
                      <CheckBox
                        className="text-left text-sm"
                        inputClassName="h-5 mr-[5px] rounded-sm w-5"
                        name="microsoft"
                        id="microsoft"
                        label="Microsoft"
                        color="indigo_900"
                      ></CheckBox>
                      <CheckBox
                        className="text-left text-sm"
                        inputClassName="border border-blue_gray-100_02 border-solid h-5 mr-[5px] rounded-sm w-5"
                        name="samsung"
                        id="samsung"
                        label="Samsung"
                      ></CheckBox>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-start w-auto sm:w-full">
                      <CheckBox
                        className="text-left text-sm"
                        inputClassName="border border-blue_gray-100_02 border-solid h-5 mr-[5px] rounded-sm w-5"
                        name="dell"
                        id="dell"
                        label="Dell"
                      ></CheckBox>
                      <CheckBox
                        className="text-left text-sm"
                        inputClassName="h-5 mr-[5px] rounded-sm w-5"
                        name="hp"
                        id="hp"
                        label="HP"
                        color="indigo_900"
                      ></CheckBox>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-start w-auto sm:w-full">
                      <CheckBox
                        className="text-left text-sm"
                        inputClassName="border border-blue_gray-100_02 border-solid h-5 mr-[5px] rounded-sm w-5"
                        name="symphony"
                        id="symphony"
                        label="Symphony"
                      ></CheckBox>
                      <CheckBox
                        className="text-left text-sm"
                        inputClassName="border border-blue_gray-100_02 border-solid h-5 mr-[5px] rounded-sm w-5"
                        name="xiaomi"
                        id="xiaomi"
                        label="Xiaomi"
                      ></CheckBox>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-start w-auto sm:w-full">
                      <CheckBox
                        className="text-left text-sm"
                        inputClassName="border-2 border-indigo-900 border-solid h-5 mr-[5px] rounded-sm w-5"
                        name="sony"
                        id="sony"
                        label="Sony"
                      ></CheckBox>
                      <CheckBox
                        className="text-left text-sm"
                        inputClassName="h-5 mr-[5px] rounded-sm w-5"
                        name="panasonic"
                        id="panasonic"
                        label="Panasonic"
                        color="indigo_900"
                      ></CheckBox>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-start w-auto sm:w-full">
                      <CheckBox
                        className="text-left text-sm"
                        inputClassName="h-5 mr-[5px] rounded-sm w-5"
                        name="lg"
                        id="lg"
                        label="LG"
                        color="indigo_900"
                      ></CheckBox>
                      <CheckBox
                        className="text-left text-sm"
                        inputClassName="border border-blue_gray-100_02 border-solid h-5 mr-[5px] rounded-sm w-5"
                        name="intel"
                        id="intel"
                        label="Intel"
                      ></CheckBox>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <CheckBox
                        className="text-left text-sm"
                        inputClassName="border border-blue_gray-100_02 border-solid h-5 mr-[5px] rounded-sm w-5"
                        name="oneplus"
                        id="oneplus"
                        label="One Plus"
                      ></CheckBox>
                    </div>
                  </div>
                </div>
                <Line className="bg-gray-300 h-px w-full" />
                <div className="flex flex-col gap-[18px] items-start justify-start w-auto">
                  <Text
                    className="text-base text-gray-900 uppercase w-auto"
                    size="txtPublicSansMedium16"
                  >
                    Popular Tag
                  </Text>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <div className="flex flex-row gap-2 items-start justify-start w-auto">
                      <Button
                        className="cursor-pointer font-medium min-w-[63px] rounded-sm text-center text-sm"
                        color="gray_300"
                        size="sm"
                        variant="outline"
                      >
                        Game
                      </Button>
                      <Button
                        className="cursor-pointer font-medium min-w-[69px] rounded-sm text-center text-sm"
                        color="gray_300"
                        size="sm"
                        variant="outline"
                      >
                        iPhone
                      </Button>
                      <Button
                        className="cursor-pointer font-medium min-w-[43px] rounded-sm text-center text-sm"
                        color="gray_300"
                        size="sm"
                        variant="outline"
                      >
                        TV
                      </Button>
                      <Button
                        className="cursor-pointer font-medium min-w-[113px] rounded-sm text-center text-sm"
                        color="gray_300"
                        size="sm"
                        variant="outline"
                      >
                        Asus Laptops
                      </Button>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-start w-auto">
                      <Button
                        className="cursor-pointer font-medium min-w-[85px] rounded-sm text-center text-sm"
                        color="gray_300"
                        size="sm"
                        variant="outline"
                      >
                        Macbook{" "}
                      </Button>
                      <Button
                        className="cursor-pointer font-medium min-w-[53px] rounded-sm text-center text-sm"
                        color="gray_300"
                        size="sm"
                        variant="outline"
                      >
                        SSD
                      </Button>
                      <Button
                        className="border border-indigo-900 border-solid cursor-pointer font-medium min-w-[117px] rounded-sm text-center text-sm"
                        color="red_50"
                        size="sm"
                        variant="fill"
                      >
                        Graphics Card{" "}
                      </Button>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-start w-auto">
                      <Button
                        className="cursor-pointer font-medium min-w-[102px] rounded-sm text-center text-sm"
                        color="gray_300"
                        size="sm"
                        variant="outline"
                      >
                        Power Bank{" "}
                      </Button>
                      <Button
                        className="cursor-pointer font-medium min-w-[87px] rounded-sm text-center text-sm"
                        color="gray_300"
                        size="sm"
                        variant="outline"
                      >
                        Smart TV
                      </Button>
                      <Button
                        className="cursor-pointer font-medium min-w-[79px] rounded-sm text-center text-sm"
                        color="gray_300"
                        size="sm"
                        variant="outline"
                      >
                        Speaker
                      </Button>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-start w-auto">
                      <Button
                        className="cursor-pointer font-medium min-w-[66px] rounded-sm text-center text-sm"
                        color="gray_300"
                        size="sm"
                        variant="outline"
                      >
                        Tablet
                      </Button>
                      <Button
                        className="cursor-pointer font-medium min-w-[95px] rounded-sm text-center text-sm"
                        color="gray_300"
                        size="sm"
                        variant="outline"
                      >
                        Microwave
                      </Button>
                      <Button
                        className="cursor-pointer font-medium min-w-[86px] rounded-sm text-center text-sm"
                        color="gray_300"
                        size="sm"
                        variant="outline"
                      >
                        Samsung
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[73%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 gap-[307px] items-start justify-between w-auto md:w-full">
                  <Input
                    name="search"
                    placeholder="Search for anything..."
                    className="p-0 placeholder:text-blue_gray-400 text-left text-sm w-full"
                    wrapClassName="border border-gray-300 border-solid flex rounded-sm w-auto md:w-full"
                    suffix={
                      <Img
                        className="h-5 ml-[35px] my-auto"
                        src="images/img_rewind.svg"
                        alt="rewind"
                      />
                    }
                    color="white_A700"
                    size="md"
                    variant="fill"
                  ></Input>
                  <div className="flex flex-row gap-[22px] items-center justify-start w-auto">
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPublicSansRegular14Gray900"
                    >
                      Sort by:
                    </Text>
                    <SelectBox
                      className="border border-gray-300 border-solid text-left text-sm w-[72%] sm:w-full"
                      placeholderClassName="text-blue_gray-700"
                      indicator={
                        <Img
                          className="h-4 mr-[0] w-4"
                          src="images/img_arrowdown_blue_gray_200_01.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="dropdown"
                      options={dropdownOptionsList}
                      isSearchable={false}
                      placeholder="Most Popular"
                      shape="round"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    />
                  </div>
                </div>
                <div className="bg-gray-100_01 flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[984px] mt-4 sm:px-5 px-6 py-3 rounded w-full">
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-4 items-center justify-start w-auto sm:w-full">
                    <Text
                      className="text-blue_gray-600 text-sm w-auto"
                      size="txtPublicSansRegular14Bluegray600"
                    >
                      Active Filters:
                    </Text>
                    <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtPublicSansRegular14Gray900"
                      >
                        Electronics Devices
                      </Text>
                      <Img
                        className="h-3 w-3"
                        src="images/img_close.svg"
                        alt="close"
                      />
                    </div>
                    <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtPublicSansRegular14Gray900"
                      >
                        5 Star Rating
                      </Text>
                      <Img
                        className="h-3 w-3"
                        src="images/img_close.svg"
                        alt="close_One"
                      />
                    </div>
                  </div>
                  <Text
                    className="text-gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14Gray900"
                  >
                    <span className="text-gray-900 font-publicsans text-left font-semibold">
                      65,867
                    </span>
                    <span className="text-gray-900 font-publicsans text-left font-normal">
                      {" "}
                    </span>
                    <span className="text-blue_gray-600 font-publicsans text-left font-normal">
                      Results found.
                    </span>
                  </Text>
                </div>
                <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start min-h-[auto] mt-6 w-auto md:w-full">
                  <MarketplaceProduct
                    className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-3 rounded-[3px] hover:shadow-bs hover:w-full w-full"
                    image="images/img_image.png"
                    p25off="HOT"
                    signalFour="images/img_signal.svg"
                    p56767="(738)"
                    dell215inchfull="TOZO T6 True Wireless Earbuds Bluetooth Headphon..."
                    p44212="N70"
                  />
                  <MarketplaceProduct1
                    className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-4 rounded-[3px] hover:shadow-bs hover:w-full w-full"
                    image="images/img_image_172x202.png"
                    text="536)"
                    dell215inchfull="Samsung Electronics Samsung Galexy S21 5G"
                    pricen80="N2,300"
                  />
                  <MarketplaceProduct
                    className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-3 rounded-[3px] hover:shadow-bs hover:w-full w-full"
                    image="images/img_image_2.png"
                    p25off="BEST DEALS"
                    signalFour="images/img_signal.svg"
                    p56767="423)"
                    dell215inchfull="Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6..."
                    p44212="N360"
                  />
                  <MarketplaceProduct1
                    className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-4 rounded-[3px] hover:shadow-bs hover:w-full w-full"
                    image="images/img_image_3.png"
                    signalFour="images/img_signal_white_a700.svg"
                    text="816)"
                  />
                  <MarketplaceProduct1
                    className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-4 rounded-[3px] hover:shadow-bs hover:w-full w-full"
                    image="images/img_image_4.png"
                    text="(647)"
                    dell215inchfull="Wired Over-Ear Gaming Headphones with USB"
                    pricen80="N1,500"
                  />
                  <MarketplaceProduct
                    className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-3 rounded-[3px] hover:shadow-bs hover:w-full w-full"
                    p86599="N1600"
                  />
                  <MarketplaceProduct2 className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-4 rounded-[3px] hover:shadow-bs shadow-bs hover:w-full w-full" />
                  <MarketplaceProduct
                    className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-3 rounded-[3px] hover:shadow-bs hover:w-full w-full"
                    image="images/img_image_8.png"
                    p25off="SALE"
                    signalFour="images/img_signal.svg"
                    p56767="(583)"
                    dell215inchfull="4K UHD LED Smart TV with Chromecast Built-in"
                    p44212="N220"
                  />
                  <MarketplaceProduct
                    className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-3 rounded-[3px] hover:shadow-bs hover:w-full w-full"
                    image="images/img_image_9.png"
                    p25off="BEST DEALS"
                    p56767="(994)"
                    dell215inchfull="Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6..."
                    p44212="N360"
                  />
                  <MarketplaceProduct1
                    className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-4 rounded-[3px] hover:shadow-bs hover:w-full w-full"
                    image="images/img_image_3.png"
                  />
                  <MarketplaceProduct
                    className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-3 rounded-[3px] hover:shadow-bs hover:w-full w-full"
                    image="images/img_image_10.png"
                    p25off="HOT"
                    signalFour="images/img_signal.svg"
                    p56767="(600)"
                    dell215inchfull="TOZO T6 True Wireless Earbuds Bluetooth Headphon..."
                    p44212="N70"
                  />
                  <MarketplaceProduct1
                    className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-4 rounded-[3px] hover:shadow-bs hover:w-full w-full"
                    image="images/img_image_11.png"
                    text="(492)"
                    dell215inchfull="Dell Optiplex 7000x7480 All-in-One Computer Monitor"
                    pricen80="N250"
                  />
                  <MarketplaceProduct1
                    className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-4 rounded-[3px] hover:shadow-bs hover:w-full w-full"
                    image="images/img_image_12.png"
                    signalFour="images/img_signal_white_a700.svg"
                    text="(740)"
                    dell215inchfull="Samsung Electronics Samsung Galexy S21 5G"
                    pricen80="N2,300"
                  />
                  <MarketplaceProduct
                    className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-3 rounded-[3px] hover:shadow-bs hover:w-full w-full"
                    image="images/img_image_13.png"
                    p25off="SALE"
                    p56767="(556)"
                    dell215inchfull="4K UHD LED Smart TV with Chromecast Built-in"
                    p44212="N220"
                  />
                  <MarketplaceProduct1
                    className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-4 rounded-[3px] hover:shadow-bs hover:w-full w-full"
                    image="images/img_image_14.png"
                    signalFour="images/img_signal_white_a700.svg"
                    text="(536)"
                    dell215inchfull="Wired Over-Ear Gaming Headphones with USB"
                    pricen80="N1,500"
                  />
                  <MarketplaceProduct
                    className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-3 rounded-[3px] hover:shadow-bs hover:w-full w-full"
                    image="images/img_image_15.png"
                    p56767="(423)"
                    p86599="N1600"
                  />
                  <MarketplaceProduct
                    className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-3 rounded-[3px] hover:shadow-bs hover:w-full w-full"
                    image="images/img_image_16.png"
                    p25off="HOT"
                    signalFour="images/img_signal.svg"
                    p56767="(738)"
                    dell215inchfull="TOZO T6 True Wireless Earbuds Bluetooth Headphon..."
                    p86599="N75"
                    p44212="N70"
                  />
                  <MarketplaceProduct1
                    className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-4 rounded-[3px] hover:shadow-bs hover:w-full w-full"
                    image="images/img_image_172x202.png"
                    text="536)"
                    dell215inchfull="Samsung Electronics Samsung Galexy S21 5G"
                    pricen80="N2,300"
                  />
                  <MarketplaceProduct
                    className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-3 rounded-[3px] hover:shadow-bs hover:w-full w-full"
                    image="images/img_image_17.png"
                    p25off="BEST DEALS"
                    signalFour="images/img_signal.svg"
                    p56767="423)"
                    dell215inchfull="Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6..."
                    p44212="N360"
                  />
                  <MarketplaceProduct1
                    className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-4 rounded-[3px] hover:shadow-bs hover:w-full w-full"
                    image="images/img_image_3.png"
                    signalFour="images/img_signal_white_a700.svg"
                    text="816)"
                  />
                  <MarketplaceProduct
                    className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-3 rounded-[3px] hover:shadow-bs hover:w-full w-full"
                    image="images/img_image_18.png"
                    p25off="BEST DEALS"
                    p56767="(994)"
                    dell215inchfull="Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6..."
                    p44212="N360"
                  />
                  <MarketplaceProduct1
                    className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-4 rounded-[3px] hover:shadow-bs hover:w-full w-full"
                    image="images/img_image_19.png"
                    text="(492)"
                    dell215inchfull="Dell Optiplex 7000x7480 All-in-One Computer Monitor"
                    pricen80="N250"
                  />
                  <MarketplaceProduct1
                    className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-4 rounded-[3px] hover:shadow-bs hover:w-full w-full"
                    pricen124="N124"
                  />
                  <MarketplaceProduct
                    className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-3 rounded-[3px] hover:shadow-bs hover:w-full w-full"
                    image="images/img_image_21.png"
                    p25off="HOT"
                    signalFour="images/img_signal.svg"
                    p56767="(600)"
                    dell215inchfull="TOZO T6 True Wireless Earbuds Bluetooth Headphon..."
                    p44212="N70"
                  />
                </div>
                <MarketplacePagination className="flex sm:flex-col flex-row gap-5 items-center justify-center mt-10 w-auto sm:w-full" />
              </div>
            </div>
          </div>
          <div className="bg-indigo-900 flex flex-col items-center justify-start mt-4 p-[75px] md:px-10 sm:px-5 w-full">
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

export default MarketplacePage;
