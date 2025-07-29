import style from './Sidebar.module.css'
import user from '../../Logos/user.png'
import ChatScreen from '../Chat-Screen/ChatScreen'
import {data} from "../../Json/data.js"
import { useEffect, useState } from 'react'
import newMessage from "../../Logos/newMessage.png"

let InitailState = data;


export default function Sidebar(){

    let [INITIAL_STATE,setINITIAL_STATE] = useState(InitailState);
    let [filteredArr,setFilteredArr] = useState(INITIAL_STATE);
    let [chat,setChat] = useState(null);
    let [search,setSearch] = useState("");
    

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

        let filteredArr = INITIAL_STATE.filter(data=>data.name.toLowerCase().includes(search.toLowerCase()))
        setFilteredArr(filteredArr);

        const updatedChat = updated.find(user => user.id === id);
        setChat(updatedChat);

    }
    useEffect(()=>{
        let filteredArr = INITIAL_STATE.filter(data=>data.name.toLowerCase().includes(search.toLowerCase()))
        setFilteredArr(filteredArr);
    },[INITIAL_STATE,search]);

  
 
    
    return(
        < div className={style.screenCont}>
            <div className={style.sideBarCont}>
                <div className={style.searchCont}>
                    <input placeholder='Search' onChange={(e)=>setSearch(e.target.value)}/>
                </div>

                <ul className={style.listCont}>

                    {filteredArr.map(data=>( 
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
                <a className={style.add} type='button' ><img src={newMessage}/></a>
            </div>
            <ChatScreen chat={chat} sendMessage={sendMessage}/>
        </div>
    )
}