import React from "react";
import { footerStyle } from "./Footer.style";

const Footer = () => {
  return (
    <footer style={footerStyle.section}>
      <div style={footerStyle.container}>
        <div style={footerStyle.grid}>
          <div style={footerStyle.column}>
            <h3 style={footerStyle.title}>umkmsukabumi.vercel.app/</h3>
            <p style={{ opacity: 0.8, fontSize: "14px", lineHeight: "1.6" }}>
              Jasa pembuatan website profesional untuk UMKM di Sukabumi dan sekitarnya. 
              Membantu bisnis Anda go digital dengan biaya terjangkau.
            </p>
          </div>
          <div style={footerStyle.column}>
            <h3 style={footerStyle.title}>Kontak Kami</h3>
            <div style={footerStyle.link}>0896-1364-0494</div>
            <div style={footerStyle.link}>0856-9162-5074</div>
            <div style={footerStyle.link}>fossteksukabumi@gmail.com</div>
          </div>
          <div style={footerStyle.column}>
            <h3 style={footerStyle.title}>Ikuti Kami</h3>
            <div style={footerStyle.link}>@umkmsukabumi.web</div>
          </div>
        </div>
        <div style={footerStyle.copyright}>
          &copy; {new Date().getFullYear()} umkmsukabumi.com. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
