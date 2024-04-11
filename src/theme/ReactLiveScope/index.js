import React from 'react'
import {
  Image,
  ElectionProvider,
  ElectionHeader,
  ElectionTitle,
  ElectionSchedule,
  ElectionResults,
  ElectionStatusBadge,
  ElectionDescription,
  ElectionQuestions,
  OrganizationProvider,
  OrganizationAvatar,
  OrganizationDescription,
  OrganizationHeader,
  OrganizationName,
  Organization,
  Balance
} from '@vocdoni/chakra-components'

import {Flex, Box, AspectRatio} from '@chakra-ui/react'

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  Flex,
  Box,
  AspectRatio,
  Image,
  ElectionProvider,
  ElectionHeader,
  ElectionTitle,
  ElectionSchedule,
  ElectionResults,
  ElectionStatusBadge,
  ElectionDescription,
  ElectionQuestions,
  OrganizationProvider,
  OrganizationAvatar,
  OrganizationDescription,
  OrganizationHeader,
  OrganizationName,
  Organization,
  Balance
}
export default ReactLiveScope
