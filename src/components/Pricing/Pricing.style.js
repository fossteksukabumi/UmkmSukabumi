import { globalStyle } from "../../global.style";

export const pricingStyle = {
  section: {
    padding: "80px 0",
    backgroundColor: globalStyle.colors.light,
  },
  container: {
    ...globalStyle.container,
    textAlign: "center",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "60px",
    color: globalStyle.colors.dark,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
    marginTop: "40px",
  },
  card: {
    backgroundColor: globalStyle.colors.white,
    padding: "40px 30px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "24px",
    transition: "transform 0.3s ease",
    border: `1px solid ${globalStyle.colors.primary}22`,
  },
  popularCard: {
    backgroundColor: globalStyle.colors.primary,
    color: globalStyle.colors.white,
    transform: "scale(1.05)",
    boxShadow: "0 15px 40px rgba(76, 175, 80, 0.3)",
  },
  title: {
    fontSize: "22px",
    fontWeight: "bold",
    margin: "0",
  },
  price: {
    fontSize: "32px",
    fontWeight: "800",
    margin: "0",
  },
  featuresList: {
    listStyle: "none",
    padding: "0",
    margin: "0",
    textAlign: "left",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  featureItem: {
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  button: {
    width: "100%",
    padding: "14px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
    backgroundColor: globalStyle.colors.primary,
    color: globalStyle.colors.white,
    transition: "background-color 0.2s ease",
  },
  popularButton: {
    backgroundColor: globalStyle.colors.white,
    color: globalStyle.colors.primary,
  },
};
