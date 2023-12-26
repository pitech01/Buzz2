import React from "react";

const sizeClasses = {
  txtPublicSansSemiBold14WhiteA700: "font-publicsans font-semibold",
  txtMontserratItalicRegular30: "font-montserrat font-normal italic",
  txtMontserratRomanBold28: "font-bold font-montserrat",
  txtPublicSansMedium16: "font-medium font-publicsans",
  txtMontserratRomanBold48Black900: "font-bold font-montserrat",
  txtMontserratRomanBold100: "font-bold font-montserrat",
  txtMontserratRomanBold48: "font-bold font-montserrat",
  txtSignikaLight14Gray40001: "font-light font-signika",
  txtPublicSansSemiBold14: "font-publicsans font-semibold",
  txtMontserratRomanBold48Indigo900: "font-bold font-montserrat",
  txtManropeBold40: "font-bold font-manrope",
  txtMontserratRomanBold64: "font-bold font-montserrat",
  txtSignikaNegativeSemiBold16Black900: "font-semibold font-signikanegative",
  txtManropeRegular20: "font-manrope font-normal",
  txtSignikaNegativeRegular16Black900: "font-normal font-signikanegative",
  txtMontserratRomanBold40: "font-bold font-montserrat",
  txtSignikaLight14: "font-light font-signika",
  txtManropeMedium24: "font-manrope font-medium",
  txtMontserratRomanRegular20Gray100: "font-montserrat font-normal",
  txtSignikaLight11: "font-light font-signika",
  txtSignikaNegativeMedium13: "font-medium font-signikanegative",
  txtMontserratRomanSemiBold16Black900: "font-montserrat font-semibold",
  txtSignikaNegativeRegular16Gray40001: "font-normal font-signikanegative",
  txtMontserratRomanSemiBold16: "font-montserrat font-semibold",
  txtMontserratRomanRegular20: "font-montserrat font-normal",
  txtPublicSansRegular12: "font-normal font-publicsans",
  txtPublicSansRegular14: "font-normal font-publicsans",
  txtMontserratRomanSemiBold22Indigo500: "font-montserrat font-semibold",
  txtPublicSansRegular14Gray900: "font-normal font-publicsans",
  txtMontserratRomanSemiBold24: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold22: "font-montserrat font-semibold",
  txtSignikaNegativeRegular16Gray800: "font-normal font-signikanegative",
  txtSignikaNegativeSemiBold16Gray800: "font-semibold font-signikanegative",
  txtSignikaNegativeSemiBold16: "font-semibold font-signikanegative",
  txtMontserratRomanSemiBold22Indigo900: "font-montserrat font-semibold",
  txtMontserratRomanBold28Black900: "font-bold font-montserrat",
  txtMontserratRomanRegular20Indigo900: "font-montserrat font-normal",
  txtPublicSansRegular14Bluegray300: "font-normal font-publicsans",
  txtMontserratRomanBold64Black900: "font-bold font-montserrat",
  txtSignikaNegativeRegular16: "font-normal font-signikanegative",
  txtMontserratRomanRegular20Indigo500: "font-montserrat font-normal",
  txtPublicSansRegular14Bluegray600: "font-normal font-publicsans",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
