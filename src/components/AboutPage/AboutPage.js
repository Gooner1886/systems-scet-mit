import { ChakraProvider, Divider, VStack,Box } from "@chakra-ui/react";
import Designation from "./Designation";
import Introduction from "./Introduction";
import WithSubnavigation from "../Navbar/Navbar";
import ResearchInterests from "./ResearchInterests";
import PublicationOverview from "./PublicationOverview";

function AboutPage() {
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
      <Box w='100%' p={4} color='white' overflowX='hidden' textAlign='center' bgColor='rgba(66, 153, 225, 0.6)'>
            System-SCET@MITWPU
      </Box>
      </>
  );
}

export default AboutPage;