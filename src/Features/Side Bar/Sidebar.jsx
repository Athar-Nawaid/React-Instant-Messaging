import style from './Sidebar.module.css'
import user from '../../Logos/user.png'
import ChatScreen from '../Chat-Screen/ChatScreen'
import {data} from "../../Json/data.js"
import { useState } from 'react'
import { useReducer } from 'react'

let InitalState = data;


export default function Sidebar(){

    let [INITIAL_STATE,setINITIAL_STATE] = useState(InitalState);
    let [chat,setChat] = useState(null);
    console.log(chat);

    const sendMessage = (id,message)=>{
        
        let updated = INITIAL_STATE.map(data=>{
            if(data.id==id){
                return{
                    ...data,
                    messages:[
                        ...data.messages,
                        {
                            sender: "you",
                            messageText: message,
                            timestamp: new Date().toISOString()
                        }
                    ]
                }
            }
            return data;
        })
        

        setINITIAL_STATE(updated);
        const updatedChat = updated.find(user => user.id === id);
        setChat(updatedChat);
    }
    
    return(
        < div className={style.screenCont}>
            <div className={style.sideBarCont}>

                <ul className={style.listCont}>

                    {INITIAL_STATE.map(data=>( 
                        <li className={style.list} onClick={()=>setChat(data)}>
                        <div className={style.userCont}>
                            <img src={data.profilePic.length>3?(data.profilePic):(user)}/>
                        </div>
                        <div>
                            <h3>{data.name}</h3>
                            
                            <p>{data.messages[data.messages.length-1].messageText}</p>
                            <p className={style.time}>{data.messages[data.messages.length-1].timestamp.slice(0,10)}</p>
                        </div>
                    </li>
                    ))}
                    
                    
                </ul>
            </div>
            <ChatScreen chat={chat} sendMessage={sendMessage}/>
        </div>
    )
}