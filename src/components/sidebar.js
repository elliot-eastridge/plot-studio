import React, { Component } from "react";

import { Box, Text, Button } from "grommet";


export class Sidebar extends Component {


  render() {
    return (
      <Box
        fill="vertical"
        width="sidebar"
        background="dark-2"
        elevation="medium"
      >
        <Button
          hoverIndicator="dark-4"
        >
          <Box
            flex={false}
            align="center"
            gap="xsmall"
            pad={{ vertical: "small" }}
          >
            <Text size="xsmall">button</Text>
          </Box>
        </Button>
        <Box flex overflow="auto">
        <Button
          hoverIndicator="dark-4"
        >
          <Box
            flex={false}
            align="center"
            gap="xsmall"
            pad={{ vertical: "small" }}
          >
            <Text size="xsmall">button 2</Text>
          </Box>
        </Button>
        </Box>
      </Box>
    );
  }
}
