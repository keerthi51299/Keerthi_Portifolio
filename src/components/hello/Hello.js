import React from 'react';
import { Chip, HelloCotainer, Image, Name, Role, TextContainer} from './Hello.styled';

const Hello = () => {
    return (
        <HelloCotainer id="home">
            <TextContainer>
                <Name className='heading'>Keerthi Peethala</Name>
                <Role>Frontend Developer</Role>
                <div>
                    <Chip>
                        <a href="res.pdf" download>Download CV</a>
                    </Chip>
                </div>
            </TextContainer>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Image src="profile.png" alt="profile" />
            </div>
        </HelloCotainer>
    )
}

export default Hello;
