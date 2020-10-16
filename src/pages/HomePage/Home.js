import React from 'react';
import { hommeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection, Pricing } from '../../components';

function Home() {
    return(
        <>
        <InfoSection {...hommeObjOne} />
        <InfoSection {...hommeObjTwo} />
        <InfoSection {...hommeObjThree}/>
        <Pricing />
        <InfoSection {...hommeObjFour} />
        </>
    );
}

export default Home;