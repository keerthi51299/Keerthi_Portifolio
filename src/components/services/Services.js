import React from 'react';

import { Card, CardHeading, CardImage, CardItem, CardInfo, Item, List, ServicesContainer, ServiceHead } from './Services.styled';
import { SERVICES } from '../constants';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServiceHead>
                <div className='heading'>
                    My Services
                </div>
            </ServiceHead>
            <List>
                {SERVICES.map((service, index)=>(
                    <Card key={service.heading}>
                        <CardImage src={service.image} alt={service.alt}/>
                        <CardInfo>
                            <CardHeading>{service.heading}</CardHeading>
                            <CardItem>
                                {service.items.map((item, index) => (
                                    <Item key={index}>{item}</Item>
                                ))}
                            </CardItem>
                        </CardInfo>
                    </Card>
                ))}
            </List> 
        </ServicesContainer>
    )
}

export default Services;
