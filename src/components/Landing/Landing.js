import styled from "styled-components";
import "./About.css";
import {Box, HStack, Center} from "@chakra-ui/react";
import { Category, ChartComponent, ColumnSeries, DataLabel, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';
import {WithSubnavigation as PreLogin} from "../Navbar/PreLoginNavbar";
import {WithSubnavigation as PostLogin} from "../Navbar/Navbar"
import Logged from "../context"
import { useContext } from "react";
import Footer from "../Footer";

const Landing = () => {

  const user=useContext(Logged);

  return (
  <>
    {user.value?<PostLogin/>:<PreLogin/>}
    <Parent>
      <div style={{backgroundImage:`url(${process.env.PUBLIC_URL + "/banner.png"})`,backgroundRepeat:"no-repeat", width: window.screen.availWidth*0.955}}>
        <HeaderCard>
          <h1 style={{ margin: 0, color: "white" }}>MIT-WPU</h1>
          <h1 style={{ margin: 0, marginBottom: 20, fontSize: 60 }}> School of Computer Engineering & Technology </h1>
          <TextBox style={{color:"white"}}>
            <p></p>
          </TextBox>
        </HeaderCard>

        <InfoBox>
          <div className="row1-container">
            <div className="box blue" style={{background:"white"}}>
              <h2 style={{ fontWeight: "bold", fontSize: 35 }}>3154</h2>
              <p>Research Paper citations in Journals</p>
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

        <Center>
          <Box>
            <ChartComponent palettes={['#035ff0']} border={ { width: 2, color: '#000000' }} title='Total Citations' subTitle='Citations by type' chartArea={ { background: 'skyblue', width: '90%' }} primaryXAxis={ { valueType: 'Category' }} width={String(window.screen.width / 2)} height={String(window.screen.height / 2)}>
              <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]} />
              <SeriesCollectionDirective>
                <SeriesDirective dataSource={allCitationsData} xName='CitationType' animation={{ enable: true, duration: 1200, delay: 100 }} yName='Citations' type='Column' name='Citations' />
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
                    <SeriesDirective dataSource={journalData} xName='Year' yName='Citations' animation={{ enable: true, duration: 1200, delay: 100 }} type='Line' name='Citations' marker={{ visible: true }}/>
                  </SeriesCollectionDirective>
                </ChartComponent>
              </Box>

              {/*// Book*/}
              <Box>
                <ChartComponent palettes={['#000000']} border={ { width: 2, color: '#000000' }} chartArea={ { background: 'skyblue', width: '90%' }} title='Book Citations' subTitle='Citations since 2017' primaryXAxis={ { valueType: 'Category' }} width={String(window.screen.width / 3.5)} height={String(window.screen.height * 2 / 5)}>
                  <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]} />
                  <SeriesCollectionDirective>
                    <SeriesDirective dataSource={bookData} xName='Year' yName='Citations' animation={{ enable: true, duration: 1200, delay: 100 }} type='Line' name='Citations' marker={{ visible: true }}/>
                  </SeriesCollectionDirective>
                </ChartComponent>
              </Box>

              {/*// Conference*/}
              <Box>
                <ChartComponent palettes={['#000000']} border={ { width: 2, color: '#000000' }} chartArea={ { background: 'skyblue', width: '90%' }} title='Conference Citations' subTitle='Citations since 2017' primaryXAxis={ { valueType: 'Category' }} width={String(window.screen.width / 3.5)} height={String(window.screen.height * 2 / 5)}>
                  <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]} />
                  <SeriesCollectionDirective>
                    <SeriesDirective dataSource={conferenceData} xName='Year' yName='Citations' animation={{ enable: true, duration: 1200, delay: 100 }} type='Line' name='Citations' marker={{ visible: true }}/>
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

const allCitationsData = [
  {
    CitationType: "Journal",
    Citations: 3154
  },
  {
    CitationType: "Books",
    Citations: 202
  },
  {
    CitationType: "Conferences",
    Citations: 2629
  }
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
