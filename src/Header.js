import React from 'react';

export default function Header(props) {
    return (
        <header className="header">
            <nav className="external_nav">
                <a href="https://docs.google.com/document/d/1o5EN0J7ZRfdJKy-TBzWzIvtXSpPwtLTs_cTtuCkc2a8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Résumé</a>
                <div>|</div>
                <a href="https://github.com/sihaocao" target="_blank" rel="noopener noreferrer">GitHub</a>
                <div>|</div>
                <a href="https://www.linkedin.com/in/sihao-cao/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <div>|</div>
                <a href="https://twitter.com/SihaoCao" target="_blank" rel="noopener noreferrer">Twitter</a>
            </nav>
        </header>
    )
}