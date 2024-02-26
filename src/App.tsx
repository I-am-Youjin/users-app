import React from "react";
import "./App.css";
import Header from "./layout/Header";
import Main from "./layout/Main";
import CustomForm from "./components/CustomForm/CustomForm";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

function App() {
  const [tabValue, setTabValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  return (
    <div className="App">
      <Header />
      <Main>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Sign in" value="1" />
                <Tab label="Sign up" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <CustomForm type="signin" />
            </TabPanel>
            <TabPanel value="2">
              <CustomForm type="signup" />
            </TabPanel>
          </TabContext>
        </Box>
      </Main>
    </div>
  );
}

export default App;
