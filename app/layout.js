import "../style/globals.css";
import "../style/reset.css";
import "../style/layout.css";


// 컴포넌트
import Header from '../component/header'
import Footer from '../component/footer'
// import {} from "../component/animation"

export const metadata = {
  title: "spaceX",
  description: "spaceX remaster",
  icons: {
    icon: "/spaceX.ico",
	},

};

export default function RootLayout({ children }) {


  return (
    <html lang="ko">
      <body>

        <Header></Header>
        {children}

        <Footer></Footer>

      </body>
    </html>
  );
}
