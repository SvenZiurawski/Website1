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
    Form,
    FormInput,
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
                <FooterSubHeading>
                    neuesten Nachrichten und Trends zu erhalten
        </FooterSubHeading>
                <FooterSubText>Sie können sich jederzeit abmelden.</FooterSubText>
                <Form>
                    <FormInput email='Email' type='email' placeholder='Deine Email' />
                    <Button fontBig>Abonnieren</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Über uns</FooterLinkTitle>
                        <FooterLink to='/sign-up'>Agentur</FooterLink>
                        <FooterLink to='/referenzen'>Referenzen</FooterLink>
                        <FooterLink to='/'>Karriere</FooterLink>
                        <FooterLink to='/'>Nutzungsbedingungen</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Kontakt</FooterLinkTitle>
                        <FooterLink to='/'>Impressum</FooterLink>
                        <FooterLink to='/'>Kontakt</FooterLink>
                        <FooterLink to='/'>Destinations</FooterLink>
                        <FooterLink to='/'>Sponsorships</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>

                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/'>Instagram</FooterLink>
                        <FooterLink to='/'>Facebook</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <SocialIcon src={require('../../Images/peakconcepts-logo.jpg')} />
            PEAKCONCEPTS
          </SocialLogo>
                    <WebsiteRights>PEAKCONCEPTS © 2020</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                            <FaInstagram />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    );
}

export default Footer;