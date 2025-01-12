import React from 'react';
import Hero from '../../components/common/Hero/Hero';

const OurPeopleHero = React.memo(() => {
    return (
        <Hero customClass={"people_hero"}>
            <Hero.Section className={"people-text"}>
                <Hero.Typography type={"h5"}>our people</Hero.Typography>
                <Hero.Typography type={"h1"}>People of M2</Hero.Typography>
                <Hero.Typography className="text-paragraph-standard" type={"p"}>Our people are the brains behind our operations. They come</Hero.Typography>
                <Hero.Typography className="text-paragraph-standard" type={"p"}>from diverse backgrounds and offer their expertise to help</Hero.Typography>
                <Hero.Typography className="text-paragraph-standard" type={"p"}>you tell meaningful stories.</Hero.Typography>
            </Hero.Section>
        </Hero>
    );
})


export default OurPeopleHero;