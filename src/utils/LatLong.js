import { useEffect, useState } from "react";

const LatLong = (address) => {
  const [result, setresult] = useState();

  useEffect(() => {
    getLatLong(address);
  }, [address]);

  const getLatLong = async (address) => {

    const response = await fetch(
      `https://geocode.maps.co/search?q=${address}+IN&api_key=66ccce58a59f6843163836gyp7d4286`
    );
    const data = await response.json();

    setresult(data);
  };

  return result;
};

export default LatLong;
