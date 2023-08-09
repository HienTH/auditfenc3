import Footer from "./Footer";
import Header from "./Header";
import Social from "./Social";
import Supporting from "./Supporting";
import Team from "./Team";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Social></Social>
      <Footer />
    </>
  );
}
