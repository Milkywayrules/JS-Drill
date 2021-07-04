import { useHistory } from "react-router-dom";

const HomeHero = () => {
  const xx = window.location.origin
  
  useHistory('/')

  return (
    <div className="text-9xl">
      Hi! 👋👋👋
      <div>
        { xx }
      </div>
    </div>
  );
}
 
export default HomeHero;