import React, { useEffect, useState, useCallback } from "react";
import { fetchImage, fetchLinksData, fetchComponentData } from "../api/api";
import { toast } from "react-toastify";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import Links from "../components/Links/Links";
import Watermark from "../components/Watermark/Watermark";
const Loader = React.lazy(() => import("../components/Loader/Loader"));

function Home() {
  const [apiData, setApiData] = useState({
    imageURL: null,
    linksData: [],
    profileCardData: [],
    profileCardStyle: [],
    linksStyle: [],
    watermarkData: [],
    watermarkStyle: [],
    timestamp: null,
  });
  const [loading, setLoading] = useState(true);

  const LOCAL_STORAGE_KEY = "apiData";
  const EXPIRY_TIME = 15 * 60 * 1000; // 15 minutes

  const fetchApiData = async () => {
    try {
      const [imageResponse, linksDataResponse, componentDataResponse] =
        await Promise.all([
          fetchImage(),
          fetchLinksData(),
          fetchComponentData(),
        ]);

      if (imageResponse && linksDataResponse && componentDataResponse) {
        const newData = {
          imageURL: imageResponse ?? null,
          linksData: linksDataResponse ?? [],
          profileCardData: componentDataResponse?.profile_card_data ?? [],
          profileCardStyle: componentDataResponse?.profile_card_style ?? [],
          linksStyle: componentDataResponse?.links_style ?? [],
          watermarkData: componentDataResponse?.watermark_data ?? [],
          watermarkStyle: componentDataResponse?.watermark_style ?? [],
          timestamp: Date.now() ?? null,
        };
        setApiData(newData);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newData));
      }
    } catch (error) {
      toast.error("Something went wrong while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  const checkAndFetchData = useCallback(() => {
    const isDataExpired = (timestamp) =>
      new Date().getTime() - timestamp > EXPIRY_TIME;

    const localData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (localData) {
      const parsedData = JSON.parse(localData);
      if (isDataExpired(parsedData.timestamp)) {
        // Data expired, fetch new data
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        fetchApiData();
      } else {
        setApiData(parsedData);
        setLoading(false);
      }
    } else {
      // No data in localStorage, fetch fresh data
      fetchApiData();
    }
  }, [EXPIRY_TIME]);

  useEffect(() => {
    checkAndFetchData();

    const interval = setInterval(checkAndFetchData, EXPIRY_TIME);
    return () => clearInterval(interval);
  }, [checkAndFetchData, EXPIRY_TIME]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="Pages">
      <div className="content-wrapper">
        <ProfileCard
          profileImageUrl={apiData.imageURL}
          profileCardData={apiData.profileCardData}
          profileCardStyle={apiData.profileCardStyle}
        />
        <Links linksData={apiData?.linksData} linksStyle={apiData.linksStyle} />
      </div>
      <Watermark
        watermarkData={apiData.watermarkData}
        watermarkStyle={apiData.watermarkStyle}
      />
    </div>
  );
}

export default Home;
