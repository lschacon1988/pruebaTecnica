import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";

const ResultText = () => {
    
  const invertedWord = useSelector((state) => state.reverce);
  const errorTex = useSelector((state) => state.err);
  const color = grey[50];
  const colorFondo = grey[100];

  return (
    <div
      style={{
        backgroundZize: "cover",
        width: "100%",
        height: "100vh",
        boxSizing: "border-box",
        overflow: "hidden",
        background: colorFondo,
      }}
    >
      <Box
        sx={{
          marginLeft: 40,
          marginTop: 5,
          paddingTop: 2,
          overflow: "hidden",
          width: 1000,
          height: 500,
          backgroundColor: color,
          justifyItems: "left",
        }}
      >
        <h1 style={{ color: grey[500] }}>Resultado</h1>
        {errorTex ? (
          <h2>{errorTex.error}</h2>
        ) : (
          <ul>
            {invertedWord?.map((e, i) => (
              <li key={i} style={{ listStyle: "none" }}>
                <h2 key={i}>{e.text}</h2>
              </li>
            ))}
          </ul>
        )}
      </Box>
    </div>
  );
};

export default ResultText;
