import React from 'react';

function Result() {
const items = [
 {
    type: 'Hopper',
    content: 'Hoppers enjoy change of pace, and the freedom to switch from one activity to another. They may often be easily distracted, however, and thereby run the risk of going off-track and not finishing what they start. Having too many open items simultaneously can ultimately cause them to be unproductive.',
 },
 {
    type: 'Hyper-Focus',
    content:'The Hyper Focus style is absorbed by detail but may have trouble stopping one activity to transition to something new. This style preference gets so involved in what they are doing that they may ignore reminders and cues to move on to the next priority. When Hyper Focus people are deeply involved in the task at hand, they can become so absorbed in the details, that they can lose track of time.',
 },
 {
 type: 'Bigger Picture',
 content: 'Big Picture individuals are big thinkers but often leave the details out of their plans. They find details less attractive than global strategies and tasks that call for spontaneity. Their lofty vision and high speed of action can cause them to overlook or ignore the essential small pieces necessary for success.',
 },
 {
 type: 'Perfectionist Plus',
 content:'Perfectionist Plus types thrive on details and an endless pursuit to "get things right". Because of their very high personal standards, they believe that they should be able to do nearly everything themselves and do it all well. They may be overly concerned about others approval and often have difficulty saying "No" to the requests of others for their time.',
 },
 {
 type: 'Impulsive',
 content: 'Impulsive types love to leap but may forget to look first. Enjoying the rush of adrenaline, they would rather act spontaneously than follow a preset plan. However, lack of planning, or diminishing its importance, can result in missed deadlines and letting others down. Impulsives tend to get bored easily andcan find routine and maintenance tasks distasteful.',
 },
 {
 type: 'Cliff-Hanger',
 content: 'Cliff Hangers believe that they work most effectively when under the pressure of a deadline. Cliff Hangers like having an adrenaline rush to help them focus, but working under tight deadlines often doesn"t leave enough time to check work thoroughly or to handle things that might go wrong. Waiting to start until the last moment often causes added stress, tension and even missed deadlines.',
}
]

    return (
        <div className="resultContainer">
    <div className="resultHead"><h3>My Quiz Result:</h3></div>
    <div className="resultBody">lorem ipsum</div>
    <div className="resultHead"><h3>My Advice:</h3></div>
    <div className="resultBody">lorem ipsum</div>
        </div>
    )
};


export default Result;
