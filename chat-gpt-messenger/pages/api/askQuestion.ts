import type { NextApiRequest,NextApiResponse } from "next";


type Data={
    error:string;
    name:string;
}


export default async function handleClientScriptLoad(
    req:NextApiRequest,
    res:NextApiResponse<Data>
 )  {

const {prompt,chatId,model,sessionId}=req.body;

if(!prompt) {
    res.status(400).json({error :'prompt is required',name:''})
    return
}

if(!chatId) {
    res.status(400).json({error:'chatId is required',name:''})
return
}






        res.status(200).json({name:'John Doe',error:''})
    }