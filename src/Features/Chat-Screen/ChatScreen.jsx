import style from './Chat-Screen.module.css'
import user from "../../Logos/user.png"
import live_chat_Logo from "../../Logos/live-chat.png"
import { useState } from 'react';


export default function ChatScreen(props){

    let {chat,sendMessage} = props;
    let [text,setText] = useState("");

    const handleSend = (id,msg)=>{
        
        sendMessage(id,msg);
        setText("");
    }

    return(
        <>
        {chat?<div className={style.screenCont}>
            
            <div className={style.head}>
                <div className={style.profilePhotoCont}>
                    <img src={chat.profilePic.length>3?(chat.profilePic):(user)}/>
                </div>
                <div className={style.profileNameCont}>
                    <h1>{chat.name}</h1>
                </div>
            </div>
            <div className={style.ChatScreenOuterCont}>
                
                
                {chat.messages.map((conv, index) => (
                    conv.sender === "you" ? (
                        <div key={index} className={style.messageUser}>
                        <p>{conv.messageText}</p>
                        <p className={style.time}>{conv.timestamp.slice(0,16)}</p>
                        </div>
                    ) : (
                        <div key={index} className={style.messageFrnd}>
                        <p>{conv.messageText}</p>
                        <p className={style.time}>{conv.timestamp.slice(0,16)}</p>
                        </div>
                    )
                    ))}
                
                
                
                
            </div>
            <div className={style.textArea}>
                    
                    <input type='textArea' value={text} onChange={(e)=>setText(e.target.value)}/>
                    <button className={style.sendButton} onClick={()=>handleSend(chat.id,text)}>Send</button>
            </div>
        </div>:
        <div className={style.emptyCont}>
            <img src={live_chat_Logo}/>
        </div>}
        </>
        
    )
}