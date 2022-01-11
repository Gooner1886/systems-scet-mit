import { VStack } from "@chakra-ui/react";
import Designation from "./components/Designation";
import Introduction from "./components/Introduction";
import WithSubnavigation from "./components/Navbar";

function App() {
  return (
    <>
      <WithSubnavigation />
      <VStack>
        <Designation/>
        <Introduction />
      </VStack>

    </>
  );
}

export default App;
