import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return <div className="container">Photogood
  <button className=""><Link href="./login">Login</Link></button>
  <button className=""><Link href="./register">Register</Link></button>
  <button className=""><Link href="../../profile/editprofile">Edit Profile</Link></button>
  <button className=""><Link href="../../riwayat">Riwayat</Link></button>
  <button className=""><Link href="../../detail">Detail</Link></button>
  <button className=""><Link href="../../profile">profile</Link></button>
  </div>;
};
