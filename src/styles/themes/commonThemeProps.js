import colors from "./colors";

const commonThemeProps = {
    mediaQueries: {
        tablet: '651px',
        desktop: '1025px'
    },
    
    fonts: {
        body: "Roboto, sansSerif",
        headings: "Inconsolata, monospace"
    },

    fontSizes: {
        smallest: "1rem",
        smaller: "1.3rem",
        Small: "1.5rem",
        Base: "1.6rem",
        Large: "1.8rem",
        Larger: "2.3rem",
        Largest: "3rem",
        Biggest: "4rem"
    },
  
  
    spacings: {
        mobile: "1.3rem",
        tablet: "2.4rem",
        desktop: "5rem"
    },
  
    heights: {
        header: "6.3rem"
    },


    // defaults
    background: {
        color: colors.white
      },
  
      colors: {
        title: colors.black,
        headline: colors.black,
        address: colors.black,
        categoryTitle: colors.black,
        entryTitle: colors.black,
        entrySubtitle: colors.black,
        entryDates: colors.black,
        description: colors.black,
        links: colors.black,
        brackets: colors.black
      }
}

export default commonThemeProps;