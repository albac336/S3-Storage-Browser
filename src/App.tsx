import {
  createAmplifyAuthAdapter,
  createStorageBrowser,
} from '@aws-amplify/ui-react-storage/browser';
import '@aws-amplify/ui-react-storage/styles.css';
import './App.css';

import config from '../amplify_outputs.json';
import { Amplify } from 'aws-amplify';
import { Authenticator, Button } from '@aws-amplify/ui-react';

Amplify.configure(config);

const { StorageBrowser } = createStorageBrowser({
  config: createAmplifyAuthAdapter(),
});

function App() {
  return (
    <Authenticator hideSignUp loginMechanisms={['username']}>
      {({ signOut }) => (
        <>
          <div className="header">
            <h1>{`Area Intranet`}</h1>
            <Button onClick={signOut}>Sign out</Button>
          </div>
          <StorageBrowser />
        </>
      )}
    </Authenticator>
  );
}

export default App;
