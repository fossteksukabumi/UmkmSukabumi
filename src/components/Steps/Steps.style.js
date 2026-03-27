import { globalStyle } from "../../global.style";

export const stepsStyle = {
  section: {
    padding: "80px 0",
    backgroundColor: globalStyle.colors.white,
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
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "40px",
    position: "relative",
  },
  step: {
    flex: "1",
    minWidth: "200px",
    maxWidth: "250px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    zIndex: "1",
  },
  number: {
    width: "60px",
    height: "60px",
    backgroundColor: globalStyle.colors.primary,
    color: globalStyle.colors.white,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    fontWeight: "bold",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    color: globalStyle.colors.dark,
    lineHeight: "1.4",
  },
};
