import React from 'react';
import { InfoSection } from '../../components';
import { homeObjFive, homeObjSix, homeObjSeven, homeObjEight } from './Data';



function Referenzen() {
    return (
        <>
            <InfoSection {...homeObjFive} />
            <InfoSection {...homeObjSix} />
            <InfoSection {...homeObjSeven} />
            <InfoSection {...homeObjEight} />

        </>
    );
}

export default Referenzen;