import { ThemeProvider } from "../context/themeProvider";
import "react-calendar/dist/Calendar.css";
import "../assets/css/globals.css";
import "../assets/css/calendar.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
