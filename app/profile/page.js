"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import bernard from "../asset/images/bernard.jpg";
import { UserLayout } from "../components/layout/UserLayout/page";
import "./profile.css";

export default function Home() {
  return (
    <>
      <UserLayout>
        <div className="column-profile">
          <div>
            <Image className="gambar-profile" src={bernard} />
          </div>
          <h1> Bernard WIjaya</h1>
          <h6> 1000 video skandal</h6>
          <div>
            <button class="profile-btn" type="submit">
              Edit Profile
            </button>
          </div>
          <div className="row-btn">
            <div className="row-btn-prof">
              <button class="profile-btn" type="submit">
                Postingan Anda
              </button>
            </div>
            <div className="row-btn-prof">
              <button class="profile-btn" type="submit">
                Disimpan
              </button>
            </div>
          </div>
          <div className="img-row">
            <div className="img-daftar">
            <Image className="img-post" src={bernard} />
            <h4>Luar biasa</h4>
            23 Skandal <i>1 hari yang lalu</i>
            </div>
            <div className="img-daftar">
            <Image className="img-post" src={bernard} />
            <h4>Luar biasa</h4>
            23 Skandal <i>1 hari yang lalu</i>
            </div>
            <div className="img-daftar">
            <Image className="img-post" src={bernard} />
            <h4>Luar biasa</h4>
            23 Skandal <i>1 hari yang lalu</i>
            </div>
            <div className="img-daftar">
            <Image className="img-post" src={bernard} />
            <h4>Luar biasa</h4>
            23 Skandal <i>1 hari yang lalu</i>
            </div>
          </div>
        </div>
      </UserLayout>
    </>
  );
}

// To create routes, you must create new folder, and in the folder add page.js
// example : i want to create profile routes, so i must to create profile folder, and inside profile folder add page.js
