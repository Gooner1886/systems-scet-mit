import styled from "styled-components";
import "./About.css";
import {Box, HStack, Center, Image} from "@chakra-ui/react";
import { Category, ChartComponent, ColumnSeries, DataLabel, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';

import { useContext } from "react";
import {WithSubnavigation as PreLogin} from "../Navbar/PreLoginNavbar";
import {WithSubnavigation as PostLogin} from "../Navbar/Navbar"
import Logged from "../context"

import Footer from "../Footer";

const Landing = () => {

  const user=useContext(Logged);

  return (
  <>
  {user.value?<PostLogin/>:<PreLogin/>}

    <Parent>
      <div style={{backgroundImage:`url(${process.env.PUBLIC_URL + "/bg1.png"})`,backgroundSize:"contain", backgroundPositionX:"center" ,backgroundRepeat:"no-repeat", width: window.screen.width*0.957}}>
        <Box height={String(window.screen.height / 20)} />
        <Center>
          <Image src={process.env.PUBLIC_URL + "/logo512.png"} style={{width:window.screen.width / 15}} borderRadius="50%" />
        </Center>
        <HeaderCard>
        {/* <h1 style={{ margin: 0, color: "white", fontWeight:'bold' }}>MIT-WPU</h1> */}
          <h1 style={{ margin: 0, marginBottom: 20, fontSize: 60, color: 'white', fontWeight:'bold' }}> School of Computer Engineering <br/> & Technology </h1>
          <TextBox style={{color:"white"}}>
            <p></p>
          </TextBox>
        </HeaderCard>

        <InfoBox>
          <div className="row1-container">
            <div className="box blue" style={{background:"white"}}>
              <h2 style={{ fontWeight: "bold", fontSize: 35 }}>3154</h2>
              <p color="black" >Research Paper citations in Journals</p>
              <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="" />
            </div>
            <div className="box orange" style={{background:"white"}}>
              <h2 style={{ fontWeight: "bold", fontSize: 35 }}>202</h2>
              <p>Research Paper citations in Books</p>
              <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
            </div>
            <div className="box cyan" style={{background:"white"}}>
              <h2 style={{ fontWeight: "bold", fontSize: 35}}>2629</h2>
              <p>Research Paper citations in Conference </p>
              <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
            </div>
          </div>
          <div className="row2-container"> {/* <div className="box red">*/} {/* <h2>Mission</h2>*/} {/* <p>Encouraging and developing students’ ideas & projects in order to commercialise them</p>*/} {/* <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="" />*/} {/* </div>*/} </div>
        </InfoBox>


        <QuoteBox>
          <h1 style={{ textAlign: 'center'}}>Meet the Dean / HoS</h1>
          <Quotes>
            <Blockquote>
              <p>It gives me immense pleasure to welcome you to Dr. Vishwanath Karad MIT World Peace University. At the faculty of
                science, the Curriculum is a unique blend of science and spirituality and hence our schools provide exceptional graduate
                and undergraduate education</p>
              <Cite>Dr. Shubhalaxmi Joshi <br/> Associate Dean, Faculty of Science</Cite>
              <AuthImg1 />
            </Blockquote>
            <Blockquote>
              <p>We are proud of our strong academic foundation which blends theoretical and practical knowledge to match the requirements
                and demands of the industry. We are committed to students by offering academic programs that foster critical
                and analytical thinking.</p>
              <Cite>Dr. Chandrashekhar Patil <br/> Head of School & Professor</Cite>
              <AuthImg />
            </Blockquote>
          </Quotes>
        </QuoteBox>

        <h1 style={{ textAlign: 'center', fontSize: '3em', marginBottom: '20px'}}>Research & Publications</h1>
        <Center>
          <Box>
            <ChartComponent palettes={['#035ff0']} border={ { width: 2, color: '#000000' }} title='Total Citations by type' subTitle='Citations since 2017' chartArea={ { background: 'skyblue', width: '90%' }} primaryXAxis={ { valueType: 'Category' }} width={String(window.screen.width / 2)} height={String(window.screen.height / 2)}>
              <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]} />
              <SeriesCollectionDirective>
                <SeriesDirective dataSource={allCitationsData}  xName='CitationType' animation={{ enable: true, duration: 1200, delay: 100 }} yName='Citations' type='Column' name='Citations' marker={{dataLabel:{visible:true}}}/>
              </SeriesCollectionDirective>
            </ChartComponent>
          </Box>

        </Center>

        <Box p='50' >

          <Center>
            <HStack spacing='30'>
              {/*// Journal*/}
              <Box>
                <ChartComponent palettes={['#000000']} border={ { width: 2, color: '#000000' }} chartArea={ { background: 'skyblue', width: '90%' }} title='Journal Citations' subTitle='Citations since 2017' primaryXAxis={ { valueType: 'Category' }} width={String(window.screen.width / 3.5)} height={String(window.screen.height * 2 / 5)}>
                  <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]} />
                  <SeriesCollectionDirective>
                    <SeriesDirective dataSource={journalData} xName='Year' yName='Citations' animation={{ enable: true, duration: 1200, delay: 100 }} type='Line' name='Citations' marker={{ visible: true, dataLabel: {visible: true} }}/>
                  </SeriesCollectionDirective>
                </ChartComponent>
              </Box>

              {/*// Book*/}
              <Box>
                <ChartComponent palettes={['#000000']} border={ { width: 2, color: '#000000' }} chartArea={ { background: 'skyblue', width: '90%' }} title='Book Citations' subTitle='Citations since 2017' primaryXAxis={ { valueType: 'Category' }} width={String(window.screen.width / 3.5)} height={String(window.screen.height * 2 / 5)}>
                  <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]} />
                  <SeriesCollectionDirective>
                    <SeriesDirective dataSource={bookData} xName='Year' yName='Citations' animation={{ enable: true, duration: 1200, delay: 100 }} type='Line' name='Citations' marker={{ visible: true, dataLabel: {visible: true} }}/>
                  </SeriesCollectionDirective>
                </ChartComponent>
              </Box>

              {/*// Conference*/}
              <Box>
                <ChartComponent palettes={['#000000']} border={ { width: 2, color: '#000000' }} chartArea={ { background: 'skyblue', width: '90%' }} title='Conference Citations' subTitle='Citations since 2017' primaryXAxis={ { valueType: 'Category' }} width={String(window.screen.width / 3.5)} height={String(window.screen.height * 2 / 5)}>
                  <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]} />
                  <SeriesCollectionDirective>
                    <SeriesDirective dataSource={conferenceData} xName='Year' yName='Citations' animation={{ enable: true, duration: 1200, delay: 100 }} type='Line' name='Citations' marker={{ visible: true, dataLabel: {visible: true} }}/>
                  </SeriesCollectionDirective>
                </ChartComponent>
              </Box>
            </HStack>
          </Center>
        </Box>
      </div>
    </Parent>
    <Footer />

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

const QuoteBox = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 250px;
  margin-bottom: 30px;
  
  h1 {
    font-size: 3em;
  }
`;

const Quotes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Blockquote = styled.div`
  position: relative;
  margin: 40px 0;
  padding: 1.6em 2.4em .7em calc(1.4em + 140px);
  font: italic 1.2rem var(--type-quote);
  background:hsl(0 0% 97%) / 140px;
  border-radius: 7px;
  border: 2px solid white;
  box-shadow: 2px 2px 4px hsl(0 0% 0% / 20%);
  text-indent: 1.6em;
  width: 60%;
  margin-right: 20px;
  
  &::before {
    content: "";
    pointer-events: none;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: 7px;
    box-shadow: inset -2px -2px 1px hsl(0 0% 100%),
    inset 2px 2px 4px hsl(0 0% 0% / 20%);
  }
  
  &::after {
    content: "❝";
    position: absolute;
    z-index: 1;
    left: 50%;
    top: -2px;
    transform: translate(-50%, -50%);
    width: 1.3em;
    height: 1.3em;
    background: white;
    box-shadow: 0 4px 5px -1px hsla(0 0% 0% / 20%);
    border-radius: 999px;
    display: grid;
    place-content: center;
    padding-top: .5em;
    color: #cd354d;
    font-size: 36px;
    font-style: normal;
    text-indent: 0;
  }
`;

const Cite = styled.div`
  display: block;
  margin-top: 30px;
  text-indent: 0;
  text-align: center;
  font: bold .9rem var(--type-body);
  text-transform: uppercase;
  color: hsl(0 0% 20%);
`;

const AuthImg = styled.div`
  position: absolute;  left: 0;
  top: 0;
  width: 140px;
  height: 100%;
  opacity: 0.75;
  background: url("https://computer-science.mitwpu.edu.in/images/school-of-computer-science/Dr_C_H_Patil.jpg") no-repeat center;
  background-size: cover;
  background-blend-mode: hard-light;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
`;

const AuthImg1 = styled.div`
  position: absolute;  left: 0;
  top: 0;
  width: 140px;
  height: 100%;
  opacity: 0.75;
  background: url("https://computer-science.mitwpu.edu.in/images/school-of-computer-science/Dr-Shubhalaxmi-Joshi.jpg") no-repeat center;
  background-size: cover;
  background-blend-mode: hard-light;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
`;


const allCitationsData = [
  {
    CitationType: "Books",
    Citations: 202
  },
  {
    CitationType: "Conferences",
    Citations: 2629
  },
  {
    CitationType: "Journal",
    Citations: 3154
  },
];

const journalData = [
  {
    Year: '2017',
    Citations: '418'
  },
  {
    Year: '2018',
    Citations: '565'
  },
  {
    Year: '2019',
    Citations: '636'
  },
  {
    Year: '2020',
    Citations: '700'
  },
  {
    Year: '2021',
    Citations: '835'
  }
];

const bookData = [
  {
    Year: '2017',
    Citations: '10'
  },
  {
    Year: '2018',
    Citations: '23'
  },
  {
    Year: '2019',
    Citations: '32'
  },
  {
    Year: '2020',
    Citations: '58'
  },
  {
    Year: '2021',
    Citations: '79'
  }
];

const conferenceData = [
  {
    Year: '2017',
    Citations: '311'
  },
  {
    Year: '2018',
    Citations: '449'
  },
  {
    Year: '2019',
    Citations: '555'
  },
  {
    Year: '2020',
    Citations: '633'
  },
  {
    Year: '2021',
    Citations: '681'
  }
];
