import Image from "next/image";
import styles from "./page.module.css";
import image1 from "@/public/images/image1.png";
import image2 from "@/public/images/image2.png";
import image3 from "@/public/images/image3.png";
import image4 from "@/public/images/image4.png";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "10px",
        backgroundColor: "#FEE9CB",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <div style={{ fontSize: "40px", fontWeight: "bold" }}>Amber Queen</div>
        <Image src={image1} alt="image1" width={200} height={200} />
        <div style={{ fontSize: "24px", marginBottom: "20px" }}>
          Her coronation coming soon
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Email me about release date"
            style={{
              padding: "10px",
              borderRadius: "7px",
              border: "1px solid gray",
              width: "200px",
              height: "35px",
            }}
          />
          <button
            style={{
              padding: "10px",
              height: "35px",
              borderRadius: "5px",
              border: "1px solid gray",
            }}
          >
            {">"}
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          justifyContent: "space-between",
          alignItems: "space-between",
          width: "80%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Image src={image2} alt="image2" width={200} height={200} />
          <div style={{ fontSize: "18px", fontWeight: "bold", color: "gray" }}>
            Prologue
          </div>
          <div style={{ fontSize: "18px", color: "gray" }}>
            Preview February 16, 2025
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={image3} alt="image3" width={200} height={200} />
          <div style={{ fontSize: "18px", fontWeight: "bold", color: "gray" }}>
            Chapter I
          </div>
          <div style={{ fontSize: "18px", color: "gray" }}>
            Preview March 1, 2025
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={image4} alt="image4" width={200} height={200} />
          <div style={{ fontSize: "18px", fontWeight: "bold", color: "gray" }}>
            Chapter II
          </div>
          <div style={{ fontSize: "18px", color: "gray" }}>
            Preview March 11, 2025
          </div>
        </div>
      </div>
      <div style={{ fontSize: "30px", color: "gray", marginTop: "100px" }}>
        A novel by Vytas
      </div>
    </div>
  );
}
