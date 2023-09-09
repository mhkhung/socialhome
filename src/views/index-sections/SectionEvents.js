/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect, useState } from "react"
import { useTranslation } from 'react-i18next';
import _ from 'lodash';
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  CardImg,
  CardHeader,
  CardText,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  CustomInput
} from "reactstrap";

import Moment from 'react-moment';

function SectionEvents() {
  const { t, i18n } = useTranslation();
  const [events, setEvents] = useState({});
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const url = "https://api.hongkongers.net/events";
    //const url = 'http://localhost:3030/events';
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setEvents(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
    const timeout = setInterval(()=>fetchData(), 15 * 60 * 1000);
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
      clearInterval(timeout);
    };
  }, []);

  if (!_.get(events, "events", []).length) return (<></>);
  const event = events.events[index];

  return (
    <>
      <div className="section section-events">
        <Container>
          <div className="title">
            <h2>{t('events')}</h2>
            <Row>
              <Col sm="4">
                <InputGroup>
                  <Input placeholder={t('events_search')} name="search" type="text" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <i aria-hidden={true} className="fa fa-search" />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Col>
              <Col sm="4">
                <InputGroup>
                  <Input placeholder={t('events_location')} name="location" type="text" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <i aria-hidden={true} className="fa fa-map-marker" />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Col>
            </Row>
            <br />
            <Row className="align-items-center">
              <Col md="1">
                <Pagination className="pagination justify-content-center" listClassName="justify-content-center">
                  <PaginationItem className={index == 0 ? "disabled": ""}>
                    <PaginationLink
                      aria-label="Previous"
                      href="#events"
                      onClick={(e) => { if (index > 0) { setIndex(index-1); } }}
                    >
                      <i aria-hidden={true} className="fa fa-angle-left" />
                      <span className="sr-only">Previous</span>
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </Col>
              <Col md="9">
                <Card className="mb-3" style={{ cursor: "pointer" }}>
                <a href={event.url} target="_blank" ><CardImg src={event.image} top></CardImg>
                <CardBody>
                  <CardTitle tag="h4">{event.title}</CardTitle>
                  <CardText>
                    {event.summary}
                  </CardText>
                  <Row>
                    <Col md="5">
                      <CardText>
                        <small className="text-muted">
                          <Moment date={event.start.local} format='lll' locale={i18n.language} /> -
                          <br/>
                          <Moment date={event.end.local} format='lll' locale={i18n.language} />
                        </small>
                      </CardText>
                    </Col>
                    <Col md="2">
                    </Col>
                    <Col md="5">
                      <CardText>
                        <small className="text-muted">
                          {
                            _.map(event.venue.address.localized_multi_line_address_display, (line) => {
                              return (
                                <>
                                  {line}
                                  <br/>
                                </>
                            );
                            })
                          }
                        </small>
                      </CardText>
                    </Col>
                  </Row>
                </CardBody></a>
                </Card>
              </Col>
              <Col md="1">
                <Pagination>
                  <PaginationItem className={index == events.events.length -1 ? "disabled": ""}>
                    <PaginationLink
                      aria-label="Next"
                      href="#events"
                      onClick={(e) => { if (index < events.events.length -1 ) { setIndex(index+1); } }}
                    >
                      <i aria-hidden={true} className="fa fa-angle-right" />
                      <span className="sr-only">Next</span>
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SectionEvents;
