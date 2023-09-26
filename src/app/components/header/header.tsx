import Image from 'next/image'

import "./header.scss"

export function Header(){
    return(
        <div className="header">
          <div>
            <h1>Hi, i´m Kesley! 👋</h1>
            <h2>Associate Backend Software Engineer</h2>
          </div>
          <Image
            src="/raposinha.png"
            width={325}
            height={310}
            priority
          />
        </div>
    )
}