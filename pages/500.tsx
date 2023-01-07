import PageHead from "components/pagehead";

export default function Custom500() {
  return (
    <>
      <PageHead 
        headTitle="500 | Dewantoro Triatmojo"
        headDescription="This is error 500 page"
        headTag="error 500"
      />
      <div className="flex flex-col items-center justify-center h-[100vh] text-center font-bold px-3">
        <p className="text-[#208ce5] text-3xl leading-normal lg:text-5xl lg:leading-normal">500 - Server Error</p>
        <p className="text-lg leading-normal mb-4 lg:mb-6 lg:text-2xl lg:leading-normal">Please refresh this page!</p>
      </div>
    </>
  );
}