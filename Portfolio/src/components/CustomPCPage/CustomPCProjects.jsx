import React from "react";
import './CustomPCPage.scss'

import CustomPC1 from '../../assets/custom-pc-1.webp'
import CustomPC2 from '../../assets/custom-pc-2.avif'
import CustomPC3 from '../../assets/custom-pc-3.webp'
import CustomPC4 from '../../assets/custom-pc-4.webp'
import CustomPC5 from '../../assets/custom-pc-5.avif'
import CustomPC6 from '../../assets/custom-pc-6.webp'
import CustomPC7 from '../../assets/custom-pc-7.webp'
import CustomPC8 from '../../assets/custom-pc-8.webp'
import CustomPC9 from '../../assets/custom-pc-9.webp'
import CustomPC10 from '../../assets/custom-pc-10.avif'
import CustomPC11 from '../../assets/custom-pc-11.png'
import CustomPC12 from '../../assets/custom-pc-12.png'

const ProjectCard = ({ imageUrl, altText }) => {
    return (
        <div className="custom-project-card">
            <img src={imageUrl} alt={altText} className="custom-project-card-image" />
        </div>
    );
};

const Projects = () => {
    return (
        <div className="custom-project-container">
            <div className="custom-project-center">
                <h2 className="custom-project-title">Our Past Projects</h2>
            </div>
            <div className="custom-project-flex">
                <ProjectCard imageUrl={CustomPC1} altText="Project 1" />
                <ProjectCard imageUrl={CustomPC2} altText="Project 2" />
                <ProjectCard imageUrl={CustomPC3} altText="Project 3" />
                <ProjectCard imageUrl={CustomPC4} altText="Project 3" />
                <ProjectCard imageUrl={CustomPC5} altText="Project 3" />
                <ProjectCard imageUrl={CustomPC6} altText="Project 3" />
                <ProjectCard imageUrl={CustomPC7} altText="Project 3" />
                <ProjectCard imageUrl={CustomPC8} altText="Project 3" />
                <ProjectCard imageUrl={CustomPC9} altText="Project 3" />
                <ProjectCard imageUrl={CustomPC10} altText="Project 3" />
                <ProjectCard imageUrl={CustomPC11} altText="Project 3" />
                <ProjectCard imageUrl={CustomPC12} altText="Project 3" />
            </div>
        </div>
    );
};

export default Projects;
