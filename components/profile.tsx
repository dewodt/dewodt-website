import Typewriter from "typewriter-effect";

export default function Profile() {
  return (
    <div className="w-full max-w-xs text-center text-lg font-bold leading-relaxed sm:text-left md:max-w-[320px] 2xl:max-w-[420px] 2xl:text-2xl 2xl:leading-relaxed">
      <div className="text-3xl md:mb-1 2xl:text-[2.75rem] 2xl:leading-none">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                'Hello, I\'m <span style="color:#208ce5">Dewo!</span>'
              )
              .deleteAll()
              .start();
          }}
        />
      </div>
      <div className="mb-6 2xl:mb-8">
        My full name is{" "}
        <span className="text-[#208ce5]">Dewantoro Triatmojo</span>
      </div>
      <div className="mb-6 2xl:mb-8">
        Currently studying <span className="text-[#208ce5]">Informatics</span>{" "}
        in
        <span className="text-[#208ce5]"> Bandung Institute of Technology</span>
      </div>
      <div className="mb-6 2xl:mb-8">
        Intrested in{" "}
        <span className="text-[#208ce5]">Software Engineering </span>and{" "}
        <span className="text-[#208ce5]">Web Development</span>
      </div>
    </div>
  );
}
