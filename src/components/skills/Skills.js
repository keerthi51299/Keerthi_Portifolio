import React from 'react';

import { List, SkillCard, SkillInner, SkillPercentage, SkillTitle, SkillsContainer, SkillsHead } from './Skills.styled';
import { SKILLS } from '../constants';

const Skills = () => {
    return (
        <SkillsContainer id="skills">
            <SkillsHead>
                <div className='heading'>
                    My Skills
                </div>
            </SkillsHead>
            <List>
                {SKILLS.map((skill, index)=>(
                    <SkillCard>
                        <SkillTitle>
                            <div>{skill.title}</div>
                            <div>{skill.percentage}</div>
                        </SkillTitle>
                        <SkillPercentage>
                            <SkillInner width={skill.percentage}></SkillInner>
                        </SkillPercentage>
                    </SkillCard>
                ))}
            </List>
        </SkillsContainer>
    )
}

export default Skills;
