import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import PostLink from './../components/PostLink'

const Page = (props) => (
  <>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <PostLink key={show.id} post={show} />
      ))}
    </ul>
    <style jsx>{`
        h1 {
          font-family: 'Arial';
        }
      `}</style>
  </>
);

Page.getInitialProps = async function () {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();
  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Page;