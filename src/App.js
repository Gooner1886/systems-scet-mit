import { VStack } from "@chakra-ui/react";
import Designation from "./components/Designation";
import Introduction from "./components/Introduction";
import WithSubnavigation from "./components/Navbar";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <>
      <WithSubnavigation />
      <VStack>
        <Designation/>
        <Introduction />
        {/*<Landing />*/}
      </VStack>

    </>
  );
}

export default App;
