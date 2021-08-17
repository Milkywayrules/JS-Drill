/* eslint-disable arrow-body-style */
const HomeHero = () => {
  return (
    <div className="w-3/5 pl-24 py-20">
      <div className="mx-auto flex justify-between max-w-screen-xl">
        <h1>
          Welcome to&nbsp;
          <span className="group">
            Verasic
            <span className="text-gray-300 animate-pulse-0 duration-150 transition-colors group-hover:text-emerald-400">
              Story
            </span>
          </span>
          , the straightforward story&#8209;based blog.
        </h1>
      </div>
    </div>
  );
};

export default HomeHero;
