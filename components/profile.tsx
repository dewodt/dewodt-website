import Typewriter from "typewriter-effect";

export default function Profile() {
  return (
    <div className="w-[325px] text-center text-lg font-semibold leading-relaxed sm:text-left 2xl:w-[430px] 2xl:text-2xl 2xl:leading-relaxed mb-6 2xl:mb-8">
      <div className="mb-6 2xl:mb-8 animate-fadeInUp animate-delay-75 animate-ease-out animate-fast sm:animate-fadeInRight sm:animate-delay-75 sm:animate-ease-out sm:animate-fast">
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
      <div className="mb-6 2xl:mb-8 animate-fadeInUp animate-delay-150 animate-ease-out animate-fast sm:animate-fadeInRight sm:animate-delay-150 sm:animate-ease-out sm:animate-fast">
        Currently studying <span className="text-[#208ce5]">Informatics</span>{" "}
        in
        <span className="text-[#208ce5]"> Bandung Institute of Technology</span>
      </div>
      <div className="animate-fadeInUp animate-delay-[225ms] animate-ease-out animate-fast sm:animate-fadeInRight sm:animate-delay-[225ms] sm:animate-ease-out sm:animate-fast">
        Intrested in{" "}
        <span className="text-[#208ce5]">Software Engineering </span>and{" "}
        <span className="text-[#208ce5]">Web Development</span>
      </div>
    </div>
  );
}
