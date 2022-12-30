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
import _, { isArray } from 'lodash';

// reactstrap components
import {
  Container,
  Row,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  CardImg,
  CardHeader,
  CardText,
} from "reactstrap";

import parse from "html-react-parser";

const cardOnClick = (item) => {
  window.open(item.url, '_blank', 'noopener,noreferrer');
}

const renderSocialAccountRows = (accounts) => {
  const row = 0;
  return (
    <>
    {
      [...Array(Math.ceil(accounts.length/4))].map((x, row) => {
        return (
          <Row>
          {
            _.map(_.take(_.slice(accounts, 4 * row), 4), (item) => {
              return (
                <Col md="3">
                  <Card className="card-profile card" onClick={(e) => cardOnClick(item)} style={{ height: "10rem", cursor: "pointer" }}>
                    <CardBody>
                      <div className="card-avatar border-white">
                        <a href="#sa" onClick={e => e.preventDefault()}>
                          <img
                            src={item.avatar}
                          ></img>
                        </a>
                      </div>
                      <CardText>
                        {item.display_name}
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
              );
            })
          }
          </Row>
        )
      })
    }
    </>
  );
}

const SectionSocialAccounts = (props) => {
  const { t } = useTranslation();
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const url = "https://hkers.social/api/v1/directory?order=active&local=true&limit=28";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        // console.log(json);
        setAccounts(json);
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

  return (
    <>
      <div className="section text-center section-social-accounts" id="social">
        <Container>
          <div className="title text-left">
            <h2>{t('socialaccounts')}</h2>
          </div>
          {
            renderSocialAccountRows(accounts)
          }
        </Container>
      </div>
    </>
  );
}

export default SectionSocialAccounts;
