import style from './Experience.module.css';
import Image from 'next/image';
import { useState } from 'react';

const Experience = () => {
    const data = [
        {
            "tabbarTitle": "Monstarlab",
            "companyName": "Monstarlab",
            "title": "iOS Developer",
            "startDate": "Dec 2022",
            "endDate": "Present",
            "image": "/home/monstarlab.png",
            "description": "I am an iOS developer for Monstarlab and my main job scope is to develop new features, fixing bugs and testing. Currently, I'm maintaining two apps and working in agile and scrum environment."
        },
        {
            "tabbarTitle": "ST Engineering",
            "companyName": "ST Engineering",
            "title": "Software Engineer",
            "startDate": "Dec 2021",
            "endDate": "Dec 2022",
            "image": "/home/stengineering.png",
            "description": "At ST Engineering, I created and maintain CI and CD pipeline using Docker and Kubernetes with static code analysis such as Fortify and Sonarqube. I also managed a multi-repo for a team of 9. Apart from this, I created a automated backups using Kopia and created backend service using Feather.js framework to communicate with Ldap and VMware ESXi."
        },
        {
            "tabbarTitle": "Siemens Healthineers",
            "companyName": "Siemens Healthineers",
            "title": "Software Developer Intern",
            "startDate": "Jul 2020",
            "endDate": "Dec 2020",
            "image": "/home/SiemensHealthineers.png",
            "description": "At Siemens Healthineers, I implemented an extraction data pipeline to convert Digital Imaging and Communications in Medicine (DICOM) into a structure data frame and this data frame was then stored into database which was built with PostgreSQL using Python. I also created a multiple page web application from stratch that containing different dashboards to visualise data using React.js."
        }
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedData, setSelectedData] = useState(data[0]);

    const updateIndex = (index) => {
        setSelectedIndex(index)
        setSelectedData(data[index])
    };

    return (
        <div className={style.experience}>
            <h2 className={style.title}>Experiences</h2>

            <div className={style.experienceTab}>
                {
                    data.map((job, index) => (
                        <div 
                            className={[style.tabContainer, selectedIndex === index ? style.tabSelected:null].join(' ')}
                            onClick={() => {updateIndex(index)}}>
                            <p>{job.tabbarTitle}</p>
                        </div>
                    ))
                }
            </div>

            <div className={style.experienceContainer}>
                <div className={style.leftContainer}>
                    <h3>{selectedData.companyName}, <span className={style.countryP}>Singapore</span></h3>
                    <p>{selectedData.title}</p>
                    <p>{selectedData.startDate} - {selectedData.endDate}</p>
                    <p className={style.description}>{selectedData.description}</p>
                </div>
                <div className={style.rightContainer}>
                    <div className={style.ImageContainer}>
                        <Image 
                            alt="Swee Kwang Experiences"
                            src={selectedData.image}
                            className={style.myImage}
                            width={600} 
                            height={315}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Experience;