import PropTypes from 'prop-types';

const BlogListSingleCard = ({ title, slug, author, readTime, publishedAt, img, content }) => (
  <div className="p-10 flex flex-col mx-auto bg-white rounded shadow-xl">
    <div>
      <img src={`/assets/img/story/${img}`} alt="Story" />
    </div>

    <h3>
      <a href={`/${slug}`}>{title}</a>
    </h3>
    <span>{`by ${author}`}</span>
    <div>
      <span>{publishedAt}</span>
      <span>•</span>
      <span>{readTime}</span>
    </div>
    <p>{content}</p>
  </div>
);

BlogListSingleCard.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  readTime: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default BlogListSingleCard;
