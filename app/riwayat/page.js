"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import "./riwayat.css"
import roedi from "../asset/images/Login.png";
export default function Home() {
  return (
    <div className="container-riwayat">
      <div className="row-riwayat">
        <div> 
        <Image className="gambar-stylized"
          src={roedi} 
        />
        </div>
        <div className="komentar-riwayat">
        Pembayaran anda telah dikonfirmasi. Ketuk lebih lanjut untuk melihat struk pembayaran anda.
        <div className="waktu-riwayat">
          5 menit lalu
        </div>
        </div>
      </div >
      <div className="row-riwayat">
        <div> 
        <Image className="gambar-stylized"
          src={roedi} 
        />
        </div>
        <div className="komentar-riwayat">
        Pembayaran anda telah dikonfirmasi. Ketuk lebih lanjut untuk melihat struk pembayaran anda.
        <div className="komentar-riwayat-waktu">
          5 menit lalu
        </div>
        </div>
      </div >
    </div>
  );
}
