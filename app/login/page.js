"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Roedi from "../asset/images/Login.png";
import "../register.css";

export default function Home() {
  return (
    <div className="container-register">
      <Image
        src={Roedi} // Gantilah dengan path gambar yang sesuai
        alt="Register Image"
        width={800}
        height={750}
      />
      <div className="formContainer">
        <form>
          <h1 align="center">Login</h1>
          <label htmlFor="name">Nama:</label>
          <input type="text" id="name" placeholder="Username" name="name" />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
          />
          Lupa Password?
          <button class="login-btn" type="submit">Masuk</button>
          <h6>atau masuk dengan</h6>
          <button class="google-btn">Login with Google</button>
          <button class="facebook-btn">Login with Facebook</button>
          <h6 class="a">Belum punya akun?
          <Link href="./register">
          <span>Daftar</span>
          </Link>
          </h6>
        </form>
      </div>
    </div>
  );
}

// To create routes, you must create new folder, and in the folder add page.js
// example : i want to create profile routes, so i must to create profile folder, and inside profile folder add page.js
