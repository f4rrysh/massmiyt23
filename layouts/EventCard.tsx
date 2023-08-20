import React, { useEffect } from 'react';
import { groupBy } from 'lodash';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { useEvent } from 'hooks/event';

export default function EventCard(): JSX.Element {
    const { data } = useEvent();

    const toTitleCase = (string: string) => {
        return string.replace(/\w\S*/g, (text: string) => {
            return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
        });
    };

    return (
        <div className="event-card">
            <Row xs={1} md={2} className="g-4">
                {Object.entries(groupBy(data, 'sport')).map((sport, index) => {
                    const next = sport[1]
                        .filter((value) => value.result === null)
                        .sort((a, b) => {
                            // @ts-ignore
                            return a.match - b.match;
                        });

                    return (
                        <Col key={index}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                        {toTitleCase(sport[0]).replace(
                                            'Pingpong',
                                            'Ping-Pong'
                                        )}
                                    </Card.Title>
                                    <Card.Text>
                                        Next game:{' '}
                                        {toTitleCase(next[0].day as string)}{' '}
                                        {next[0].time as string}
                                    </Card.Text>
                                    <Button
                                        href={`/result#${sport[0]
                                            .toLowerCase()
                                            .replace(/ +/g, '-')}`}
                                    >
                                        {toTitleCase(sport[0]).replace(
                                            'Pingpong',
                                            'Ping-Pong'
                                        )}
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
}
