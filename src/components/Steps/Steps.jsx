import React from "react";
import { stepsStyle } from "./Steps.style";

const stepsData = [
  {
    number: "1",
    title: "Daftar Sekarang",
  },
  {
    number: "2",
    title: "Kunjungan Riset ke Tempat Anda",
  },
  {
    number: "3",
    title: "Proses Pembuatan Website",
  },
  {
    number: "4",
    title: "Website Siap Digunakan",
  },
];

const Steps = () => {
  return (
    <section style={stepsStyle.section}>
      <div style={stepsStyle.container}>
        <h2 style={stepsStyle.heading}>Daftar Sekarang Juga</h2>
        <div style={stepsStyle.grid}>
          {stepsData.map((step, index) => (
            <div key={index} style={stepsStyle.step}>
              <div style={stepsStyle.number}>{step.number}</div>
              <h3 style={stepsStyle.title}>{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
