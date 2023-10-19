import React from "react";
import styled from "styled-components";
import Front from "../dashboard/Front";
import Footer from './footer/Footer';

import './index.css'
export default function App() {
  return (
    <Div>
    <Front />
    <Footer/>
     </Div>

  )
}

const Div = styled.div`
  position: relative;
`; 
