import React from 'react';
import { observer, inject } from 'mobx-react';
import { Button } from '@material-ui/core';

const Home: React.FC = inject('profileStore')(
  observer(({ profileStore }: any) => {
    console.log(profileStore.profile);
    console.log(profileStore.isLoadingProfile);
    return (
      <>
        <div>
          <Button variant="contained" onClick={()=>profileStore.loadProfile()}>
            Default
          </Button>
          {profileStore.isLoadingProfile}
        </div>
      </>
    );
  }),
);

export default Home;
