import styled from "styled-components";
import "./About.css";
import Dummy from "./1.png";
import WithSubnavigation from "../Navbar/PreLoginNavbar"
import {Box, Stack, Image, color, background, Container} from "@chakra-ui/react";
const Landing = () => {
  return (
    <>
      <WithSubnavigation />

      <Parent>
          

          <div style={{backgroundImage:`url(${process.env.PUBLIC_URL + "/banner.png"})`, width: window.screen.availWidth*0.955}} >

          
          <HeaderCard >
          <h1 style={{ margin: 0 }}>MIT-WPU</h1>
          <h1 style={{ margin: 0, marginBottom: 20, fontSize: 60 }}>
            School of Computer Engineering & Technology
          </h1>
          <TextBox style={{color:"white"}}>
            <p>
            </p>
          </TextBox>
        </HeaderCard>
        <InfoBox>
          <div className="row1-container">
            <div className="box blue" style={{background:"white"}}>
              <h2 style={{ fontWeight: "bold", fontSize: 35 }}>230</h2>
              <p>Research Papers Published in Conferences and Journals</p>
              <img
                src="https://assets.codepen.io/2301174/icon-calculator.svg"
                alt=""
              />
            </div>

            <div className="box orange" style={{background:"white"}}>
              <h2 style={{ fontWeight: "bold", fontSize: 35 }}>1540</h2>
              <p>Citations in Research Papers and Journals</p>
              <img
                src="https://assets.codepen.io/2301174/icon-karma.svg"
                alt=""
              />
            </div>

            <div className="box cyan" style={{background:"white"}}>
              <h2 style={{ fontWeight: "bold", fontSize: 35}}>98</h2>
              <p>Research Papers published in International Journals</p>
              <img
                src="https://assets.codepen.io/2301174/icon-supervisor.svg"
                alt=""
              />
            </div>
            
          </div>
          
          <div className="row2-container">
            {/*<div className="box red">*/}
            {/*    <h2>Mission</h2>*/}
            {/*    <p>Encouraging and developing students’ ideas & projects in order to commercialise them</p>*/}
            {/*    <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="" />*/}
            {/*</div>*/}
          </div>
        </InfoBox>

        <div className="row2-container">
          <img 
            style={{
              width: 1000,
              height: 450,
            }}
            src={Dummy}
            alt="placeholder"
          />
        </div>
        </div>

      </Parent>
      <Box w='100%' p={4}  color='white' overflowX='hidden' textAlign='center' bgColor='rgba(66, 153, 225, 0.6)'>
            System-SCET@MITWPU
      </Box>
    </>
  );
};

export default Landing;

const Parent = styled.div`
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 2vh;
  height: auto;
  overflow: auto;

  @media only screen and (max-width: 968px) {
    height: fit-content;
  }
`;

const HeaderCard = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;

  h1 {
    color: black;
    font-size: 4em;
    margin: 20px 0;
  }
`;

const TextBox = styled.div`
  width: 70%;
  text-align: center;

  p {
    padding: 0;
    margin: 0;
    font-size: 1em;
  }
`;

const InfoBox = styled.div`
  margin: 5px auto;
`;
