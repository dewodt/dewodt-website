import Card from "components/Card";
import PageHead from "components/PageHead";
import SearchBox from "components/SearchBox";
import Layout from "components/Layout";
import { useState, useEffect, ChangeEvent } from "react";
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
  const [filteredData, setFilteredData] = useState(postsContent);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    AOS.init();
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
        <div className="flex h-fit min-h-[calc(100vh-5rem)] w-screen flex-col items-center py-12 max-lg:pt-6">
          {/* Search Box and Search Count */}
          <div className="mb-8 flex flex-col items-center gap-y-4">
            <SearchBox
              searchValue={searchValue}
              handleChange={(e: ChangeEvent<HTMLInputElement>) => {
                // Update Value
                setSearchValue(e.target.value);

                // Updated Filteredd Data
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
            <div className="text-lg font-semibold text-[#208ce5] 2xl:text-xl">
              {searchValue ? (
                `${filteredData.length} search result was found`
              ) : (
                <br />
              )}
            </div>
          </div>

          {/* Posts */}
          <div className="grid justify-center gap-x-14 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {filteredData.map((item: any) => (
              <div
                key={item.id}
                data-aos="slide-up"
                data-aos-once="true"
                data-aos-duration="400"
                data-aos-easing="ease-out-quad"
                data-aos-anchor-placement="top-bottom"
              >
                <Card data={item} />
              </div>
            ))}
          </div>
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
