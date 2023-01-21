import React, { useState } from "react";
import { supabase } from "../../services/supabaseClient";
import { useRef } from "react";
import { useRouter } from "next/router";
import Loading from "../Loading";

const PostForm = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  const inputRef = useRef();
  const createPost = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      await supabase.from("feed").insert([
        {
          author: "Mohamed",
          title:title ,
          content: content,
        },
      ]);
    } catch (error) {
      setLoading(false);
      console.error(error);
    } finally {
      setLoading(false);
      router.push("/");
    }
  };
  return (
    <div className="flex flex-col space-y-6">
        {
        
        loading && <Loading/>}
      <h1 className="border-b border-[#344546] pb-3 text-lg font-medium">
        Create a Post
      </h1>
      <div className="flex flex-col space-y-2 rounded bg-[#1a1a1b] p-4">
        <input
          className="bg-[#1a1a1b] border border-[#343546] px-4 py-2 text-left text-sm text-white focus:outline-none"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <textarea
          className="bg-[#1a1a1b] border border-[#343546] px-4 py-2 text-left text-sm text-white focus:outline-none"
          name="content"
          id="content"
          cols="30"
          rows="10"
          placeholder="Text (required)"
          value={content}
          onChange={(e)=>setContent(e.currentTarget.value)}
        />
        <div className="flex justify-end pt-2">
          <button onClick={createPost} className="bg-gray-200 px-4 py-1.5 text-xs font-semibold text-[#1a1a1b] rounded-full">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
