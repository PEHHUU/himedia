import React from 'react'
import about from "../assets/img/about.jpg"
const introText = {
  title:"port devloper",
  desc : ["talent is","found at the end of the","effort"]
};//배열이 하나일땐 중간가로



const Intro = () => {
  return (
    <section id="intro">
    <div className="intro_inner">
        <h1 className="intro_title">
           {introText.title}
        </h1>
        <div className="intro_lines" aria-hidden="true">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </div>
        <div className="intro_text">
            <div className="text">
                <div>{introText.desc[0]}</div>
                <div>{introText.desc[1]}</div>
                <div>{introText.desc[2]}</div>
            </div>
            <div className="img">
                <img src="https://github.com/PEHHUU/port_img_1/blob/main/img/about.jpg?raw=true"alt="수"/>
            </div>
        </div>
        <div className="intro_lines bottom" aria-hidden="true">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </div>
    </div>
</section>
  )
}

export default Intro
