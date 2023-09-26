import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
            <p>Associate Backend Software Engineer at Empathy.co 2mo</p>
            <p>Customer success specialist at Empathy.co 3yrs 5mo</p>
          <div className="experience-time">
            <Skill image="/solr.svg" measure={1} years="4 years"/>
            <Skill image="/elasticsearch.svg" measure={1} years="4 years"/>
            <Skill image="/spring-boot.svg" measure={4} years="1 year"/>
            <Skill image="/java.png" measure={4} years="1 year"/>
              <Skill image="/python.svg" measure={4} years="1 year"/>
          </div>
        </div>
    )
}