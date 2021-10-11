const deviceSizes = {
    mobile: "375px",
    tablet: "768px",
    tabletL: "960px",
    laptop: "1024px",
  };
  
  const device = {
    mobile: `screen and (max-width: ${deviceSizes.mobile})`,
    tablet: `screen and (max-width: ${deviceSizes.tablet})`,
    tabletL: `screen and (max-wdidth: ${deviceSizes.tabletL})`,
    laptop: `screen and (max-width: ${deviceSizes.laptop})`,
  };
  
  const theme = {
    deviceSizes
  };
  
  export default theme;