import prisma from "../lib/prisma.js";

export const addMessage = async(req , res) => {
    const tokenUserId = req.userId;
    const chatId = req.params.chatId;
    const text = req.body.text;
    try{

        const chat = await prisma.chat.findUnique({
            where:{
                id:chatId,
                userIDs:{
                    hasSome:[tokenUserId],
                }
            }
        });

        if(!chat)res.status(404).json({message:"Chats not found"});

        const message = await prisma.message.create({
            data:{
                text,
                chatId,
                userId :tokenUserId,
            }
        });

        await prisma.chat.update({
            where:{
                id:chatId,
            },
            data:{
                seenBy:[tokenUserId],
                lastMessage:text,
            }
        });
        res.status(201).json(message);
    }
    catch(err)
    {
        console.log(err);
        res.status(501).json({message:"Failed to get Messages"});
    }
}