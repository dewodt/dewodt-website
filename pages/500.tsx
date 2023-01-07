import PageHead from "components/pagehead";

export default function Custom500() {
  return (
    <>
      <PageHead 
        headTitle="500 | Dewantoro Triatmojo"
        headDescription="This is error 500 page"
        headTag="error 500"
      />
      <div className="flex flex-col items-center justify-center h-[100vh] text-center px-3">
        <p className="text-[#208ce5] text-3xl font-bold leading-normal 2xl:text-5xl 2xl:leading-normal">500 - Server Error</p>
        <p className="text-lg font-semibold leading-normal mb-4 2xl:mb-6 2xl:text-2xl 2xl:leading-normal">Please refresh this page!</p>
      </div>
    </>
  );
}