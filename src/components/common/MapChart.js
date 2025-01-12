import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "/features.json";

// List of countries to fill with a specific color (use appropriate identifiers such as ISO codes)
const highlightedCountries = ["USA", "CAN", "MEX", "PHL", "IND", "RUS", "CHN", "ITL", "ZMB", "AUS", "JPN"]; // Replace with your desired country identifiers

export default function MapChart() {
  return (
    <ComposableMap style={{ maxWidth: "1200px" }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const isHighlighted = highlightedCountries.includes(geo.id); // Adjust based on your data
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: isHighlighted ? "#9970D5" : "#333",
                    stroke: "#000000",
                  },
                  hover: {
                    fill: isHighlighted ? "#FF3333" : "#333",
                  },
                  pressed: {
                    fill: isHighlighted ? "#E42" : "#FF6666",
                  },
                }}
              />
            );
          })
        }
      </Geographies>

     
    </ComposableMap>
  );
}
