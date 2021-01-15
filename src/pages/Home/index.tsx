import React from 'react';
import { observer, inject } from 'mobx-react';
import { Button } from '@material-ui/core';

const Home: React.FC = ({profileStore}:any) => {
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
}

export default inject('profileStore')(observer(Home));
