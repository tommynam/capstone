import React from 'react';
import EnglishScores from './englishScores';

export const StudentEnglish = () => {
    return (
        <div>
            <h1>English Language Proficiency</h1>
            
            <EnglishScores testName="IELTS Score" />

            <EnglishScores testName="PTE Score" />

            <EnglishScores testName="TOEFL IBT" />

            <EnglishScores testName="Duolingo" />

        </div>
    )
}
