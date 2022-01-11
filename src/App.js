import { Divider, VStack } from "@chakra-ui/react";
import Designation from "./components/Designation";
import Introduction from "./components/Introduction";
import WithSubnavigation from "./components/Navbar";
import ResearchInterests from "./components/ResearchInterests";
import Landing from "./components/Landing/Landing";
import PublicationOverview from "./components/PublicationOverview";

function App() {
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
      {/* <Landing /> */}
    </>
  );
}

export default App;
