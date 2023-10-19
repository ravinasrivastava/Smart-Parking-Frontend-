import React from "react";
import styled from "styled-components";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { cardStyles } from "./ReusableStyles";
export default function Analytics() {
  return (
    <Section>

      <div className="analytic">
        <div className="logo">
          <DirectionsCarIcon />
        </div>

        <div className="content">
          <h3>Total Parking Slot </h3>
          <h2>350.40</h2>
        </div>
      </div>

      <div className="analytic">
        <div className="logo">
          <DirectionsCarIcon />
        </div>


        <div className="content">
          <h4>Total Parked Vehicles</h4>
          <h2>321.25</h2>
        </div>
      </div>


    </Section>
  );
}
const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .analytic {
    ${cardStyles};
    
    // padding: 1rem;         
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out; 
    &:hover {
      background-color:  rgb(0, 7, 61);
      color:White ;
      svg {
          color: white;        
      }
    }
    .logo {
      background-color: Brown;

      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      svg {
        font-size: 2.5rem;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    .analytic {
      &:nth-of-type(3),
      &:nth-of-type(4) {
        flex-direction: row-reverse;
      }
    }
  }
`;
