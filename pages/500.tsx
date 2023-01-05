import PageHead from "components/pagehead";

export default function Custom500() {
  return (
    <>
      <PageHead />
      <div className="flex flex-col items-center justify-center h-[100vh] text-center font-bold">
        <p className="text-[#208ce5] text-3xl leading-normal md:text-5xl md:leading-normal">500 - Server Error</p>
        <p className="text-lg leading-normal mb-4 md:mb-6 md:text-2xl md:leading-normal">Please refresh this page!</p>
      </div>
    </>
  );
}