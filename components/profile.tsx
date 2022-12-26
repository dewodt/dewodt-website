import Typewriter from 'typewriter-effect';

export default function Profile() {
  return (
    <div className="text-[2vh] sm:text-[2.78vh]">
      <div className="text-[3.5vh] sm:text-[4.63vh] font-bold">
        <Typewriter 
          options={{ 
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter.typeString('Hello, I\'m <span style="color:#208ce5">Dewo!</span>')
              .deleteAll()
              .start();
          }}
        />
      </div>
      <p className="mb-[3vh] sm:mb-[4.63vh] font-semibold">
        My full name is <span className="text-[#208ce5]">Dewantoro Triatmojo</span>
      </p>
      <p className="mb-[3vh] sm:mb-[4.63vh] font-semibold">
        Currently studying{" "}<span className="text-[#208ce5]">Informatics</span> in <br />
        <span className="text-[#208ce5]">Bandung Institute of Technology</span>
      </p>
      <p className="mb-[3vh] sm:mb-[4.63vh] font-semibold">
        Intrested in{" "} <span className="text-[#208ce5]">Software Engineering</span><br />
        and <span className="text-[#208ce5]">Web Development</span>
      </p>
    </div>
  );
}