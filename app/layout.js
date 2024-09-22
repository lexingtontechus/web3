import Header from "./components/header";
import Footer from "./components/footer";
import "/styles/index.css";
import "/styles/globals.css";

import { Providers } from "./providers";
import PushWidget from "./components/pushwidget";

export const metadata = {
  title: {
    default: "Lexington WEB3",
    template: "%s | Lexington WEB3",
  },
  description:
    "Lexington WEB3 built with Onboard Block Native & Push Protocol.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
          <PushWidget />
        </Providers>
      </body>
    </html>
  );
}
