import { useState, useEffect } from "react";
import "../../styles/timeline.css";
import icon from "../../icons";

export function Timeline({data}) {
  const [isLike, setIsLike] = useState(false);
  const [isRetweet, setIsRetweet] = useState(false);


  function toggleBtns(boton, btnFunction) {
    btnFunction(!boton);
  }
  let reTweet = isRetweet ? icon("retweet", "#00BA7C") : icon("retweet");
  let like = isLike ? icon("likeTrue") : icon("likeBorder");

  return (
    <>
      <div className="timeline-item">
        <img
          src="https://i.pinimg.com/originals/79/4f/c2/794fc2b1eecc34caaf3fa7f92de6c1b9.jpg"
          alt=""
        />
        <h4>
        {data.author} <span>@{data.author}</span>
        </h4>
        <p>{data.quote}</p>
        <div className="interacciones-container">
          <button> {icon("coment")}</button>
          <button onClick={() => toggleBtns(isRetweet, setIsRetweet)}>
            {reTweet}
          </button>
          <button onClick={() => toggleBtns(isLike, setIsLike)}>
            {like}
          </button>
          <button>{icon("compartir")} </button>
        </div>
      </div>
    </>
  );
}
