import React, { Component } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {

        return (
            <div className='Contact'>
                <div className="Container">
                    <div className='logo'>
                        <div className='gitLogo'>
                            <a className='logo' href='https://github.com/Sp198418' target='blank'>{<FontAwesomeIcon icon={faGithub} size='lg' />}</a>
                        </div>
                        <div className='gitLogo'>
                            <a className='logo' href='https://www.linkedin.com/in/samuelpl/' target='blank'>{<FontAwesomeIcon icon={faLinkedin} size='lg' />}</a>
                        </div>

                        <a href="mailto:samuelpierrelouis10@gmail.com">
                            <h2> Email:samuelpierrelouis10@gmail.com</h2>
                        </a>
                    </div>
                </div>
            </div>

        )
    }
}



export default Contact;