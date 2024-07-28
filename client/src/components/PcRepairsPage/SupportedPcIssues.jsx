import React from 'react';
import './PcRepairs.scss';

const commonIssues = [
    "Computer is slow or freezes",
    "Cannot access Internet or email",
    "Laptop shuts down on its own",
    "Broken laptop screen",
    "Can’t charge laptop",
    "Windows updates issue",
    "Windows error pop-up",
    "Computer will not boot up",
    "Computer virus / spyware",
    "Spilled Liquid on Laptop",
    "Getting a blue screen / error message",
    "Hardware issues / software issues",
    "Won’t start up / won’t power up",
    "Won’t shut down / sleep"
];

const CommonIssuesList = () => {
    return (
        <>
         <h2 className="pc-supported-header">Commonly supported Microsoft Windows / PC issues:</h2>
        <div className="pc-supported-issues-list">
            <div>
                {commonIssues.slice(0, 7).map((issue, index) => (
                    <p key={index}><span className="pc-issues-text">✔</span> {issue}</p>
                ))}
            </div>
            <div>
                {commonIssues.slice(7).map((issue, index) => (
                    <p key={index}><span className="pc-issues-text">✔</span> {issue}</p>
                ))}
            </div>
        </div>
        </>
    );
};


export default CommonIssuesList;
