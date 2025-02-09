"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export async function createOnramp(amount:number,provider:string){
    const session=await getServerSession(authOptions);
    const userId=session.user.id;
    const token=Math.random().toString();
    if(!userId){
        return {message:"User not logged in"};

    }
  await prisma.onRampTransaction.create({
    data:{
        userId:Number(userId),
        amount:amount,
        status:"Processing",
        provider,
        startTime:new Date(),
        token:token,

        }
  })
  return {
    message: "On Ramp Transaction created successfully",
  }
}