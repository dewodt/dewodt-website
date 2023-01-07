import ArticleCard from "components/articlecard";
import NavBar from "components/navbar";
import PageHead from "components/pagehead";
import SearchBar from "components/searchbar";
import { useState } from "react";
import { request } from "../lib/datocms";

export default function Posts({ data }: any) {
  const postsData = data["allPosts"];
  const [filteredData, setFilteredData] = useState(postsData);
  const [countResult, setCountResult] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);

  function handleChange() {
    const inputValue = (document.getElementById("input") as HTMLInputElement).value.toLowerCase();
    if (inputValue === "") {
      setFilteredData(postsData);
      setCountResult(0);
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
      setCountResult(newData.length);
      setIsEmpty(false);
    }
  }

  function handleReset() {
    (document.getElementById("input") as HTMLInputElement).value = "";
    setFilteredData(postsData);
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
          <div className="text-lg 2xl:text-xl font-bold text-[#208ce5]">
            {!isEmpty ? `${countResult} search result was found` : <br />}
          </div>
        </div>
        <div className="grid justify-center gap-x-14 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredData.map((item: any) => (
            <ArticleCard key={item.id} data={item} />
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
