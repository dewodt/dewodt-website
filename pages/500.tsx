import PageHead from "components/pagehead";

export default function Custom500() {
  return (
    <>
      <PageHead
        headTitle="500 | Dewantoro Triatmojo"
        headDescription="This is error 500 page"
        headTag="error 500"
      />
      <div className="flex h-[100vh] flex-col items-center justify-center px-3 text-center">
        <p className="text-3xl font-bold leading-normal text-[#208ce5] 2xl:text-5xl 2xl:leading-normal">
          500 - Server Error
        </p>
        <p className="mb-4 text-lg font-semibold leading-normal 2xl:mb-6 2xl:text-2xl 2xl:leading-normal">
          Please refresh this page!
        </p>
      </div>
    </>
  );
}
