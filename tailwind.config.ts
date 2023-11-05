/** @type {import('tailwindcss').Config} */
export {};
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1220px",
      "2xl": "1440px",
      "3xl": "1700px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      lineHeight: {
        "10": "2.5rem", // You can adjust the value as needed
        "12": "3rem",
        "70": "70px", // Another custom line height
      },
      colors: {
        primary: "#002147",
        black: {
          DEFAULT: "#000",
          100: "#0D1117",
          200: "#161B22",
          300: "#1F2428",
          400: "#242C38",
          500: "#211F20",
        },
        grey: {
          100: "#969BA5",
          200: "#55616D",
          300: "#909090",
          400: "#666666",
        },
        white: {
          DEFAULT: "#FFF",
          400: "#A3B3BC",
          500: "#A4B8D5",
          800: "#D0DFFF",
        },
        secondaryText: "#211F20",
        blue: "#527CEB",
        purple: "#8C7CFF",
        pink: "#ED5FBD",
        violet: "#F16565",
        orange: "#FF964B",
        darkBlueNav: "#0E0146",
        darkBlue: "#002777",
        lightRed: "#E9F3FF",
        bgBlue: "#1E47FF",
        lightPurple: "#562383",
        lightBlue: "#F1EEFF",
        mediumRed: "#FFDBDD",
        redHeading: "#EE1A24",
      },
      backgroundColor: {
        primary: "linear-gradient(to right, #0E149D, #6E0C80, #EE1B23)",
        "custom-button": "linear-gradient(to right, #0E149D, #6E0C80, #EE1B23)",
      },

      backgroundImage: {
        banner: "url('/jsm_resources_banner.svg')",
        footer: "url('/assets/footer.svg')",
        boy: "url('/assets/boy.svg')",
        ourServicesImg: "url(/assets/our_service_img.svg)",
        // companyFeature:"url('/assets/company_feature_img.svg')",
        companyFeature:
          "linear-gradient(to right, rgb(3 45 95 / 92%) 0%, rgb(3 45 95 / 55%) 100%, rgba(9, 18, 66, 0.8) 100%),url(/assets/company_feature_img.svg)",
        designToGrow:
          "linear-gradient(to right, rgb(3 45 95 / 92%) 0%, rgb(3 45 95 / 55%) 100%, rgba(9, 18, 66, 0.8) 100%), url(/assets/designtogrow_img.svg)",
        //companyFeature: "url('/assets/company_feature_img.svg')",

        ImmegrationBanner:
          "linear-gradient(to right, rgb(3 45 95 / 92%) 0%, rgb(3 45 95 / 55%) 100%, rgba(9, 18, 66, 0.8) 100%), url(/assets/immagration_img.svg)",

        heroBannerOne:
          "linear-gradient(to right, rgb(3 45 95 / 92%) 0%, rgb(3 45 95 / 55%) 100%, rgba(9, 18, 66, 0.8) 100%), url(/assets/hero_sec_one_img.svg)",

        navGradient:
          "linear-gradient(to right, #091242, #242854, #3b3f66, #535777, #6c7089)",
        thread: "url('/assets/thread.svg')",
      },

      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("flowbite/plugin")],
};
