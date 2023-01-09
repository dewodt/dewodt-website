import ArticleCard from "components/articlecard";
import NavBar from "components/navbar";
import PageHead from "components/pagehead";
import SearchBar from "components/searchbar";
import { useState, useEffect } from "react";
import { request } from "../lib/datocms";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Posts({ data }: any) {
  const postsData = data["allPosts"];
  const [filteredData, setFilteredData] = useState(postsData);
  const [countResult, setCountResult] = useState();
  const [isEmpty, setIsEmpty] = useState(true);
  const [isInitial, setIsInitial] = useState(true)

  useEffect(() => {
    AOS.init();
  }, [])

  function handleChange() {
    const inputValue = (document.getElementById("input") as HTMLInputElement).value.toLowerCase();
    if (inputValue === "") {
      setFilteredData(postsData);
      setIsEmpty(true);
    } else {
      const newData = postsData.filter((item: any) => {
        const itemTitle = item.title.toLowerCase();
        const itemDate = new Date(item._firstPublishedAt)
          .toLocaleString("en-UK", { dateStyle: "long" })
          .toLowerCase();
        return itemTitle.includes(inputValue) || itemDate.includes(inputValue);
      });
      setFilteredData(newData);
      setIsEmpty(false);
      setCountResult(newData.length);
      setIsInitial(false);
    }
  }

  function handleReset() {
    (document.getElementById("input") as HTMLInputElement).value = "";
    setFilteredData(postsData);
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
          <div className={`text-lg 2xl:text-xl font-semibold text-[#208ce5] ${(!isEmpty && !isInitial) ? "animate-fadeIn animate-duration-300 animate-ease-out" : "animate-fadeOut animate-duration-300 animate-ease-in"}`}>
            {!isInitial ? `${countResult} search result was found` : <br />}
          </div>
        </div>
        <div className="grid justify-center gap-x-14 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredData.map((item: any) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="800"
              data-aos-easing="ease-out-quad"
              data-aos-anchor-placement="top-bottom"
            >
              <ArticleCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const POSTS_QUERY = `query Posts {
  allPosts(orderBy: _firstPublishedAt_DESC) {
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
}`;

export async function getStaticProps() {
  const data = await request({
    query: POSTS_QUERY,
  });
  return {
    props: { data },
  };
}
