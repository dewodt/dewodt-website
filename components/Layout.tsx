import NavBar from "./NavBar";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
