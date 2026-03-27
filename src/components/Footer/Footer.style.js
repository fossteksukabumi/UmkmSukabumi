import { globalStyle } from "../../global.style";

export const footerStyle = {
  section: {
    padding: "60px 0",
    backgroundColor: globalStyle.colors.dark,
    color: globalStyle.colors.white,
  },
  container: {
    ...globalStyle.container,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "40px",
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "40px",
    width: "100%",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  link: {
    color: globalStyle.colors.white,
    textDecoration: "none",
    fontSize: "16px",
    opacity: "0.8",
    transition: "opacity 0.2s ease",
    cursor: "pointer",
  },
  social: {
    display: "flex",
    gap: "20px",
    marginTop: "10px",
  },
  copyright: {
    paddingTop: "40px",
    borderTop: `1px solid ${globalStyle.colors.white}22`,
    width: "100%",
    fontSize: "14px",
    opacity: "0.6",
  },
};
