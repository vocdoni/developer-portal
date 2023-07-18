import React from 'react';
import { Image,
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
} from '@vocdoni/chakra-components';

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
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
};
export default ReactLiveScope;
