import { ThemeProvider } from "react-native-rapi-ui";
// import {Provider as PaperProvider} from 'react-native-paper';
import Navigations from "./src/routes/config";
import { StatusBar } from "expo-status-bar";

const App = () => (
  <ThemeProvider>
    <Navigations />
    <StatusBar style="auto"/>
  </ThemeProvider>
);
export default App;
