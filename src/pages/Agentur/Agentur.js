import React from 'react';
import { InfoSection } from '../../components';
import { homeObjNine, homeObjTen, homeObjEleven, homeObjTwelve } from './Data';

function Agentur() {
    return (
        <>
            <InfoSection {...homeObjNine} />
            <InfoSection {...homeObjTen} />
            <InfoSection {...homeObjEleven} />
            <InfoSection {...homeObjTwelve} />
        </>
    );
}

export default Agentur;
