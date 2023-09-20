import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Languages"/>
        <div className="languages-info">
          <span>🇺🇸 EN - Intermediate</span>
          <span>🇧🇷 PT-BR - Native Speaker</span>
          <span>🇪🇸 ES - Fluent</span>
        </div>
            {/*<SectionTitle text="Education"/>
        <div className="educational-info">
          <span>🎓</span>
          <span>Computer Science Bachelors Degree</span>
        </div>*/}
      </div>
    )
}