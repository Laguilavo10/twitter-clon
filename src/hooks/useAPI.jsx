import { useState, useEffect } from "react";

export const useAPI = (API, catidadTweets = 10)=>{
  const [infoTweet, setInfoTweet] = useState(null);
  useEffect(() => {

    fetch(API + catidadTweets)
      .then((res) => res.json())
      .then((data) => setInfoTweet(data));
  }, []);

  return {infoTweet}
}