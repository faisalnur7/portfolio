import React, { useState, useEffect } from 'react';
import { format, differenceInYears, differenceInMonths, differenceInDays } from 'date-fns';

const ExperienceCalculator = () => {
    const [experience, setExperience] = useState({ years: 0, months: 0, days: 0 });

    useEffect(() => {
        const joiningDate = new Date(2016, 7, 1); // August is 7 in JS Date
        const now = new Date();

        const diffYears = differenceInYears(now, joiningDate);
        const diffMonths = differenceInMonths(now, joiningDate) % 12;
        const diffDays = differenceInDays(now, joiningDate) % 30;

        setExperience({
            years: diffYears,
            months: diffMonths,
            days: diffDays,
        });
    }, []);

    return (
        <>Breathing with these technologies for {experience.years} years, {experience.months} months, and {experience.days} days.</>
    );
};

export default ExperienceCalculator;
