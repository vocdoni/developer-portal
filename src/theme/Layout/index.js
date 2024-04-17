import {Center} from '@chakra-ui/react';
import Layout from '@theme-original/Layout';
import React, {useEffect, useState} from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import {
  mockAccountService,
  mockCensusService,
  mockCensusSizeService,
  mockCensusTypeService,
  mockCensusWeightService,
  mockElectionService,
  mockTransactionReferenceService,
  mockTransactionService,
  mockVoteService,
} from '../../lib/provider-mocks';

export default function LayoutWrapper(props) {
  const [isWorkerReady, setWorkerReady] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('msw/browser')
        .then(({setupWorker}) => {
          const worker = setupWorker(
            mockAccountService,
            mockElectionService,
            mockTransactionService,
            mockTransactionReferenceService,
            mockCensusService,
            mockCensusSizeService,
            mockCensusTypeService,
            mockCensusWeightService,
            mockVoteService
          );
          worker
            .start({
              onUnhandledRequest: 'bypass',
            })
            .then(() => {
              // Set the state to true when the worker is ready
              setWorkerReady(true);
              return () => {
                return () => {
                  worker.stop(); // Optionally stop the worker when the component unmounts
                };
              };
            });
        })
        .catch(error => {
          console.error('Failed to start the MSW worker:', error);
        });
    }
  }, []);

  if (!isWorkerReady) {
    // Optionally render a loading indicator or return null to wait without showing anything
    return <Loading1></Loading1>;
  }

  // Render the original Layout component only when the worker is ready
  return <Layout {...props} />;
}

const Loading1 = () => {
  return (
    <Center size="full" minHeight="100vh">
      <ClipLoader
        loading={true}
        size={15}
        cssOverride={{
          margin: '0 5px',
        }}
      />
      loading...
    </Center>
  );
};
