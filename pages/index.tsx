import Image from "next/image";
import Link from "next/link";
import PageHead from "components/PageHead";
import Typewriter from "typewriter-effect";
import Layout from "components/Layout";
import GitHubIcon from "components/icons/GitHubIcon";
import LinkedInIcon from "components/icons/LinkedInIcon";
import MailIcon from "components/icons/MailIcon";
import InstagramIcon from "components/icons/InstagramIcon";
import type { GetStaticProps, NextPage } from "next";

interface homeData {
  github: string;
  linkedin: string;
  mail: string;
  instagram: string;
  photo: {
    width: number;
    height: number;
    alt: string;
    url: string;
  };
  pageTitle: string;
  pageTags: string[];
  pageDescription: string;
  imageLinkPreview: {
    url: string;
  };
}

const Home: NextPage<{ homeData: homeData }> = ({ homeData }) => {
  return (
    <>
      <PageHead
        pageTitle={homeData.pageTitle}
        pageDescription={homeData.pageDescription}
        pageTag={homeData.pageTags}
        linkPreviewImage={homeData.imageLinkPreview.url}
      />
      <Layout>
        <div className="flex h-fit min-h-[calc(100vh-5rem)] w-full flex-col items-center justify-center gap-y-6 py-12 sm:flex-row sm:gap-x-8 lg:gap-x-12">
          {/* My Photo */}
          <Image
            src={homeData.photo.url}
            alt={homeData.photo.alt}
            width={homeData.photo.width}
            height={homeData.photo.height}
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
              <Link href={homeData.github}>
                <button className="group flex h-12 w-12 items-center justify-center rounded-xl bg-[#208ce5] duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[white] 2xl:h-14 2xl:w-14">
                  <GitHubIcon style="w-8 fill-[white] group-hover:fill-[#208ce5] 2xl:w-9 duration-300 ease-in-out" />
                </button>
              </Link>
              <Link href={homeData.linkedin}>
                <button className="group flex h-12 w-12 items-center justify-center rounded-xl bg-[#208ce5] duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[white] 2xl:h-14 2xl:w-14">
                  <LinkedInIcon style="w-8 fill-[white] group-hover:fill-[#208ce5] 2xl:w-9 duration-300 ease-in-out" />
                </button>
              </Link>
              <Link href={homeData.mail}>
                <button className="group flex h-12 w-12 items-center justify-center rounded-xl bg-[#208ce5] duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[white] 2xl:h-14 2xl:w-14">
                  <MailIcon style="w-8 fill-[white] group-hover:fill-[#208ce5] duration-300 ease-in-out 2xl:w-9" />
                </button>
              </Link>
              <Link href={homeData.instagram}>
                <button className="group flex h-12 w-12 items-center justify-center rounded-xl bg-[#208ce5] duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[white] 2xl:h-14 2xl:w-14">
                  <InstagramIcon style="w-8 fill-[white] group-hover:fill-[#208ce5] 2xl:w-9 duration-300 ease-in-out" />
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

export const getStaticProps: GetStaticProps<{
  homeData: homeData;
}> = async () => {
  const res = await (
    await fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
      },
      body: JSON.stringify({
        query: `{
          homePage {
            photo {
              alt
              url
              height
              width
            }
            github
            linkedin
            mail
            instagram
            pageTitle
            pageTags
            pageDescription
            imageLinkPreview {
              url
            }
          }
        }
        `,
      }),
    })
  ).json();

  return {
    props: { homeData: res.data.homePage },
  };
};
