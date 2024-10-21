import React from 'react';

import { ContactCard, ContactContainer, ContactHead, ContactHeader, ContactInfo, ContactList } from './Contact.styled';
import EmailIcon from '../icons/Email';
import LinkedinIcon from '../icons/Linkedin';
import ShareIcon from '../icons/ShareIcon';


const Contact = () => {
    return (
        <ContactContainer id="contact">
            <ContactHead>
                <div className='heading'>Contact Us</div>
            </ContactHead>
            <ContactList>
                <ContactCard>
                    <ContactHeader>
                        <EmailIcon fill={'#C5832B'} width={60}  />
                        <div>E-mail</div>
                    </ContactHeader>
                    <ContactInfo>
                        <div>keerthi51299@gmail.com</div>
                    </ContactInfo>
                </ContactCard>
                
                <ContactCard>
                    <ContactHeader style={{marginTop: '16px'}}>
                        <ShareIcon fill={'#C5832B'} width={20}  />
                        <div style={{paddingLeft: '4px'}}>Social media</div>
                    </ContactHeader>
                    <ContactInfo style={{marginTop: '16px'}}>
                        <a href="https://www.linkedin.com/in/keerthi-peethala-051695268" target="_blank" rel="noopener noreferrer">
                            <LinkedinIcon fill={'#C5832B'} width={20}  />
                        </a>
                    </ContactInfo>
                </ContactCard>
            </ContactList>
        </ContactContainer>
    )
}

export default Contact;
