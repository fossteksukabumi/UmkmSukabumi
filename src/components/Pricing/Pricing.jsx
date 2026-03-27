import React from "react";
import { pricingStyle } from "./Pricing.style";

const pricingData = [
  {
    title: "Paket Landing Page",
    price: "Rp2,800,000",
    features: [
      "Landing Page 1 Page Website",
      "Domain .co.id 1 Tahun",
      "Hosting 1 Tahun",
      "Free Maintenance",
    ],
    isPopular: false,
  },
  {
    title: "Paket UMKM",
    price: "Rp70,000/Bln",
    subPrice: "+ Biaya Pemasangan Rp300,000",
    features: [
      "Website Max 4 Page",
      "Gallery/Product Page",
      "Admin Panel & Dashboard",
      "Domain .com & Hosting",
      "Free Maintenance & Update",
    ],
    isPopular: true,
  },
  {
    title: "Paket Website Standar",
    price: "Rp7,850,000",
    features: [
      "Website Max 5 Page",
      "Gallery/Product Page",
      "Admin Panel",
      "Domain .co.id 1 Tahun",
      "Hosting 1 Tahun",
      "Free Maintenance 12 Bulan",
    ],
    isPopular: false,
  },
  {
    title: "Paket E-Commerce",
    price: "Rp14,600,000",
    features: [
      "Website Unlimited Page",
      "Gallery/Product Page",
      "Call to Action WhatsApp",
      "Admin Panel & Dashboard",
      "Domain .co.id 1 Tahun",
      "Hosting 1 Tahun",
      "Source Code",
    ],
    isPopular: false,
  },
];

const Pricing = () => {
  return (
    <section style={pricingStyle.section}>
      <div style={pricingStyle.container}>
        <h2 style={pricingStyle.heading}>Pilihan Paket Website</h2>
        <div style={pricingStyle.grid}>
          {pricingData.map((plan, index) => (
            <div 
              key={index} 
              style={{
                ...pricingStyle.card,
                ...(plan.isPopular ? pricingStyle.popularCard : {}),
              }}
            >
              <h3 style={pricingStyle.title}>{plan.title}</h3>
              <div style={pricingStyle.price}>{plan.price}</div>
              {plan.subPrice && <div style={{ fontSize: "12px", opacity: 0.8 }}>{plan.subPrice}</div>}
              <ul style={pricingStyle.featuresList}>
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} style={pricingStyle.featureItem}>
                    <span>✔️</span> {feature}
                  </li>
                ))}
              </ul>
              <button 
                style={{
                  ...pricingStyle.button,
                  ...(plan.isPopular ? pricingStyle.popularButton : {}),
                }}
                onClick={() => window.open("https://wa.me/628815340307", "_blank")}
              >
                Pilih Paket
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
