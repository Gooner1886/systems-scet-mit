import { Divider, VStack,Box } from "@chakra-ui/react";
import Designation from "./Designation";
import Introduction from "./Introduction";
import WithSubnavigation from "../Navbar/Navbar";
import ResearchInterests from "./ResearchInterests";
import PublicationOverview from "./PublicationOverview";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logged from "../context"
import Footer from "../Footer"

function AboutPage() {

  const user=useContext(Logged);
  const navigate=useNavigate();
  console.log(user);
  
  useEffect(()=>{if(!user.value) navigate("/login")},[user.value]);


  return (
      <>
      <WithSubnavigation />
      <VStack>
        <Designation/>
        <Introduction />
        <Divider borderColor={"blackAlpha.700"} border={1} background={"black"}></Divider>
        <ResearchInterests/>
        <Divider borderColor={"blackAlpha.700"} border={1} background={"black"}></Divider>
        <PublicationOverview />
      </VStack>
      <Footer/> 
      </>
  );
}

export default AboutPage;