import React from 'react'
import Tile from '../componenets/Tile'
import Service from '../componenets/Service'
import Heading from '../componenets/Heading'
const Services = () => {
  return (
    <div className='bg-slate-900'>        
    <Heading message={"Services"} color={"text-white"} />

        <div className='bg-slate-900 p-20 grid  grid-cols-3 text-center pl-80 '>

        <Service title={"IT Support"} desc={"Mentaining IT insfrastucture , focusing on problem sovilng, troubleshooting"} />
        <Service title={"Cloud Management"} desc={"Managing cloud platforms, optimizing performance, and ensuring seamless data migration."}/>
        <Service title={"Software Development"} desc={"Building customized software solutions, focusing on efficiency, scalability, and innovation."}/>
        <Service title={"Technical Support"} desc={"Providing 24/7 technical assistance, troubleshooting hardware and software issues."}></Service>
        <Service title={"System Administration"} desc={"Maintaining servers, monitoring system health, and performing upgrades and backups."}></Service>
        <Service title={"IT Consulting"} desc={"Offering strategic advice on technology adoption to improve business operations and efficiency."}></Service>
        <Service title={"Database Management"} desc={"Designing, implementing, and maintaining databases for optimal performance and security."}></Service>
        <Service title={"Cybersecurity Auditing"} desc={"Assessing security protocols, identifying vulnerabilities, and recommending improvements."}></Service>
        <Service title={"System Administration"} desc={"Maintaining servers, monitoring system health, and performing upgrades and backups."} ></Service>
        </div>
    </div>
  )
}

export default Services