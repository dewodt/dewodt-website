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
      const newData = postsData.filter( (item: any) => {
        const itemTitle = item.title.toLowerCase();
        const itemContent = item.content.toLowerCase();
        const itemDate = (new Date(item._firstPublishedAt)).toLocaleString("id-ID", { dateStyle: "long" }).toLowerCase();
        return itemTitle.includes(inputValue) || itemContent.includes(inputValue) || itemDate.includes(inputValue);
      });
      setFilteredData(newData);
      setCountResult(newData.length);
      setIsEmpty(false);
    }
  }

  function handleReset() {
    (document.getElementById("input") as HTMLInputElement).value="";
    setFilteredData(postsData);
    setCountResult(0);
    setIsEmpty(true);
  }

  return (
    <>
      <PageHead />
      <NavBar onPage="Posts"/>
      <div className="flex flex-col items-center min-h-[90vh] mt-[3vh] mb-[8vh] sm:mt-[6vh] sm:mb-[10vh]">
        <div className="flex flex-col gap-y-[1.85vh] h-[13vh] items-center mb-[2vh] sm:mb-[3vh]">
          <SearchBar handleChange={handleChange} handleReset={handleReset} />
          {
            (!isEmpty) && (
              <div className="text-[#208ce5] text-[2.5vh] font-bold">
                {countResult} search result was found
              </div>
            )
          }
        </div>
        <div className="flex flex-wrap justify-center w-[80vw] gap-x-[4vw] gap-y-[6vh]">
          {
            filteredData.map( (item: any) => 
              <ArticleCard key={item.id} data={item} />
            )
          }
        </div>
      </div>
    </> 
  );
}

const POSTS_QUERY = `query Posts {
  allPosts(orderBy: _firstPublishedAt_DESC) {
    id
    title
    content
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
    props: { data }
  };
}