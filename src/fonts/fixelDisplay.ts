import localFont from "next/font/local";

const fixelDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/fixelDisplay/FixelDisplay-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/fixelDisplay/FixelDisplay-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/fixelDisplay/FixelDisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/fixelDisplay/FixelDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/fixelDisplay/FixelDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/fixelDisplay/FixelDisplay-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/fixelDisplay/FixelDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/fixelDisplay/FixelDisplay-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/fixelDisplay/FixelDisplay-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-fixel-display", // Adds a CSS variable for global use
  display: "swap", // Ensures better loading performance
});

export default fixelDisplay;
