import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";


export default function Navbar() {
  return (
    <Nav>
      <div className="title">
        
        <h1>
           <span> Quick Access</span>
          
        </h1>
      </div>
      <div className="search">
        <BiSearch />
        <input type="text" placeholder="Search"/>
      </div>
      
    </Nav>
  );
}
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
 
  color: white;
  .title {
    h1 {
      span {
        margin-right: 1.5rem;
        
        color: Black;
        font-family: 'Times New Roman';
        letter-spacing: 0.2rem;
      }
    }
  }
  .search {
    background-color: lightblue;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 2rem 1rem 1rem;
    border-radius: 1rem;
    svg {
      color: Blue;
    }
    
    input {
      background-color: transparent;
      border: none;
      color: Black;
      font-family: 'Times New Roman';
      letter-spacing: 0.3rem;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: Black;
        font-family: 'Times New Roman';
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    .title {
      h1 {
        span {
          display: block;

          margin: 1rem 0;
          /* letter-spacing: 0; */
        }
      }
    }
  }
`;
