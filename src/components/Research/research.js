import "../Landing/About.css";
import React from "react";
import { Category, ChartComponent, ColumnSeries, DataLabel, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';
import {Box, Flex, TabList, Tab, TabPanels, TabPanel, Tabs, VStack, HStack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {WithSubnavigation as PreLogin} from "../Navbar/PreLoginNavbar";
import {WithSubnavigation as PostLogin} from "../Navbar/Navbar"
import Logged from "../context"

import Footer from "../Footer";


const Research = () => {
  
    const user = useContext(Logged);
    const params = useParams();

    const [currIndex,setTabIndex] = useState(0);
    
    const handleTabsChange = (index) => setTabIndex(index)
    
    useEffect(() => handleTabsChange(params.id),[params])
    

  return (
    <>
        {user.value?<PostLogin/>:<PreLogin/>} 
        <div align="left" >

        <Flex justify="center" >
        <Box flex='1'>
        
        <Tabs isLazy onChange={handleTabsChange} defaultIndex={Number(params.id)} index={Number(currIndex)} isFitted={true} textColor="black" variant='solid-rounded' borderRadius="2%" >
          <TabList>
            <Tab>Publications</Tab>
            <Tab>Grants</Tab>
            <Tab>Research Projects</Tab>
            <Tab>Patents</Tab>
          </TabList>
          
          <TabPanels>

            // Publications
            <TabPanel>
              <VStack spacing={String(window.screen.height / 50)} >
                <HStack spacing={String(window.screen.width / 50)}>
                <ChartComponent palettes={['#035ff0',"purple"]} border={ { width: 2, color: '#000000' }} title="Faculty publications" subTitle="Publications since 2017" chartArea={ { background: 'skyblue', width: '90%' }} primaryXAxis={ { valueType: 'Category' }} width={String(window.screen.width / 3)} height={String(window.screen.height / 2)}>
                  <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]} />
                  <SeriesCollectionDirective>
                    <SeriesDirective dataSource={journalPubData} xName={"Year"} yName={"Publications"} type='Column' name='Journal' marker={{dataLabel:{visible:true}}} animation={{ enable: true, duration: 1200, delay: 100 }} />
                    <SeriesDirective dataSource={conferencePubData} xName={"Year"} yName={"Publications"} type='Column' name='Conference' marker={{dataLabel:{visible:true}}} animation={{ enable: true, duration: 1200, delay: 100 }} />
                  </SeriesCollectionDirective>
                </ChartComponent>
                </HStack>
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack spacing={String(window.screen.height / 50)} >
                <HStack spacing={String(window.screen.width / 50)}>
                <ChartComponent palettes={['#035ff0',"purple"]} border={ { width: 2, color: '#000000' }} title="Faculty publications" subTitle="Publications since 2017" chartArea={ { background: 'skyblue', width: '90%' }} primaryXAxis={ { valueType: 'Category' }} width={String(window.screen.width / 3)} height={String(window.screen.height / 2)}>
                  <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]} />
                  <SeriesCollectionDirective>
                    <SeriesDirective dataSource={journalPubData} xName={"Year"} yName={"Publications"} type='Column' name='Journal' marker={{dataLabel:{visible:true}}} animation={{ enable: true, duration: 1200, delay: 100 }} />
                    <SeriesDirective dataSource={conferencePubData} xName={"Year"} yName={"Publications"} type='Column' name='Conference' marker={{dataLabel:{visible:true}}} animation={{ enable: true, duration: 1200, delay: 100 }} />
                  </SeriesCollectionDirective>
                </ChartComponent>
                
                <ChartComponent palettes={['#035ff0',"purple"]} border={ { width: 2, color: '#000000' }} title="Faculty publications" subTitle="Publications since 2017" chartArea={ { background: 'skyblue', width: '90%' }} primaryXAxis={ { valueType: 'Category' }} width={String(window.screen.width / 3)} height={String(window.screen.height / 2)}>
                  <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]} />
                  <SeriesCollectionDirective>
                    <SeriesDirective dataSource={journalPubData} xName={"Year"} yName={"Publications"} type='Column' name='Journal' marker={{dataLabel:{visible:true}}} animation={{ enable: true, duration: 1200, delay: 100 }} />
                    <SeriesDirective dataSource={conferencePubData} xName={"Year"} yName={"Publications"} type='Column' name='Conference' marker={{dataLabel:{visible:true}}} animation={{ enable: true, duration: 1200, delay: 100 }} />
                  </SeriesCollectionDirective>
                </ChartComponent>
                </HStack>
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack spacing={String(window.screen.height / 50)} >
                <HStack spacing={String(window.screen.width / 50)}>
                <ChartComponent palettes={['#035ff0',"purple"]} border={ { width: 2, color: '#000000' }} title="Faculty publications" subTitle="Publications since 2017" chartArea={ { background: 'skyblue', width: '90%' }} primaryXAxis={ { valueType: 'Category' }} width={String(window.screen.width / 3)} height={String(window.screen.height / 2)}>
                  <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]} />
                  <SeriesCollectionDirective>
                    <SeriesDirective dataSource={journalPubData} xName={"Year"} yName={"Publications"} type='Column' name='Journal' marker={{dataLabel:{visible:true}}} animation={{ enable: true, duration: 1200, delay: 100 }} />
                    <SeriesDirective dataSource={conferencePubData} xName={"Year"} yName={"Publications"} type='Column' name='Conference' marker={{dataLabel:{visible:true}}} animation={{ enable: true, duration: 1200, delay: 100 }} />
                  </SeriesCollectionDirective>
                </ChartComponent>
                </HStack>
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack spacing={String(window.screen.height / 50)} >
                <HStack spacing={String(window.screen.width / 50)}>
                <ChartComponent palettes={['#035ff0',"purple"]} border={ { width: 2, color: '#000000' }} title="Faculty publications" subTitle="Publications since 2017" chartArea={ { background: 'skyblue', width: '90%' }} primaryXAxis={ { valueType: 'Category' }} width={String(window.screen.width / 3)} height={String(window.screen.height / 2)}>
                  <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]} />
                  <SeriesCollectionDirective>
                    <SeriesDirective dataSource={journalPubData} xName={"Year"} yName={"Publications"} type='Column' name='Journal' marker={{dataLabel:{visible:true}}} animation={{ enable: true, duration: 1200, delay: 100 }} />
                    <SeriesDirective dataSource={conferencePubData} xName={"Year"} yName={"Publications"} type='Column' name='Conference' marker={{dataLabel:{visible:true}}} animation={{ enable: true, duration: 1200, delay: 100 }} />
                  </SeriesCollectionDirective>
                </ChartComponent>
                </HStack>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
        </Box>
        </Flex>
        </div>
        <Footer />
    </>
    );
};

export default Research;

const journalPubData = [{
	Year:2017,
	Publications:63
},
{
	Year:2018,
	Publications:50
},
{
	Year:2019,
	Publications:58
},
{
	Year:2020,
	Publications:68
},
{
	Year:2021,
	Publications:78
},];

const conferencePubData = [{
	Year:2017,
	Publications:154
},
{
	Year:2018,
	Publications:141
},
{
	Year:2019,
	Publications:117
},
{
	Year:2020,
	Publications:84
},
{
	Year:2021,
	Publications:102
},];