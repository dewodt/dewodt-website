import Typewriter from "typewriter-effect";

export default function Profile() {
  return (
    <div className="w-full max-w-xs text-center text-lg font-bold leading-relaxed sm:text-left md:text-xl md:leading-relaxed lg:max-w-md lg:text-2xl lg:leading-relaxed">
      <p className="text-3xl md:mb-1 lg:text-5xl">
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
      </p>
      <p className="mb-6 md:mb-9">
        My full name is{" "}
        <span className="text-[#208ce5]">Dewantoro Triatmojo</span>
      </p>
      <p className="mb-6 md:mb-9">
        Currently studying <span className="text-[#208ce5]">Informatics</span>{" "}
        in
        <span className="text-[#208ce5]"> Bandung Institute of Technology</span>
      </p>
      <p className="mb-6 md:mb-9">
        Intrested in{" "}
        <span className="text-[#208ce5]">Software Engineering </span>and{" "}
        <span className="text-[#208ce5]">Web Development</span>
      </p>
    </div>
  );
}
