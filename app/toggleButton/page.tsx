"use client"
import { useState } from "react"
import { FaGithubSquare } from "react-icons/fa"
import "@utils/toggleButton.css"
import Link from "next/link";
import React from "react";
import { useGlobalContext } from "@app/context/context";
export default function ToggleButton() {

  const {state, setState} = useGlobalContext();

  const toggle = () => {
    setState(!state)
  }

  return (
    <section className={`font-mono ${state ? "DARK" : "LIGHT"} flex flex-col items-center`}>
      <h1 className="text-5xl font-extrabold p-10 flex justify-center items-center text-center">
        Toggle Button
      </h1>
      <h2 className="text-3xl font-semibold flex justify-center">
        {state ? "DARK" : "LIGHT"} MODE
      </h2>
      <h4 className=" font-mono pt-10 text-center w-96">
        The dark-light toggle button, built using the useState hook in Next.js/React,
        adds a user-friendly theme-switching feature to web applications with ease.
      </h4>

      <div className="py-5 flex flex-col justify-center items-center">
        <h3 className="pb-5">
          Change to {state ? "Light" : "Dark"}
        </h3>
        <label className="switch ">
          <input type="checkbox" onClick={toggle} />
          <span className="slider round"></span>
        </label>
      </div>

      <h2 className="flex justify-center font-medium">
        <Link rel="stylesheet" href="https://github.com/Lakshaybogal" >
          <span className="flex justify-center items-center text-5xl font-normal pb-2">
            <FaGithubSquare />
          </span>

          Github Link
        </Link>
      </h2>
    </section>

  )
}
