import React from 'react';
import { Button } from '../../globalStyles';
import {
    FaFacebook,
    FaInstagram,

} from 'react-icons/fa';
import {
    FooterContainer,
    FooterSubscription,
    FooterSubText,
    FooterSubHeading,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './Footer.elements';

function Footer() {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading><b>
                    Kostenloses Strategiegespräch vereinbaren
            </b></FooterSubHeading>
                <FooterSubText>Wir freuen uns auf Ihr Anliegen.</FooterSubText>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Über uns</FooterLinkTitle>
                        <FooterLink to='/'>Startseite</FooterLink>
                        <FooterLink to='/leistungen'>Leistungen</FooterLink>
                        <FooterLink to='/agentur'>Agentur</FooterLink>
                        <FooterLink to='/referenzen'>Referenzen</FooterLink>
                        <FooterLink to='/kontakt'>Kontakt</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Rechtliches</FooterLinkTitle>
                        <FooterLink to='/datenschutz'>Datenschutz</FooterLink>
                        <FooterLink to='/agb'>AGB</FooterLink>
                        <FooterLink to='/impressum'>Impressum</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>


                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <SocialIcon src={require('../../Images/logo1.png')} />
            PEAKCONCEPTS
          </SocialLogo>
                    <WebsiteRights>PEAKCONCEPTS © 2020</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='https://www.facebook.com/peakconcepts.de/' target='_blank' aria-label='Facebook'>
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='https://www.instagram.com/peakconcepts/' target='_blank' aria-label='Instagram'>
                            <FaInstagram />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    );
}

export default Footer;