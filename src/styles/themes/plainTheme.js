import commonThemeProps from "./commonThemeProps";
import colors from "./colors";

const plainTheme = {
    ...commonThemeProps,
    id: "T_003",
    name: "Plain",
  
    background: {
      color: colors.white
    },
  
    colors: {
      title: colors.darkRed,
      headline: colors.black,
      address: colors.black,
      categoryTitle: colors.darkRed,
      entryTitle: colors.black,
      entrySubtitle: colors.black,
      entryDates: colors.black,
      description: colors.black,
      links: colors.darkRed,
      brackets: colors.black
    },

    fonts:{
        ...commonThemeProps.fonts,
        headings: commonThemeProps.fonts.body,
    }
  
  };
      
      
  export default plainTheme;