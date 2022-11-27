import Footer from "../components/general/layouts/Footer";
import Header from "../components/general/layouts/Header";

interface IProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: IProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
