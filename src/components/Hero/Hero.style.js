import { globalStyle } from "../../global.style";

export const heroStyle = {
  section: {
    backgroundColor: globalStyle.colors.primary,
    color: globalStyle.colors.white,
    padding: "80px 0",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },
  container: {
    ...globalStyle.container,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "24px",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  heading: {
    fontSize: "48px",
    fontWeight: "800",
    lineHeight: "1.2",
    maxWidth: "800px",
    margin: "0 auto",
  },
  subheading: {
    fontSize: "20px",
    fontWeight: "400",
    opacity: "0.9",
    maxWidth: "600px",
  },
  priceTag: {
    backgroundColor: globalStyle.colors.secondary,
    padding: "12px 24px",
    borderRadius: "50px",
    fontSize: "24px",
    fontWeight: "bold",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    marginTop: "20px",
  },
  ctaButton: {
    backgroundColor: globalStyle.colors.white,
    color: globalStyle.colors.primary,
    padding: "16px 32px",
    borderRadius: "8px",
    fontSize: "18px",
    fontWeight: "bold",
    textDecoration: "none",
    marginTop: "30px",
    transition: "transform 0.2s ease",
    cursor: "pointer",
    border: "none",
  },
};
