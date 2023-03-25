import ArticleCard from "components/articlecard";
import NavBar from "components/NavBar";
import PageHead from "components/pagehead";
import SearchBar from "components/searchbar";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Posts({ posts }: any) {
  const [filteredData, setFilteredData] = useState(posts);
  const [countResult, setCountResult] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);

  function handleChange() {
    const inputValue = (
      document.getElementById("input") as HTMLInputElement
    ).value.toLowerCase();
    if (inputValue === "") {
      setFilteredData(posts);
      setCountResult(0);
      setIsEmpty(true);
    } else {
      const newData = posts.filter((item: any) => {
        const itemTitle = item.title.toLowerCase();
        const itemDate = new Date(item._firstPublishedAt)
          .toLocaleString("en-UK", { dateStyle: "long" })
          .toLowerCase();
        return itemTitle.includes(inputValue) || itemDate.includes(inputValue);
      });
      setFilteredData(newData);
      setCountResult(newData.length);
      setIsEmpty(false);
    }
  }

  function handleReset() {
    (document.getElementById("input") as HTMLInputElement).value = "";
    setFilteredData(posts);
    setCountResult(0);
    setIsEmpty(true);
  }

  return (
    <>
      <PageHead
        headTitle="Posts | Dewantoro Triatmojo"
        headDescription="These are posts made by Dewantoro Triatmojo"
        headTag="posts, blog, announcement"
      />
      <NavBar onPage="Posts" />
      <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center pt-6 pb-12">
        <div className="mb-8 flex flex-col items-center gap-y-4">
          <SearchBar handleChange={handleChange} handleReset={handleReset} />
          <div className="text-lg font-semibold text-[#208ce5] 2xl:text-xl">
            {!isEmpty ? `${countResult} search result was found` : <br />}
          </div>
        </div>
        <div className="grid justify-center gap-x-14 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredData.map((item: any) => (
            <div
              key={item.id}
              data-aos="slide-up"
              data-aos-once="true"
              data-aos-duration="400"
              data-aos-easing="ease-out-quad"
              data-aos-anchor-placement="center-bottom"
            >
              <ArticleCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
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
            updatedAt
            _firstPublishedAt
          }
        }
        `,
      }),
    })
  ).json();

  return {
    props: { posts: res.data.allPostsContents },
  };
}
