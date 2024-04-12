import {Center} from '@chakra-ui/react';
import Layout from '@theme-original/Layout';
import React, {useEffect, useState} from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import {worker} from '../../mocks/worker';

export default function LayoutWrapper(props) {
  const [isWorkerReady, setWorkerReady] = useState(false);

  useEffect(() => {
    worker
      .start({
        onUnhandledRequest: 'bypass',
      })
      .then(() => {
        setWorkerReady(true); // Set the state to true when the worker is ready
      })
      .catch(error => {
        console.error('Failed to start the MSW worker:', error);
      });

    return () => {
      worker.stop(); // Optionally stop the worker when the component unmounts
    };
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
    <Center centerContent size="full" minHeight="100vh">
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
