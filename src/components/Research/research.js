import "../Landing/About.css";
import React from "react";
import {Box, Flex, TabList, Tab, TabPanels, TabPanel, Tabs } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {WithSubnavigation as PreLogin} from "../Navbar/PreLoginNavbar";
import {WithSubnavigation as PostLogin} from "../Navbar/Navbar"
import Logged from "../context";
import { PublicationTab, GrantRevenueTab, ResearchProjectTab, PatentsTab } from "./Tabs";

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

        <Flex justify="center" >
        <Box flex='1'>
        
        <Tabs isLazy onChange={handleTabsChange} defaultIndex={Number(params.id)} index={Number(currIndex)} isFitted={true} textColor="black" variant='solid-rounded' borderRadius="2%" >
          <TabList marginTop={"30px"} marginBottom={"40px"}>
            <Tab>Publications</Tab>
            <Tab>Grants</Tab>
            <Tab>Research Projects</Tab>
            <Tab>Patents</Tab>
          </TabList>
          
          <TabPanels marginBottom={"40px"}>

            // Publications
            <TabPanel>
              <PublicationTab />
            </TabPanel>
            
            // Grants
            <TabPanel>
              <GrantRevenueTab />
            </TabPanel>

            // Research Projects
            <TabPanel>
              <ResearchProjectTab />
            </TabPanel>

            // Patents
            <TabPanel>
              <PatentsTab />
            </TabPanel>
          </TabPanels>
        </Tabs>
        </Box>
        </Flex>
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
  }
];

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
  }
];