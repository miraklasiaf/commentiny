import React from 'react';
import { Box } from '@chakra-ui/core';
import Navbar from './navbar';

const DocsLayout = ({ children }) => (
  <>
    <Navbar />
    <Box maxW="650px" mx="auto" px={8}>
      {children}
    </Box>
  </>
);

export default DocsLayout;
