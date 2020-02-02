import React, { Component } from 'react';
import picofme from './picture/Portfolio-Pic.jpg';

export default class Bio extends Component {
    render() {
        return (
            <section className="bio">
                <div className="pic_container">
                    <img className="self_pic" src={picofme} alt="Sihao Cao Portfolio Profile" height="250" width="200" />
                </div>
                <h1 className="mainName">
                    Sihao Cao
                </h1>
                <h2 className="hello">
                    Hello there,
                </h2>
                <h2>
                    My name is Sihao and I am a fullstack web developer.
                </h2>
                <p className="projects_scroll" onClick={() => this.props.scroll()}>
                    Portfolio
                </p>
                <section className="bio_info">
                    <p>
                    As a Web Developer currently based in the Boston area, 
                    I have a passion for using code to solve problems and bring imaginations to life.  
                    I consider myself a dedicated and diligent individual who is always looking for ways to achieve greater efficiency.
                    Right now, I look forward to joining a team of great programmers in the search for exciting career opportunities in tech.
                    Feel free to email me at <span className="highlight">sihao.cao@gmail.com</span> or contact me using any of the methods above.
                    </p>
                </section>
            </section>
        )
    }
}