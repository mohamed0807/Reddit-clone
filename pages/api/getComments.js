import { supabase } from "../../services/supabaseClient";

export default async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("com")
      .select("*,users!inner(*)")
      .eq("postId", req.query.postId);
    // .eq("postId", 1);
    // console.log("Query::", req.query);
    console.log("req::", error);
    res.status(200).send({ data: data });
    // res.status(200).json({ data: data });
  } catch (error) {
    console.log("ERROR:::", error.message);

    // res.status(500).send({ error: "Error while fetching comments" });
  }
};
