import { NextResponse } from "next/server";
import Contact from "@/models/Contact";
import { Connect } from "@/lib/Connection";
export async function POST(req){
    try{
      await Connect()
      const contactDetail =await req.json()
      console.log(contactDetail,'detail');
      const contact =new Contact(contactDetail)
      await contact.save()
      return NextResponse.json({message:'Thanks for trusting me ,I will get you soon',success:true,status:201})
    }catch(error){
        return NextResponse.json({message:error.message,success:false,status:500})
    }
}