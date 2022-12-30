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


const cardOnClick = () => {
  window.open('https://www.eventbrite.com/e/12-tickets-483866496717', '_blank', 'noopener,noreferrer');
}

function SectionEvents() {
  const { t } = useTranslation();

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
            <Row>
              <Col md="9">
                <Card className="mb-3" onClick={(e) => cardOnClick()} style={{ cursor: "pointer" }}>
                  <CardImg src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F406982209%2F1134978863673%2F1%2Foriginal.20221208-170023?auto=format%2Ccompress&q=75&sharp=10&s=3f2abd5f32908d62879370fafa57bced" top></CardImg>
                  <CardBody>
                    <CardTitle tag="h4">多倫多香港人社區中心 12月除夕聚會 + 招聘平台啟動！</CardTitle>
                    <CardText>
                      香港人社區中心喺每月最後一個星期六都會舉行唔同活動，俾多倫多香港人一個聚腳嘅機會。歡迎大家除夕下午一齊嚟分享美食、交流新移民資訊！
                    </CardText>
                    <Row>
                      <Col md="5">
                        <CardText>
                          <small className="text-muted">
                            Sat, 31 December 2022
                            <br/>
                            2:30 PM - 4:30 PM EST
                          </small>
                        </CardText>
                      </Col>
                      <Col md="2">
                      </Col>
                      <Col md="5">
                        <CardText>
                          <small className="text-muted">
                            105 Gibson Centre 105 Gibson Drive Markham,
                            <br/>
                            ON L3R 3K7
                          </small>
                        </CardText>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SectionEvents;
