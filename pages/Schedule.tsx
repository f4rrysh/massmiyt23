import React, { lazy } from 'react';
import { render } from 'utils/render';

// App
import App from 'app/App';

import Table from 'react-bootstrap/Table';
import { useEvent } from 'hooks/event';
import { groupBy } from 'lodash';

function Schedule(): JSX.Element {
    const { data } = useEvent();

    const toTitleCase = (string: string) => {
        return string.replace(/\w\S*/g, (text: string) => {
            return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
        });
    };

    return (
        <App title="Schedule">
            <div className="schedule">
                <h3>Schedule</h3>
                <p>Get an insight of the next match</p>

                {Object.entries(groupBy(data, 'sport')).map((sport, index) => {
                    const name = sport[0].toLowerCase().replace(/ +/g, '-');

                    return (
                        <div id={name} key={index}>
                            <h4>
                                {toTitleCase(sport[0]).replace(
                                    'Pingpong',
                                    'Ping-Pong'
                                )}
                            </h4>
                            {Object.entries(groupBy(sport[1], 'day'))
                                .sort((a, b) => {
                                    const days = ['MON', 'TUE', 'WED', 'THU'];

                                    return days.indexOf(a[0]) <
                                        days.indexOf(b[0])
                                        ? 0
                                        : 1;
                                })
                                .map((_) => {
                                    console.log(_);
                                    return <></>;
                                })}
                        </div>
                    );
                })}
            </div>
        </App>
    );
}

render(<Schedule />);
