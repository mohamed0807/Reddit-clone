import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import {supabase} from '../services/supabaseClient'


export const RedditContext=createContext()
export const RedditProvider = ({children})=>{
    const [currentUser,setCurrentUser]=useState("")
    const [selectedPost,setSelectedPost]=useState(null)
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    useEffect(() => {
        //  const user= supabase.auth.getSession().then((res)=>console.log(res.data.session.user))
      
          supabase.auth.getUser().then((res)=>setCurrentUser(res.data.user));
          supabase.auth.onAuthStateChange((_event,authSession)=>{
            setCurrentUser(authSession.user)
            
          })
        }, []);

        return (
            <RedditContext.Provider value={{currentUser,fetcher,selectedPost,setSelectedPost}} >
                {children}
            </RedditContext.Provider>
        )
}
 
