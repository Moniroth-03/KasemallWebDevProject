"use client";
import Image from "next/image";
import CambodiaFlag from "./CamFlag.png";
import { FiSearch } from "react-icons/fi";
import { IoChatbubbleSharp, IoNotifications } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaChevronRight, FaUser } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import SideBar from "@/component/SideBar";
import MenuBar from "@/component/MenuBar";
import React from "react";

export default function Homepage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className="grid grid-rows-3 grid-flow-col gap-4 ">
        <div className="row-span-3">
          <SideBar />
        </div>
        <div className="col-span-1">
          <div className="z-50">
            <MenuBar />
          </div>
          {children}
        </div>
      </section>
    </>
  );
}
