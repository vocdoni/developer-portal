import React from 'react';
import { Image } from '@vocdoni/react-components';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { theme } from '@vocdoni/react-components'

const ReactLiveScope = {
  React,
  ...React,
  Image,
  ChakraProvider,
  extendTheme,
  theme
};
export default ReactLiveScope;
