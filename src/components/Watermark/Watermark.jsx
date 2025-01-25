import React from "react";
import watermarkCSS from "./Watermark.module.css";

function Watermark({ watermarkData, watermarkStyle }) {
  return (
    <div className={watermarkCSS.watermarkDiv}>
      <a
        href={watermarkData?.atag_href_link}
        target="_blank"
        rel="noreferrer"
        className={watermarkCSS.watermarkLink}
        style={{
          animation: "fadeInEffect 2s ease-in-out forwards",
          fontSize: watermarkStyle?.watermark_link_font_size ?? "2rem",
          fontWeight: watermarkStyle?.watermark_link_font_weight ?? "bold",
          color:
            watermarkStyle?.watermark_link_color ?? "var(--light-secondary)",
          textDecoration:
            watermarkStyle?.watermark_link_text_decoration ?? "none",
          cursor: watermarkStyle?.watermark_link_cursor ?? "pointer",
          margin:
            watermarkStyle?.watermark_link_margin ?? "0rem 0rem 1rem 0rem",
        }}
      >
        <span>r.</span>
      </a>
    </div>
  );
}

export default Watermark;
