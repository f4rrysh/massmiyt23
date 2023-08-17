import React from 'react';

import Logo from 'images/logo.svg';

export default function NavBar(): JSX.Element {
    return (
        <header>
            <nav className="navbar">
                <a href="/" className="logo">
                    <Logo width={40} height={40} />
                </a>

                <div>
                    <ul className="items">
                        <li className="item">
                            <a href="/">Home</a>
                        </li>

                        <li className="item">
                            <a href="event">Event</a>
                        </li>

                        <li className="item">
                            <a href="gallery">Gallery</a>
                        </li>

                        <li className="item">
                            <a href="schedule">Schedule</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
