import React, { useContext, useEffect, useState } from "react";
import {
  GiftIcon,
  ShareIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import TimeAgo from "javascript-time-ago";
import { RedditContext } from "../../context/RedditContext";
import useSWR from "swr";
import en from "javascript-time-ago/locale/en";

const style = {
  icon: "h-4 w-4",
  iconContainer: "flex items-center space-x-1 text-[#818384]",
  wrapper: "flex items-center space-x-4 pt-2 ",
};

const Action = ({ postId }) => {
  //   TimeAgo.addLocale(en);

  //   const timeAgo = new TimeAgo("en-US");
  const [comments, setComments] = useState([]);
  const { fetcher } = useContext(RedditContext);
  const { data, error } = useSWR(`/api/getComments?postId=${postId}`, fetcher, {
    refreshInterval: 200,
  });
  useEffect(() => {
    if (!data) return;
    setComments(data.data);
  }, [data]);
  return (
    <div className={style.wrapper}>
      <div className={style.iconContainer}>
        <PencilSquareIcon className={style.icon} />
        <span className="text-xs">{comments.length} comments</span>
      </div>
      <div className={style.iconContainer}>
        <GiftIcon className={style.icon} />
        <span className="text-xs">Awards</span>
      </div>
      <div className={style.iconContainer}>
        <ShareIcon className={style.icon} />
        <span className="text-xs">Share</span>
      </div>
    </div>
  );
};

export default Action;
