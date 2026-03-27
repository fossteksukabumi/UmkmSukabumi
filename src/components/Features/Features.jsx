import React from "react";
import { featuresStyle } from "./Features.style";
import icon from "../../assets/icon/laptop.png"
import icon2 from "../../assets/icon/cloud.png"
import icon3 from "../../assets/icon/program.png"
import icon4 from "../../assets/icon/mobiledaftar.png"
import icon5 from "../../assets/icon/proses.png"
import icon6 from "../../assets/icon/responsive.png"

const featuresData = [
  {
    title: "Gratis Konsultasi",
    description: "Konsultasikan kebutuhan website bisnis Anda secara gratis dengan tim ahli kami.",
    icon : icon,
  },
  {
    title: "Domain & Hosting",
    description: "Sudah termasuk domain .com dan hosting berkualitas tinggi untuk performa maksimal.",
    icon: icon2,
  },
  {
    title: "Free Maintenance",
    description: "Layanan pemeliharaan gratis 7x24 jam untuk memastikan website Anda selalu aktif.",
    icon: icon3,
  },
  {
    title: "Direct WhatsApp",
    description: "Integrasi langsung ke WhatsApp untuk memudahkan pelanggan menghubungi Anda.",
    icon: icon4,
  },
  {
    title: "Proses Cepat",
    description: "Website Anda akan siap digunakan dalam waktu singkat dengan proses yang mudah.",
    icon: icon5,
  },
  {
    title: "Desain Responsive",
    description: "Tampilan website yang optimal di semua perangkat, baik desktop maupun mobile.",
    icon : icon6,
  },
];

const Features = () => {
  return (
    <section style={featuresStyle.section}>
      <div style={featuresStyle.container}>
        <h2 style={featuresStyle.heading}>Mengapa Memilih Kami?</h2>
        <div style={featuresStyle.grid}>
          {featuresData.map((feature, index) => (
            <div key={index} style={featuresStyle.card}>
              <div style={featuresStyle.icon}>
                <img src={feature.icon} alt={feature.title} />
              </div>
              <h3 style={featuresStyle.title}>{feature.title}</h3>
              <p style={featuresStyle.description}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
