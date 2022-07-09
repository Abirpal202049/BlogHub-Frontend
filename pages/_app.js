import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </>
  );
}

export default MyApp;
