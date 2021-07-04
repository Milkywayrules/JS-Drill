import { useState } from 'react';
// import { useHistory } from 'react-router-dom';

const Homepage = () => {
  const [blogs] = useState([
    {
      id: 1,
      title: 'Post Number 1',
      slug: 'post-number-1',
      author: 'Dio Ilham',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quia nesciunt asperiores doloribus harum eum alias, ut delectus numquam adipisci aut quae sint molestiae, suscipit inventore dolorem animi eos sapiente. Ratione, expedita debitis? Quisquam ex magni velit voluptatum excepturi et veritatis quibusdam, veniam beatae aliquam ipsum, nihil ducimus illum odit.',
    },
    {
      id: 2,
      title: 'Post Number 2',
      slug: 'post-number-2',
      author: 'Misaka',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quia nesciunt asperiores doloribus harum eum alias, ut delectus numquam adipisci aut quae sint molestiae, suscipit inventore dolorem animi eos sapiente. Ratione, expedita debitis? Quisquam ex magni velit voluptatum excepturi et veritatis quibusdam, veniam beatae aliquam ipsum, nihil ducimus illum odit.',
    },
    {
      id: 3,
      title: 'Post Number 3',
      slug: 'post-number-3',
      author: 'Misaka',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quia nesciunt asperiores doloribus harum eum alias, ut delectus numquam adipisci aut quae sint molestiae, suscipit inventore dolorem animi eos sapiente. Ratione, expedita debitis? Quisquam ex magni velit voluptatum excepturi et veritatis quibusdam, veniam beatae aliquam ipsum, nihil ducimus illum odit.',
    },
    {
      id: 4,
      title: 'Post Number 4',
      slug: 'post-number-4',
      author: 'Dio Ilham',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quia nesciunt asperiores doloribus harum eum alias, ut delectus numquam adipisci aut quae sint molestiae, suscipit inventore dolorem animi eos sapiente. Ratione, expedita debitis? Quisquam ex magni velit voluptatum excepturi et veritatis quibusdam, veniam beatae aliquam ipsum, nihil ducimus illum odit.',
    },
    {
      id: 5,
      title: 'Post Number 5',
      slug: 'post-number-5',
      author: 'Saten',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quia nesciunt asperiores doloribus harum eum alias, ut delectus numquam adipisci aut quae sint molestiae, suscipit inventore dolorem animi eos sapiente. Ratione, expedita debitis? Quisquam ex magni velit voluptatum excepturi et veritatis quibusdam, veniam beatae aliquam ipsum, nihil ducimus illum odit.',
    },
  ]);

  return (
    <div className="w-2/5 mx-auto">
      {blogs.map((blog) => (
        <div className="flex flex-col mx-auto" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{`Written by ${blog.author}`}</p>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
