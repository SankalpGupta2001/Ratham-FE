import React, { useState, useEffect } from "react";

import ChatMessages from "./ChatMessages";

export default function ChatBot() {
    const [messages, setMessages] = useState([]);
    const [step, setStep] = useState(0);
    const [gotitbtn, setgotitbtn] = useState(false);
    const [text, setText] = useState("");
    const [cstep, setCStep] = useState(0);
    const [cname,setName] = useState("");
    const [age,setAge]= useState("");
   
    const onSend = () => {
        
        
        const newMessages = [...messages, { message: "..." , user:false}];
        setMessages(newMessages);
    
        setTimeout(() => {
            const newMessages = [...messages,{message: "Hello, Welcome to student info system!",user:false}];
            setMessages(newMessages);
        }, 3000);
        
        setStep(1);
    };
        
    



    

    const OnGotit = () => {

        if (cstep === 0) {

            const newmessages = [...messages, { message: "Got it!", user: true }];
            setgotitbtn(true);
            setMessages(newmessages);

            const newName = [...newmessages, { message: "Enter your Name" ,user:false}];
            setMessages(newName);
            setCStep(cstep + 1);
        }
        else if (cstep === 1) {

            const newmessages = [...messages, { message: text, user: true }];
            setMessages(newmessages);
            setName(text);
            setText("");
            const newAge = [...newmessages,{message:"Enter your Age",user:false}];
            setMessages(newAge);

            setCStep(cstep+1);
        }
        else if(cstep === 2){
            const newmessages = [...messages, { message: text, user: true }];
            setMessages(newmessages);
            setAge(text);
            setText("");
            const newThankYou = [...newmessages,{message:"Thank you. In 5 seconds, bot will exit",user:false}];
            setMessages(newThankYou);
            setTimeout(() => {
                setStep(2);
            }, 5000);

        }
    
        



    }




    return (
        <div >
            <div className="chat_heading" >
                <img src="https://tse4.mm.bing.net/th?id=OIP.qyvmdg5vZdg7HvL4k6Su8wHaHa&pid=Api&P=0&h=180" height={80} width={80} />
                <span>
                    <h1>ChatBot</h1>
                </span>
            </div>
            
             <div className={step === 1 ? "chat_new_header" : "chat_header"} data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50">

                {
                    step === 0 && (<div className="input-container" id="section1">
                        <ChatMessages message="Enter into Student Info System" user={false}/>
                        <div className="button-container">
                        <button type="button" class="btn btn-info" onClick={onSend} style={{borderRadius:"20px"}}>Enter</button>
                        <span> Enroll now</span>
                        </div>
                    </div>)


                }
                {
                    step === 1 && (<div id="section2">
                    
                        {
                            messages.length > 0 && messages.map((data,index) => <ChatMessages key={index} message={data.message} user={data.user} />)

                        }
                        {
                            (gotitbtn == false ) && <button type="button" class="btn btn-secondary" style={{ borderRadius: "10px" }}onClick={OnGotit}>Got it!</button>
                        }
                        {/* {
                            <div className="button-container">
                                <input type="text" className="form-control"  class="col-auto" value={text} onChange={(e) => setText(e.target.value)} style={{ width: "400px" ,borderRadius: "10px" }}/>
                                <button type="submit" class="col-auto btn btn-outline-dark" onClick={OnGotit} style={{ width: "100px" ,borderRadius: "10px"}}>Send</button>
                            </div>

                        } */}



                    </div>)
                }
                {
                    step === 2 && (
                        
                        <div>
                        <ChatMessages message={`Your name ${cname} aged ${age} has been added to the student system.      You may now exit.`} user={false}/>

                        </div>
                    )
                }


            </div>
            {
                    step === 1 && (
            <div className="input-container input_button" >
                 
                       
                            <div>
                                <input type="text" className="form-control"  class="col-auto" value={text} onChange={(e) => setText(e.target.value)} style={{ width: "400px" ,borderRadius: "10px" }}/>
                                <button type="submit" class="col-auto btn btn-dark" onClick={OnGotit} style={{ width: "100px" ,borderRadius: "10px"}}>Send</button>
                            </div>
                    
            </div>
                    )}
        </div>
    )
}

