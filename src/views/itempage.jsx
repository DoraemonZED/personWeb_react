import React from "react";
import { useLocation } from "react-router-dom";

export default function Home(){
    let location = useLocation()
    return (
        <div>
            其他页面
            {
                JSON.stringify(location)
            }
        </div>
    )
}