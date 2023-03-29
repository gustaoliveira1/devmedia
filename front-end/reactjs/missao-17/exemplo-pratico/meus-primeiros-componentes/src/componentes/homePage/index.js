import React from "react";
import Cards from '../cards'
import './style.css'

export default function HomePage() {
    return (
        <div className="home-page">
            <Cards/>
            <Cards/>
            <Cards/>
        </div>
    )
}