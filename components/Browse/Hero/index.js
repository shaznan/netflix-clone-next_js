import React from "react";

const Hero = () => {
  const getURL = async () => {
    const result = await Storage.get(`Brooklyn-Nine-Nine_trailer.mp4`, {
      download: false,
      contentType: "video/mp4",
    });
  };

  useEffect(() => {
    getURL();
  }, []);

  console.log(result);

  return <div>Hero</div>;
};

export default Hero;
