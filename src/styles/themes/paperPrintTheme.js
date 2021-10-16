import commonThemeProps from "./commonThemeProps";
import colors from "./colors";

const paperPrintTheme = {
    ...commonThemeProps,

    id: "T_004",
    name: "Paper Print",
  
  
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
        headings: "Lora, serif",
        body: "Lora, serif"
    }
  
  };
      
      
  export default paperPrintTheme;