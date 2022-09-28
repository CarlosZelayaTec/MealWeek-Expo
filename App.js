import { ThemeProvider } from "react-native-rapi-ui";
import Navigations from "./src/routes/config";
import { StatusBar } from "expo-status-bar";

const App = () => (
  <ThemeProvider>
    <Navigations />
    <StatusBar style="auto"/>
  </ThemeProvider>
);
export default App;
