import Header from "./components/header";
import Footer from "./components/footer";
import "/styles/index.css";
import "/styles/globals.css";

import { Providers } from "./providers";
//import Cal from "./components/cal";
export const metadata = {
  title: {
    default: "Lexington WEB3",
    template: "%s | Lexington WEB3",
  },
  description:
    "A Lexington WEB3 Demo built with Onboard Block Native & Push.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
