"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import "./detail.css"
import roedi from "../asset/images/Detail.png";
export default function Home() {
  return (
    <div className="container-detail">
      <div className="row-detail">
        <div> 
        <Image className="gambar-stylized"
          src={roedi} 
        />
        </div>
        <div className="komentar-detail">
        Pembayaran anda telah dikonfirmasi. Ketuk lebih lanjut untuk melihat struk pembayaran anda.
        </div>
      </div >
    </div>
  );
}
