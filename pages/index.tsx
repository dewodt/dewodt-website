import Image from "next/image";
import Link from "next/link";
import PageHead from "components/PageHead";
import Typewriter from "typewriter-effect";
import Photo from "public/dewo.jpg";
import Layout from "components/Layout";
import GitHub from "components/icons/GitHub";
import LinkedIn from "components/icons/linkedin";
import Mail from "components/icons/mail";
import Instagram from "components/icons/instagram";

const Home = () => {
  return (
    <>
      <PageHead
        headTitle="Home | Dewantoro Triatmojo"
        headDescription="This is Dewantoro Triatmojo's personal website!"
        headTag="home, personal website, portofolio, curriculum vitae"
      />
      <Layout>
        <div className="flex h-fit min-h-[calc(100vh-5rem)] w-full flex-col items-center justify-center gap-y-6 py-12 sm:flex-row sm:gap-x-8 lg:gap-x-12">
          {/* My Photo */}
          <Image
            src={Photo}
            alt="Dewo"
            className="w-64 rounded-[50%] border-8 border-solid border-[#208ce5] md:w-72 2xl:w-96"
            priority={true}
          />

          {/* My Description */}
          <div className="block">
            <div className="mb-6 w-[325px] text-center text-lg font-semibold leading-relaxed sm:text-left 2xl:mb-8 2xl:w-[430px] 2xl:text-2xl 2xl:leading-relaxed">
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
              <div className="mb-6 2xl:mb-8">
                My full name is{" "}
                <span className="text-[#208ce5]">Dewantoro Triatmojo</span>
              </div>
              <div className="mb-6 2xl:mb-8">
                Currently studying{" "}
                <span className="text-[#208ce5]">Informatics</span> in
                <span className="text-[#208ce5]">
                  {" "}
                  Bandung Institute of Technology
                </span>
              </div>
              <div>
                Intrested in{" "}
                <span className="text-[#208ce5]">Software Engineering </span>and{" "}
                <span className="text-[#208ce5]">Web Development</span>
              </div>
            </div>

            {/* My Social Media */}
            <div className="flex flex-row justify-center gap-x-6 2xl:gap-x-10">
              <Link href="https://github.com/dewodt">
                <button className="group flex h-12 w-12 items-center justify-center rounded-xl bg-[#208ce5] duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-[white] 2xl:h-14 2xl:w-14">
                  <GitHub style="w-8 fill-[white] group-hover:fill-[#208ce5] 2xl:w-9" />
                </button>
              </Link>
              <Link href="https://github.com/dewodt">
                <button className="group flex h-12 w-12 items-center justify-center rounded-xl bg-[#208ce5] duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-[white] 2xl:h-14 2xl:w-14">
                  <LinkedIn style="w-8 fill-[white] group-hover:fill-[#208ce5] 2xl:w-9" />
                </button>
              </Link>
              <Link href="https://github.com/dewodt">
                <button className="group flex h-12 w-12 items-center justify-center rounded-xl bg-[#208ce5] duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-[white] 2xl:h-14 2xl:w-14">
                  <Mail style="w-8 fill-[white] group-hover:fill-[#208ce5] 2xl:w-9" />
                </button>
              </Link>
              <Link href="https://github.com/dewodt">
                <button className="group flex h-12 w-12 items-center justify-center rounded-xl bg-[#208ce5] duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-[white] 2xl:h-14 2xl:w-14">
                  <Instagram style="w-8 fill-[white] group-hover:fill-[#208ce5] 2xl:w-9" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
