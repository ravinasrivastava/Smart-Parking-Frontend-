import React from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillCalendar } from "react-icons/ai";
import { MdTimelapse } from "react-icons/md";
import { IoMdCash } from "react-icons/io";
import { cardStyles } from "./ReusableStyles";
export default function FAQ() {
  const faqs = [
    {
      icon: <AiFillCalendar />,
      text: "This technology can help parkers to optimize parking spaces.",
    },
    {
      icon: <MdTimelapse />,
      text: "It can provide drivers with real-time data and trend insights.",
    },
    {
      icon: <IoMdCash />,
      text: "Globally, smart parking technology can help to reduce on-road traffics.",
    },
  ];
  return (
    <Section>
      <div className="title">
        <h2>Information of Parking</h2>
      </div>
      <div className="faqs">
        {faqs.map((faq) => {
          return (
            <div className="faq">
              <div className="info">
                {faq.icon}
                <h4>{faq.text}</h4>
              </div>
              <IoIosArrowForward/>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
const Section = styled.section`
  ${cardStyles};
  .title {
    h2 {
      color: blue;
      font-family: 'Times New Roman';
      letter-spacing: 0.1rem;
    }
  }
  .faqs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 0rem;
    margin-bottom:0rem;
    .faq {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      .info {
        display: flex;
        gap: 1rem;
        align-items: center;
      }
      svg {
        // font-size: 1.4rem;
      }
      &:nth-of-type(2) {
        border-top: 0.01rem solid #6c6e6e;
        border-bottom: 0.01rem solid #6c6e6e;
        padding: 0.8rem 0;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    svg {
      font-size: 2rem !important;
    }
  }
`;
