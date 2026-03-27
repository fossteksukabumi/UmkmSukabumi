import { globalStyle } from "../../global.style";

export const featuresStyle = {
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
    marginBottom: "40px",
    color: globalStyle.colors.dark,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
    marginTop: "40px",
  },
  card: {
    backgroundColor: globalStyle.colors.white,
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    transition: "transform 0.2s ease",
  },
  icon: {
    fontSize: "40px",
    color: globalStyle.colors.primary,
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    color: globalStyle.colors.dark,
  },
  description: {
    fontSize: "16px",
    color: globalStyle.colors.gray,
    lineHeight: "1.5",
  },
};
