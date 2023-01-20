/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "Inter, sans-serif",
        secondary: "Poppins",
      },
      fontSize: {
        xsm: "0.875rem",
        sm: "1rem",
        lg: "4.5rem",
        xl: "4.75rem",
      },
      fontWeight: {
        thin: 200,
        semiLight: 300,
        light: 400,
        normal: 500,
        medium: 600,
        smbold: 800,
        bold: 700,
        xbold: 900,
      },
      padding:{
        sm:'1.5rem'
      },
      colors: {
        body: "#F9FAFB",
        sideBar:'#FFFFFF',
        sidebarActive:'#F9FAFB',
        primary: "#134236",
        gray: "#D0D5DD",
        borderLine:'#F5F5F5',
        dividerLine:' #EAECF0',
        badge:'#027A48',
        badgeBg:'#ECFDF3',
        purple:'#7F56D9',
        boldText:'#101828',
        lightText:'#667085'
       
      },
      boxShadow: {
        primary: "0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
      },
      // backgroundImage: {
      //   heroImage: "url('/assets/jpg/audience-background.jpg')",
      //   FooterHeroImage: "url('/assets/jpg/footer-hero.jpg')",
      //   customGradient:
      //     "bg-[radial-gradient(at_center_right,_#B49EA5,_#350F1BF2,_#B49EA5)]",
      // },
    },
  },
  plugins: [],
}
