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
                {Object.entries(groupBy(data, 'sport'))
                    .sort((a, b) => a[0].localeCompare(b[0]))
                    .map((sport, index) => {
                        const result = sport[1]
                            .filter((value) => value.result !== null)
                            .sort((a, b) => {
                                // @ts-ignore
                                return a.match - b.match;
                            });

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
                                            Recent result:{' '}
                                            {result.length ? (
                                                <>
                                                    {result[0].t_a || ''}{' '}
                                                    {result[0].result || ''}{' '}
                                                    {result[0].t_b || ''}{' '}
                                                </>
                                            ) : (
                                                <>N/A</>
                                            )}
                                        </Card.Text>
                                        <Card.Text>
                                            Next game: ({next.length} ?
                                            <b>{next[0].t_a}</b> vs{' '}
                                            <b>{next[0].t_b}</b>{' '}
                                            {toTitleCase(
                                                next[0].day as string
                                            ) || 'N/A'}{' '}
                                            {(next[0].time as string) || ''}) :{' '}
                                            <>N/A</>
                                        </Card.Text>
                                        <Button
                                            href={`/schedule#${sport[0]
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
