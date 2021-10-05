import commonThemeProps from "./commonThemeProps";
import colors from "./colors";

import lightenColor from "../../functions/lightenColor";
    
const codingDarkTheme = {
  ...commonThemeProps,


  background: {
    color: colors.grey
  },

  colors: {
    title: colors.white,
    headline: colors.white,
    address: colors.yellow,
    categoryTitle: colors.white,
    entryTitle: lightenColor(colors.blue, 15),
    entrySubtitle: colors.lightBlue,
    entryDates: colors.yellow,
    description: colors.red,
    links: lightenColor(colors.blue, 15),
    brackets: colors.lightBlue
  }

};
    
    
export default codingDarkTheme;