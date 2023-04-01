import Card from "components/Card";
import PageHead from "components/PageHead";
import SearchBox from "components/SearchBox";
import Layout from "components/Layout";
import { useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import type { GetStaticProps, NextPage } from "next";

interface postsContent {
  id: string;
  title: string;
  content: any;
  tags: string[];
  image: {
    id: string;
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  _firstPublishedAt: string;
}

interface postsPage {
  pageTitle: string;
  pageTags: string[];
  pageDescription: string;
  imageLinkPreview: {
    url: string;
  };
}

const Posts: NextPage<{
  postsContent: postsContent[];
  postsPage: postsPage;
}> = ({ postsContent, postsPage }) => {
  const [mount, setMount] = useState(false);
  const [filteredData, setFilteredData] = useState(postsContent);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    AOS.init();
    setMount(true);
  }, []);

  return (
    <>
      <PageHead
        pageTitle={postsPage.pageTitle}
        pageDescription={postsPage.pageDescription}
        pageTag={postsPage.pageTags}
        linkPreviewImage={postsPage.imageLinkPreview.url}
      />
      <Layout>
        <div className="absolute top-20 left-0 right-0 flex min-h-[calc(100%-5rem)] w-full flex-col items-center py-12 pt-6">
          {/* Search Box and Search Count */}
          <section
            className={`mb-8 flex flex-col items-center gap-y-4 duration-1000 ease-out ${
              mount
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0"
            }`}
          >
            <h1 className="hidden">Search Box & Count</h1>
            <SearchBox
              searchValue={searchValue}
              handleChange={(e: ChangeEvent<HTMLInputElement>) => {
                // Update Value
                setSearchValue(e.target.value);

                // Updated filtered data
                const newInputValue = e.target.value.toLowerCase();
                if (newInputValue === "") {
                  setFilteredData(postsContent);
                } else {
                  const newData = postsContent.filter((item: any) => {
                    const itemTitle = item.title.toLowerCase();
                    const itemDate = new Date(item._firstPublishedAt)
                      .toLocaleString("en-UK", { dateStyle: "long" })
                      .toLowerCase();
                    return (
                      itemTitle.includes(newInputValue) ||
                      itemDate.includes(newInputValue)
                    );
                  });
                  setFilteredData(newData);
                }
              }}
              handleReset={() => {
                setFilteredData(postsContent);
                setSearchValue("");
              }}
            />
            <div
              className={`text-lg font-semibold text-[#208ce5] duration-300 ease-in-out 2xl:text-xl ${
                searchValue
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
            >
              {`${filteredData.length} search result was found`}
            </div>
          </section>

          {/* Posts */}
          <section className="grid justify-center gap-x-14 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            <h1 className="hidden">Posts Articles</h1>
            {filteredData.map((item, index) => (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="800"
                data-aos-easing="ease-out-quad"
                data-aos-anchor-placement="top-bottom"
              >
                <Card data={item} index={index} />
              </div>
            ))}
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Posts;

export const getStaticProps: GetStaticProps<{
  postsContent: postsContent[];
  postsPage: postsPage;
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
          allPostsContents(orderBy: _firstPublishedAt_DESC) {
            id
            title
            content {
              value
            }
            tags
            image {
              id
              url
              alt
              width
              height
            }
            _firstPublishedAt
          }
          postsPage {
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
    props: {
      postsContent: res.data.allPostsContents,
      postsPage: res.data.postsPage,
    },
  };
};
