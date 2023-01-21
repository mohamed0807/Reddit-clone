import React from "react";
import Vote from "../feed/Vote";
import Action from "../feed/Action";
import Info from "../feed/Info";
import { useContext } from "react";
import { RedditContext } from "../../context/RedditContext";
import { useRouter } from "next/router";

const style = {
  post: "flex flex-col space-y-1 cursor-pointer",
  wrapper: "flex space-x-3 rounded bg-[#1a1a1b]/80 p-2 border border-[#343536]",
  postTitle: "text-lg font-medium text-[#D7DADC]",
  postContent: "text-sm font-light text-[#D7DADC]/80",
};

const Post = ({ id, title, author, upvote, downvote, content, created_at }) => {
  const router = useRouter();
  const { setSelectedPost } = useContext(RedditContext);

  const navigateToPost = () => {
    setSelectedPost({
      id,
      title,
      content,
      author,
      created_at,
      upvote,
      downvote,
    });
    router.push(`/post/${id}`);
  };
  return (
    <div className={style.wrapper}>
      <Vote upvote={upvote} downvote={downvote} />
      <div className={style.post} onClick={navigateToPost}>
        <Info created_at={created_at} author={author} />
        <h1 className={style.postTitle}>{author}</h1>
        <p className={style.postContent}>{content}</p>
        <Action postId={id} />
      </div>
    </div>
  );
};

export default Post;
