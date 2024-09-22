"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
//import PopupWidget from "./components/popupWidget";
import OnBoard from "./components/onboard";
//import Message from "./components/message";
//import { ChatView, ChatWidget } from "@pushprotocol/uiweb";
//import PushWidget from "./components/pushwidget";
//import PushProfile from "./components/pushprofile";
export default function Home() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(/paradisecitymetaverse.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold uppercase">
              Lexington Tech <br />
              WEB3 Messaging
            </h1>
            <figure>
              <img className="p-2" src="/blocknative.svg" />
            </figure>

            <div className="py-2">
              <OnBoard />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
