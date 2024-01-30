"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import sutek from "../asset/images/Register.png";
import "../register.css";

export default function Home() {
  return (
    <div className="container-register">
      <Image
        src={sutek} // Gantilah dengan path gambar yang sesuai
        alt="Register Image"
        width={800}
        height={750}
      />
      <div className="formContainer">
        <form>
          <h1 align="center">Masuk Photogood</h1>
          <label htmlFor="name">Nama:</label>
          <input type="text" id="name" placeholder="Nama" name="name" />
          <label htmlFor="password">Email:</label>
          <input type="text" id="email" placeholder="Email" name="Email" />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
          />
          <h5>Sudah punya akun? 
          <Link href="./login">
          <span>Login</span>
          </Link>
          </h5>
          <button class="daftar-btn" type="submit">
            Daftar
          </button>
        </form>
      </div>
    </div>
  );
}

// To create routes, you must create new folder, and in the folder add page.js
// example : i want to create profile routes, so i must to create profile folder, and inside profile folder add page.js
