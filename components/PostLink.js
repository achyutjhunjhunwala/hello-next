import Link from 'next/link';

const PostLink = ({ post }) => {
  return (
    <>
      <li>
        <Link href="/post/[id]" as={`/post/${post.id}`}>
          <a>{post.name}</a>
        </Link>
      </li>
      <style jsx>{`
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </>
  )
};

export default PostLink;