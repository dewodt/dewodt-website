import PageHead from "components/pagehead";

export default function Custom500() {
  return (
    <>
      <PageHead />
      <div className="flex flex-col items-center justify-center h-[100vh] text-center font-bold">
        <p className="text-[#208ce5] text-[3.5vh] sm:text-[4.63vh]">500 - Server Error</p>
        <p className="text-[2vh] sm:text-[2.78vh] mb-[1.4vh]">Please refresh this page!</p>
      </div>
    </>
  );
}