import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <p
      style={{
        textAlign: "center",
        color: "rgb(107, 107, 107)",
        marginTop: "40px",
      }}
    >
      Copyright {year} reserved &copy; Tushar Khandelwal 
    </p>
  );
}
