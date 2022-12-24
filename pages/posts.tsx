import NavBar from "components/navbar";
import PageHead from "components/pagehead";
import { useState } from "react";
import { request } from "../lib/datocms";

export default function Posts({ data }: any) {

  return (
    <>
      <PageHead />
      <NavBar onPage="Posts"/>
      <div className="min-h-[90vh] flex justify-center">
        { /* Search Bar */ }
        <div className="flex items-center w-[70vw] h-[5.55vh] rounded-[1.85vh] bg-white sm:w-[41.67vw] sm:h-[5.55vh]">
          <svg className="h-[3vh] mx-[3vw] sm:mx-[0.7vw] fill-[#1A1C2B]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/>
          </svg>
          <input className="bg-white text-[2.2vh] text-[#1A1C2B] focus:outline-none w-[100%] sm:text-[2.5vh]" placeholder="Search Posts" id="input" />
          <button className="mx-[3vw] sm:mx-[0.7vw]" onClick={() => (document.getElementById("input") as HTMLInputElement).value=""}>
            <svg className="h-[3vh] fill-[#1A1C2B]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>
            </svg>
          </button>
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
    keywords
    image {
      id
      url
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