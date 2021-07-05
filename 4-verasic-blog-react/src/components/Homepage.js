import { useState } from 'react';
import BlogListSingleCard from './BlogListSingleCard';
// import { useHistory } from 'react-router-dom';

const Homepage = () => {
  const publishedAt = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const [blogs] = useState([
    {
      id: 1,
      title: 'Post Number 1',
      slug: 'post-number-1',
      author: 'Dio Ilham',
      read_time: '7 mins',
      published_at: publishedAt,
      img: 'pic-1.webp',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quia nesciunt asperiores doloribus harum eum alias, ut delectus numquam adipisci aut quae sint molestiae, suscipit inventore dolorem animi eos sapiente. Ratione, expedita debitis? Quisquam ex magni velit voluptatum excepturi et veritatis quibusdam, veniam beatae aliquam ipsum, nihil ducimus illum odit.',
    },
    {
      id: 2,
      title: 'Post Number 2',
      slug: 'post-number-2',
      author: 'Misaka',
      read_time: '7 mins',
      published_at: publishedAt,
      img: 'pic-2.webp',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quia nesciunt asperiores doloribus harum eum alias, ut delectus numquam adipisci aut quae sint molestiae, suscipit inventore dolorem animi eos sapiente. Ratione, expedita debitis? Quisquam ex magni velit voluptatum excepturi et veritatis quibusdam, veniam beatae aliquam ipsum, nihil ducimus illum odit.',
    },
    {
      id: 3,
      title: 'Post Number 3',
      slug: 'post-number-3',
      author: 'Misaka',
      read_time: '7 mins',
      published_at: publishedAt,
      img: 'pic-1.webp',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quia nesciunt asperiores doloribus harum eum alias, ut delectus numquam adipisci aut quae sint molestiae, suscipit inventore dolorem animi eos sapiente. Ratione, expedita debitis? Quisquam ex magni velit voluptatum excepturi et veritatis quibusdam, veniam beatae aliquam ipsum, nihil ducimus illum odit.',
    },
    {
      id: 4,
      title: 'Post Number 4',
      slug: 'post-number-4',
      author: 'Dio Ilham',
      read_time: '7 mins',
      published_at: publishedAt,
      img: 'pic-1.webp',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quia nesciunt asperiores doloribus harum eum alias, ut delectus numquam adipisci aut quae sint molestiae, suscipit inventore dolorem animi eos sapiente. Ratione, expedita debitis? Quisquam ex magni velit voluptatum excepturi et veritatis quibusdam, veniam beatae aliquam ipsum, nihil ducimus illum odit.',
    },
    {
      id: 5,
      title: 'Post Number 5',
      slug: 'post-number-5',
      author: 'Saten',
      read_time: '7 mins',
      published_at: publishedAt,
      img: 'pic-2.webp',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quia nesciunt asperiores doloribus harum eum alias, ut delectus numquam adipisci aut quae sint molestiae, suscipit inventore dolorem animi eos sapiente. Ratione, expedita debitis? Quisquam ex magni velit voluptatum excepturi et veritatis quibusdam, veniam beatae aliquam ipsum, nihil ducimus illum odit.',
    },
  ]);

  return (
    <>
      <div className="w-4/5 md:w-7/12 lg:w-6/12 py-20 mt-14 mx-auto flex flex-col gap-4">
        <h2 className="mb-4">Ma Story</h2>
        {blogs.map((blog) => (
          <BlogListSingleCard
            key={blog.id}
            title={blog.title}
            slug={blog.slug}
            author={blog.author}
            readTime={blog.read_time}
            img={blog.img}
            publishedAt={blog.published_at}
            content={blog.content}
          />
        ))}
      </div>
    </>
  );
};

export default Homepage;
