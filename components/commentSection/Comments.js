import React, { useContext, useEffect, useState } from "react";
import useSWR from "swr";
import { RedditContext } from "../../context/RedditContext";
import Image from "next/image";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { UpvoteIcon } from "../common/UpvoteIcon";
import { DownvoteIcon } from "../common/DownvoteIcon";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
const Comments = ({ postId }) => {
  TimeAgo.addDefaultLocale(en);

  const timeAgo = new TimeAgo("en-US");
  const [comments, setComments] = useState([]);
  const { fetcher } = useContext(RedditContext);
  const { data, error } = useSWR(`/api/getComments?postId=${postId}`, fetcher, {
    refreshInterval: 200,
  });
  //   console.log( "errr:", error?.message)
  //   console.log("Dat::",data.data)

  useEffect(() => {
    if (!data) return;
    setComments(data.data);
  }, [data]);
  // console.log("Comments", comments);
  return (
    <div className="bg-[#1a1a1a] p-4">
      {comments &&
        comments.map((comment, id) => (
          <div className="my-[1rem] flex flex-col gap-[1rem]">
            <div className="flex gap-[.5rem]">
              <div className="h-[1.2rem] w-[1.2rem] overflow-hidden rounded-full relative">
                <Image
                  src={comment.users.profileImage}
                  layout="fill"
                  className="object-contain"
                />
              </div>
              <span>{comment.author}</span>
              <span>*</span>
              <span>
                {timeAgo.format(new Date(comment.created_at), "twitter-now")}
              </span>
            </div>
            <div>{comment.text}</div>
            <div className="flex gap-[.4rem]">
              <span className="text-[#818384] ">
                <UpvoteIcon />
              </span>
              <span>0</span>
              <span className="text-[#818384] ">
                <DownvoteIcon />
              </span>
              <span className="flex items-center gap-[.2rem] text-[#818384]">
                <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />
                <span>Reply</span>
              </span>
              <span className="text-[#818384] ">Give</span>
              <span className="text-[#818384] ">Share</span>
              <span className="text-[#818384] ">Save</span>
              <span className="text-[#818384] ">Follow</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Comments;
