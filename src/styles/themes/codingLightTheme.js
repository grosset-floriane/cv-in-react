import commonThemeProps from "./commonThemeProps";
import colors from "./colors";

const codingLightTheme = {
    ...commonThemeProps,
    
    
    background: {
      color: colors.white
    },

    colors: {
      title: colors.black,
      headline: colors.green,
      address: colors.black,
      categoryTitle: colors.black,
      entryTitle: colors.blue,
      entrySubtitle: colors.blue,
      entryDates: colors.green,
      description: colors.red,
      links: colors.blue,
      brackets: colors.black
    }
  
  };


export default codingLightTheme;