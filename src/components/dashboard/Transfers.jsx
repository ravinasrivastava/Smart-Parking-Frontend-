import React from "react";
import styled from "styled-components";
import { AreaChart, ResponsiveContainer } from "recharts";
import { cardStyles } from "./ReusableStyles";
import ViewDayIcon from '@mui/icons-material/ViewDay';



const data = [

];
export default function Earnings() {
  return (
    <Section>
      <div className="top">
        <div className="info">
        <h2>
          <ViewDayIcon />Visitors Passes
        </h2>
          <h3>No active passes</h3>
     
        
       </div>
      </div>
      <div className="chart">
        <ResponsiveContainer width="50%" height="50%">
          <AreaChart
            width={50}
            height={40}
            data={data}
            margin={{ top: 0, left: 0, right: 0, bottom: 0}}
          >
           
          </AreaChart>
        </ResponsiveContainer>
      </div>
    

    </Section>
  );
}
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20rem;
  ${cardStyles}
  h2 {
    color: blue;
    font-family: 'Times New Roman';
    letter-spacing: 0.1rem;
  }
  padding: 2rem 0 0 0;
  .top {
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;
      h1 {
        font-size: 5rem;
      }
      .growth {
        background-color: #d7e41e1d;
        padding: 0.5rem;
        border-radius: 1rem;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #ffc107;
          span {
            color: black;
          }
        }
        span {
          color:red;     
        }
      }
    }
  }
  .chart {
    height: 10%;
    .recharts-default-tooltip {
      background-color: black !important;
      border-color: black !important;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
  }
`;
