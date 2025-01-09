import React, { useEffect, useState } from "react";
import { fetchImage, fetchData } from "../api/api";
import { toast } from 'react-toastify';
import ProfileCard from "../components/ProfileCard/ProfileCard";
import Links from "../components/Link/Link";
import EndText from "../components/EndText/EndText";
const Loader = React.lazy(() => import('../components/Loader/Loader'));

function Home() {
  const [imageURL, setImageURL] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const LOCAL_STORAGE_KEY = 'apiData';
  const EXPIRY_TIME = 15 * 60* 1000; // 15 minutes

  const fetchDataAndImage = async () => {
    try {
      const [imageResponse, dataResponse] = await Promise?.all([fetchImage(), fetchData()]);

      if (imageResponse && dataResponse) {
        const apiResult = {
          imageURL: imageResponse,
          data: dataResponse,
          timestamp: new Date()?.getTime(),
        };
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON?.stringify(apiResult));
        setImageURL(imageResponse);
        setData(dataResponse);
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const isDataExpired = (timestamp) => {
      return (new Date()?.getTime() - timestamp) > EXPIRY_TIME;
    };
  
    const checkAndFetchData = () => {
      const localData = localStorage?.getItem(LOCAL_STORAGE_KEY);
      if (localData) {
        const parsedData = JSON?.parse(localData);
        if (isDataExpired(parsedData.timestamp)) {
          // Clear storage and fetch new data if expired
          localStorage?.removeItem(LOCAL_STORAGE_KEY);
          fetchDataAndImage();
        } else {
          setImageURL(parsedData?.imageURL);
          setData(parsedData?.data);
          setLoading(false);
        }
      } else {
        fetchDataAndImage();
      }
    };
  
    checkAndFetchData();
  
    const interval = setInterval(() => {
      checkAndFetchData();
    }, EXPIRY_TIME);
  
    return () => clearInterval(interval);
  }, [EXPIRY_TIME]);
  

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="Pages">
      <div className="content-wrapper">
        <ProfileCard profileImageUrl={imageURL} />
        <Links ArrayOfLinks={data} />
      </div>
      <EndText />
    </div>
  );
}

export default Home;
