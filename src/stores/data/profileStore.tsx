import {makeAutoObservable,runInAction} from 'mobx';

const test = () => {
    return new Promise((resolve:any)=> 
    setTimeout(() => {
        console.log("timeout");
        resolve();
    }, 5000)); 
}

const ProfileStore = () => {
    return makeAutoObservable({
        profile: null as any,
        isLoadingProfile: false as boolean,
        async loadProfile(name: string){
            this.isLoadingProfile = true;
            await test();
            runInAction(
                () => (
                  (this.isLoadingProfile = false)
                )
              )
            
            
        }
    })
}
export default ProfileStore;