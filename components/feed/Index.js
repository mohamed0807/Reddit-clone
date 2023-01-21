import Post from "../common/Post";

import React from 'react'

// const posts=[
//     {id:0,title:"reddit",author:"Striker"},
//     {id:1,title:"medium",author:"David"},
//     {id:2,title:"facebook",author:"Alpha"},
// ]

const Index = ({posts}) => {
  return (
    <div className="space-y-2.5">
        {posts.map((post,id)=>(
            <Post {...post} key={id}/>
        ))}
    </div>
  )
}

export default Index
