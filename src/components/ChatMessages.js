import React from "react";
import { Person, ChatDots } from "react-bootstrap-icons";
import "../App.css"
export default function ChatMessages({ message, user }) {

    return (

        <div className={`d-flex ${user && "justify-content-end"}`}>

            <div className={user ? "Message_right" : "Message_left"}>
                <span className="Message_text">
                    {!user && <ChatDots className="Message_icon" />}
                    {message}
                    {user && <Person className="Message_icon" />}
                </span>
            </div>
        </div>

    )
}

