import { request } from "../lib/datocms";

export default function Posts({ data }: any){
  return (
    <>
      {JSON.stringify(data, null, 2)}
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