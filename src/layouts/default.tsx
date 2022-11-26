import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";

interface IProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: IProps) => {
  return (
    <>
      {/* Header */}
      {children}
      {/* footer */}
    </>
  );
};

export const LandingLayout = ({ children }: IProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
