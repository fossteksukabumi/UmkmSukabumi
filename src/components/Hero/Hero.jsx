import React from "react";
import { heroStyle } from "./Hero.style";
import logo from "../../assets/logo/Logo2.png"

const Hero = () => {
  return (
    <section style={heroStyle.section}>
      <div style={heroStyle.container}>
        <div ><img src={logo} alt="Logo" style={heroStyle.logo} /></div>
        <h1 style={heroStyle.heading}>
          Bangun Website Profesional untuk UMKM Anda
        </h1>
        <p style={heroStyle.subheading}>
          Solusi digital terbaik untuk meningkatkan omzet dan kepercayaan pelanggan Anda.
        </p>
        <div style={heroStyle.priceTag}>
          Hanya Rp70.000 / Bulan
        </div>
        <button 
          style={heroStyle.ctaButton}
          onClick={() => window.open("https://wa.me/628815340307", "_blank")}
        >
          Daftar Sekarang Juga
        </button>
      </div>
    </section>
  );
};

export default Hero;
