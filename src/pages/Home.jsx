import { useEffect, useState } from "react";
import { dummyPostsData } from "../assets/assets";
import Loading from "../components/Loading";

const Home = () => {
  const [home, setHome] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const fetchHome = async () => {
    await Promise.resolve(); 
    setHome(dummyPostsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchHome();
  }, []);

  return !loading ? (
    <div className="h-full overflow-y-scroll py-10 xl:pr-5 flex items-center justify-center xl:gap-8">
      <div>
        <div className="p-4 space-y-6">list of post</div>
      </div>

      <div>
        <div>
          <h1>Sponsored</h1>
        </div>
        <h1>Recent messages</h1>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Home;
