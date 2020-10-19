import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjFour } from './Data';
import { homeObjTwo } from './Data';
import { homeObjOne, homeObjThree } from './Data';

function Services() {
    return (
        <>
            <Pricing />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
        </>
    );
}

export default Services;
