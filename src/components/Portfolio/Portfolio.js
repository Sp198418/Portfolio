import React, { Component } from 'react';
import './Portfolio.css';
//image , icon, short description button,URL, link
class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // backgroundImage: '';
            filter: 'All Projects'
        };
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange = (event) => {
        this.setState({ filter: event.target.innerText })

    }

    createCard = () => {
        const allProjects = [
            {
                url: ' https://sp198418.github.io/TRONJS/',
                title: 'Tron game',
                desc: 'video game application',
                tech: ['JavaScript',  ',', 'HTML',  ',', 'CSS', 'All Projects'],
                img: '/Assets/buttonLandpage.png',
            },
            {
                url: ' https://sp198418.github.io/Calculator-Project/',
                title: 'Calculator',
                desc: 'web designed calculator application',
                tech: ['JavaScript',  ',', 'HTML',  ',', 'CSS', 'All Projects'],
                img: '/Assets/Calcscreenshot.jpg',
            },
            {
                url: 'https://sp198418.github.io/NotFlix/',
                title: 'Notflix',
                desc: 'Netflix model application',
                tech: ['JavaScript', ',', 'HTML',  ',', 'CSS',  ',', 'FullStack', 'All Projects'],
                img: '/Assets/Notflixscreenshot.jpg',
            },
            {
                url: 'https://github.com/Sp198418/BankingApplication.java/commit/3d6d2cc73c30c038fed40d5a3deeae3e7705b6ac',
                title: 'Banking Application',
                desc: 'Personal banking make deposits, withdraws etc.',
                tech: ['Java', 'All Projects'],
                img: '/Assets/Bankingapp.png',
            },

        ];

        return (
            allProjects
                .map((projects, index) => {
                    return (
                        <a href={projects.url}  target='blank' className='projectsLink'
                            key={index}
                            className={!projects.tech.includes(this.state.filter) ? 'projectCardHidden' : 'projectCardShowing'}
                            style={{ backgroundImage: `url(${projects.img || this.state.backgroundImage})` }}>



                            <img className='projectImage' alt={projects.title} src={projects.img} />
                            <div className='bar'>{projects.title}</div>


                            <div className='technologies'><ul>{projects.tech.map((tech, index) => {
                                return tech !== 'All Projects' ? <li key={index} value={tech} onClick={this.handleInputChange}>{tech}</li> : ''
                            })}</ul>

                            </div>



                        </a>

                    )
                })
        )
    }

    render() {
        return (

            <div className=' Portfolio' name='Portfolio'>
                <h1 className="sectionHead"> Web Developer Portfolio</h1>
                <ul className="filter">
                    <li onClick={this.handleInputChange}>HTML</li>
                    <div>|</div>
                    <li onClick={this.handleInputChange}>CSS</li>
                    <div>|</div>
                    <li onClick={this.handleInputChange}>JavaScript</li>
                    <div>|</div>
                    <li onClick={this.handleInputChange}>Java</li>
                    <div>|</div>
                    <li onClick={this.handleInputChange}>FullStack</li>
                    <div>|</div>
                    <li onClick={this.handleInputChange}>All Projects</li>
                </ul>
                <h3>I am always looking to experiment with new technologies and improve on my abilies</h3>

                <div className="projects">
                    {this.createCard()}
                </div>
            </div>

        )
    }
}



export default Portfolio;