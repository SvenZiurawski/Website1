import React from 'react';
import { Button } from '../../globalStyles';
import { GiAbstract114, GiTablet } from 'react-icons/gi';
import { GiCutDiamond, GiSensuousness } from 'react-icons/gi';
import { CgWebsite } from 'react-icons/cg'
import { IconContext } from 'react-icons/lib';
import {
    PricingSection,
    PricingWrapper,
    PricingHeading,
    PricingContainer,
    PricingCard,
    PricingCardInfo,
    PricingCardIcon,
    PricingCardPlan,
    PricingCardCost,
    PricingCardLength,
    PricingCardFeatures,
    PricingCardFeature
} from './Pricing.elements';

function Pricing() {
    return (
        <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
            <PricingSection>
                <PricingWrapper>
                    <PricingHeading>Leistungen</PricingHeading>
                    <PricingContainer>
                        <PricingCard to='/sign-up'>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiSensuousness />
                                </PricingCardIcon>
                                <PricingCardPlan>Beratung</PricingCardPlan>
                                <PricingCardCost>Das technische Gesamtpaket </PricingCardCost>
                                <PricingCardLength>für Ihr Unternehmen</PricingCardLength>
                                <PricingCardFeatures>
                                    <PricingCardFeature>Ganzheitliche</PricingCardFeature>
                                    <PricingCardFeature>IT-Lösungen</PricingCardFeature>
                                    <PricingCardFeature>direkt vom Profi</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>mehr</Button>
                            </PricingCardInfo>
                        </PricingCard>
                        <PricingCard to='/sign-up'>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiAbstract114 />
                                </PricingCardIcon>
                                <PricingCardPlan>UX/UI-Design</PricingCardPlan>
                                <PricingCardCost>Weil jeder Klick zählt</PricingCardCost>
                                <PricingCardLength></PricingCardLength>
                                <PricingCardFeatures>
                                    <PricingCardFeature>Schnelles und kostengünstiges</PricingCardFeature>
                                    <PricingCardFeature>User Experience </PricingCardFeature>
                                    <PricingCardFeature> und Interface Design</PricingCardFeature>
                                    <PricingCardFeature>vom Profi </PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>mehr</Button>
                            </PricingCardInfo>
                        </PricingCard>
                        <PricingCard to='/sign-up'>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiTablet />
                                </PricingCardIcon>
                                <PricingCardPlan>App Entwicklung</PricingCardPlan>
                                <PricingCardCost>Verwirklichen Sie Ihre </PricingCardCost>
                                <PricingCardLength>App-Träume</PricingCardLength>
                                <PricingCardFeatures>
                                    <PricingCardFeature>Schnelle und kostengünstige</PricingCardFeature>
                                    <PricingCardFeature>App-Entwicklung</PricingCardFeature>
                                    <PricingCardFeature>vom Profi</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>mehr</Button>
                            </PricingCardInfo>
                        </PricingCard>
                        <PricingCard to='/sign-up'>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <CgWebsite />
                                </PricingCardIcon>
                                <PricingCardPlan>Webentwicklung</PricingCardPlan>
                                <PricingCardCost>Ihre Webseite ist </PricingCardCost>
                                <PricingCardLength>Ihr Aushängeschild.</PricingCardLength>
                                <PricingCardFeatures>
                                    <PricingCardFeature>Schnelle und kostengünstige</PricingCardFeature>
                                    <PricingCardFeature>Webdesign</PricingCardFeature>
                                    <PricingCardFeature>vom Profi</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>mehr</Button>
                            </PricingCardInfo>
                        </PricingCard>
                        <PricingCard to='/sign-up'>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiCutDiamond />
                                </PricingCardIcon>
                                <PricingCardPlan>Online-Marketing</PricingCardPlan>
                                <PricingCardCost>Wie Unternehmenserfolg </PricingCardCost>
                                <PricingCardLength>heute funktioniert.</PricingCardLength>
                                <PricingCardFeatures>
                                    <PricingCardFeature>Mit digitalen Lösungen</PricingCardFeature>
                                    <PricingCardFeature>von Peakconcepts</PricingCardFeature>
                                    <PricingCardFeature>zu mehr Umsatz</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>mehr</Button>
                            </PricingCardInfo>
                        </PricingCard>
                    </PricingContainer>
                </PricingWrapper>
            </PricingSection>
        </IconContext.Provider>
    );
}
export default Pricing;