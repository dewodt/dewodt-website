import Typewriter from "typewriter-effect";

export default function Profile() {
  return (
    <div className="w-full max-w-xs text-center text-lg font-bold leading-relaxed sm:text-left md:max-w-[320px] lg:max-w-[420px] lg:text-2xl lg:leading-relaxed">
      <div className="text-3xl md:mb-1 lg:text-[2.75rem] lg:leading-none">
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
      <div className="mb-6 lg:mb-8">
        My full name is{" "}
        <span className="text-[#208ce5]">Dewantoro Triatmojo</span>
      </div>
      <div className="mb-6 lg:mb-8">
        Currently studying <span className="text-[#208ce5]">Informatics</span>{" "}
        in
        <span className="text-[#208ce5]"> Bandung Institute of Technology</span>
      </div>
      <div className="mb-6 lg:mb-8">
        Intrested in{" "}
        <span className="text-[#208ce5]">Software Engineering </span>and{" "}
        <span className="text-[#208ce5]">Web Development</span>
      </div>
    </div>
  );
}
