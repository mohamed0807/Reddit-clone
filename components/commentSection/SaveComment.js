import React, { useContext, useState } from "react";
import { RedditContext } from "../../context/RedditContext";
import { supabase } from "../../services/supabaseClient";

const SaveComment = ({ postId }) => {
  const { currentUser } = useContext(RedditContext);
  const [input, setInput] = useState("");
  const saveComment = async () => {
    try {
      await supabase.from("com").insert({
        author: currentUser.user_metadata.full_name,
        text: input,
        postId: postId,
        userEmail: currentUser.email,
      });
    } catch (error) {
      console.log("Error::", error.message);
    } finally {
      setInput("");
    }
  };
  return (
    <div className="flex flex-col space-y-2 rounded bg-[#1a1b1b] p-4">
      <div className="text-sm">
        Comment as{" "}
        <span className="text-[#42962a]">
          {currentUser?.user_metadata?.full_name}
        </span>
      </div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="rounded border border-[#343536] bg-[#1a1a1b] px-4 py-2 text-left text-sm text-white focus:outline-none"
        cols="30"
        rows="8"
        placeholder="Give your thoughts here...."
      />
      <div className="flex justify-end pt-2">
        <button className="rounded-full bg-gray-200 px-4 py-1.5 text-xs font-semibold text-[#1a1a1b]" onClick={saveComment}>
          Comment
        </button>
      </div>
    </div>
  );
};

export default SaveComment;
