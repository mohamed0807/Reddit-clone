import React from "react";
import Image from "next/image";
import pro from "../../public/pro2.jpg";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

const style = {
  profilePic: "h-5 w-5 object-cover rounded-full",
  wrapper: "flex items-center space-x-1 text-xs text-[#818384]",
  profilePicContainer: "flex items-center space-x-1",
};

const Info = ({ author, created_at }) => {
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");

  return (
    <div className={style.wrapper}>
      <div className={style.profilePicContainer}>
        <img className={style.profilePic} src="https://i.pinimg.com/564x/f9/c9/1a/f9c91a4f7d5d2d2f632c896812f28e3b.jpg"   />
      </div>
      <div className="cursor-pointer text-xs font-semibold text-[#D7DADC] hover:underline">
        Mohamed
      </div>
      <div>*</div>
      <div className="flex items-center space-x-1">
        <span>Posted By {author}</span>
        <span>*</span>
        <span>{timeAgo.format(new Date(created_at), "twitter-now")}</span>
      </div>
    </div>
  );
};

export default Info;
