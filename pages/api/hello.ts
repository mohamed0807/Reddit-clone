// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

import {supabase} from '../../services/supabaseClient'

type Data = {
  data: any,
}
export default  async function handler (req: NextApiRequest,res: NextApiResponse<Data>){
    let {data,error}=await supabase
    .from('feed')
    .select('*')
    .order('id',{ascending:false})
    res.status(200).json({data:data})
}