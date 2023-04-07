import NavBar from "./NavBar";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <div className="absolute inset-0 h-full w-full">
        <NavBar />
        <>{children}</>
      </div>
    </>
  );
};

export default Layout;
