import { useEffect, useState } from "react";
import { dummyPostsData } from "../assets/assets";
import Loading from "../components/Loading";
import StoriesBar from "../components/StoriesBar";

const Home = () => {
  const [Homes, setHomes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHomes = async () => {
      setHomes(dummyPostsData);
      setLoading(false);
  };

  useEffect(() => {
      fetchHomes();
  }, [Homes]);

  return !loading ? (
  <div className="h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start xl:gap-8">
    <div>
      <StoriesBar />
      <div className="p-4 space-y-6">
          list of post
      </div>
    </div>

    <div>
      <div>
          
      </div>
      
    </div>
  </div>
  ) : (
      <Loading />
  );
};

export default Home;