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

                {Object.entries(groupBy(data, 'sport'))
                    .sort((a, b) => a[0].localeCompare(b[0]))
                    .map((sport, index) => {
                        const name = sport[0].toLowerCase().replace(/ +/g, '-');

                        return (
                            <div id={name} key={index}>
                                <h4>
                                    {toTitleCase(sport[0]).replace(
                                        'Pingpong',
                                        'Ping-Pong'
                                    )}
                                </h4>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Day</th>
                                            <th>Time</th>
                                            <th>Group</th>
                                            <th>Match</th>
                                            <th>Venue</th>
                                            <th>Result</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.entries(
                                            groupBy(sport[1], 'day')
                                        )
                                            .sort((a, b) => {
                                                const days = [
                                                    'MON',
                                                    'TUE',
                                                    'WED',
                                                    'THU'
                                                ];

                                                return (
                                                    days.indexOf(
                                                        a[0] as string
                                                    ) -
                                                    days.indexOf(b[0] as string)
                                                );
                                            })
                                            .map((event) => (
                                                <>
                                                    {event[1]
                                                        .sort((a, b) => {
                                                            return (
                                                                a.time as string
                                                            ).localeCompare(
                                                                b.time as string
                                                            );
                                                        })
                                                        .map((_, key) => (
                                                            <tr key={key}>
                                                                <td>
                                                                    {event[0]}
                                                                </td>
                                                                <td>
                                                                    {_.time}
                                                                </td>
                                                                <td>
                                                                    {_.group}
                                                                </td>
                                                                <td>
                                                                    {_.t_a ||
                                                                        'N/A'}{' '}
                                                                    vs{' '}
                                                                    {_.t_b ||
                                                                        'N/A'}
                                                                </td>
                                                                <td>
                                                                    {_.venue}
                                                                </td>
                                                                <td>
                                                                    {_.result ||
                                                                        'N/A'}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                </>
                                            ))}
                                    </tbody>
                                </Table>
                                <br />
                            </div>
                        );
                    })}
            </div>
        </App>
    );
}

render(<Schedule />);
