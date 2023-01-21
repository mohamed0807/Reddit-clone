import Image from "next/image";
import React, { useEffect, useState } from "react";
import img from "../public/redimg.png";
import { supabase } from "../services/supabaseClient";

const Login = () => {
  
  // console.log("UsER:",user)
  const signInWithGoogle = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      console.log("user", data)
    } catch (error) {
      console.log("error", error.message);
    }
  };
  return (
    <div className="">
      <div>
        <Image
          src="https://images.pendect.com/WSYCiar3j-7HK-MgYK5mO24HXqw=/1600x832/smart/pendect.local/categories/crime-law/reddit-users-face-legal-action-for-piracy-of-onlyfans-content/%40%40images/image-6b28b36301befa55be9e965ecdc95727.jpg"
          width={200}
          height={200}
        />
      </div>
      <button onClick={signInWithGoogle}>
        <Image
          src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
          width={200}
          height={200}
        />
        <span>SignIn with Google</span>
      </button>
    </div>
  );
};

export default Login;
