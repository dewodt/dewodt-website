import Typewriter from "typewriter-effect";

export default function Profile() {
  return (
    <div className="mb-6 w-[325px] text-center text-lg font-semibold leading-relaxed sm:text-left 2xl:mb-8 2xl:w-[430px] 2xl:text-2xl 2xl:leading-relaxed">
      <div className="mb-6 animate-fadeInUp animate-fast animate-ease-out animate-delay-75 sm:animate-fadeInRight sm:animate-fast sm:animate-ease-out sm:animate-delay-75 2xl:mb-8">
        <div className="text-3xl font-bold md:mb-1 2xl:text-[2.75rem] 2xl:leading-none">
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
        <div>
          My full name is{" "}
          <span className="text-[#208ce5]">Dewantoro Triatmojo</span>
        </div>
      </div>
      <div className="mb-6 animate-fadeInUp animate-fast animate-ease-out animate-delay-150 sm:animate-fadeInRight sm:animate-fast sm:animate-ease-out sm:animate-delay-150 2xl:mb-8">
        Currently studying <span className="text-[#208ce5]">Informatics</span>{" "}
        in
        <span className="text-[#208ce5]"> Bandung Institute of Technology</span>
      </div>
      <div className="animate-fadeInUp animate-fast animate-ease-out animate-delay-[225ms] sm:animate-fadeInRight sm:animate-fast sm:animate-ease-out sm:animate-delay-[225ms]">
        Intrested in{" "}
        <span className="text-[#208ce5]">Software Engineering </span>and{" "}
        <span className="text-[#208ce5]">Web Development</span>
      </div>
    </div>
  );
}
