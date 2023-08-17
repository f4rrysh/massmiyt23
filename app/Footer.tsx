import React from 'react';

export interface FooterProp {}

export default function Footer({}: FooterProp): JSX.Element {
    return (
        <div className="footer">
            <div className="items">
                <div className="item">
                    <span>
                        <b>SM Imtiaz YT Kuala Terengganu</b>
                    </span>

                    <a href="https://imtiazkt.edu.my/">imtiazkt.edu.my</a>
                </div>

                <div className="item">
                    <span>MPM sesi 22/23</span>
                    <span>MPM sesi 23/24</span>
                </div>

                <div className="item">
                    <a href="">Farish Irfan</a>
                </div>

                <div className="item">
                    <span>
                        Made with ❤ in <b>2023</b>
                    </span>
                </div>
            </div>
        </div>
    );
}
