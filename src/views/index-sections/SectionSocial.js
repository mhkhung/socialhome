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
  CardImg,
  CardHeader,
  CardText,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

import parse from "html-react-parser";

const cardOnClick = (item) => {
  window.open(item.uri, '_blank', 'noopener,noreferrer');
}

const renderSocialRow = (local, page) => {
  return (
    <Row>
      {
        _.map(_.take(_.slice(local, 3 * page), 3), (item) => {
          const mediaURL = _.get(item, "media_attachments[0].preview_url") ||
            _.get(item, "account.header") || _.get(item, "account.avatar") || ''
          let p = parse(item.content);
          if (_.isArray(p) && p.length > 0) p = p[0];
          const contentText = _.truncate(_.isArray(p.props.children) ? _.join(_.map(p.props.children, (c) => _.isString(c) ? c : '' ), ' ') : p.props.children || '', { length: 100 });
          const itemURI = item.uri.replace('mastodon.hongkongers.net', 'hkers.social');
          return (
            <Col md="4">
              <Card className="card-blog card" style={{ height: "25rem", cursor: "pointer" }}>
                  <a href={itemURI} target="_blank">
                    <CardImg src={mediaURL} style={{ "max-height": "10rem", "min-height": "10rem", "object-fit": "cover" }} top></CardImg>
                  </a>
                  <CardBody>
                    <a href={itemURI} target="_blank">
                      <CardText>
                        {contentText}
                      </CardText>
                    </a>
                  </CardBody>

                <CardFooter className="text-center">
                  <div className="author">
                    <a href={itemURI} target="_blank">
                      <img className="avatar" src={item.account.avatar} />
                      <span>{item.account.acct}</span>
                    </a>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          );
        })
      }
    </Row>
  );
}

const renderPagination = (local, page, setPage) => {
  const pageCount = Math.ceil(local.length/3);
  return (
    <>
      <br />
      <Row className="justify-content-md-center text-center">
        <Col md="12" className="text-center">
          <nav aria-label="Social pages">
            <Pagination className="pagination justify-content-center" listClassName="justify-content-center">
              <PaginationItem>
                <PaginationLink
                  aria-label="Previous"
                  href="#social"
                  onClick={(e) => { if (page>0) setPage(page-1); }}
                >
                  <i aria-hidden={true} className="fa fa-angle-left" />
                  <span className="sr-only">Previous</span>
                </PaginationLink>
              </PaginationItem>
              {
                [...Array(pageCount)].map((x, i) => 
                  i === page ? 
                    <PaginationItem className="active">
                      <PaginationLink href="#social" onClick={(e) => e.preventDefault()}>
                      {i+1}
                      </PaginationLink>
                    </PaginationItem> :
                    <PaginationItem>
                      <PaginationLink href="#social" onClick={(e) => setPage(i)}>
                      {i+1}
                      </PaginationLink>
                    </PaginationItem>                    
                )
              }
              <PaginationItem>
                <PaginationLink
                  aria-label="Next"
                  href="#social"
                  onClick={(e) => { if (page<pageCount-1) setPage(page+1); }}
                >
                  <i aria-hidden={true} className="fa fa-angle-right" />
                  <span className="sr-only">Next</span>
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </nav>
        </Col>
      </Row>
    </>
  );
}

const SectionSocial = (props) => {
  const { t } = useTranslation();
  const [local, setLocal] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const url = "https://hkers.social/api/v1/timelines/public?local=true&only_media=false&limit=30";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        // console.log(json);
        setLocal(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
    const timeout = setInterval(()=>fetchData(), 5 * 60 * 1000);
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
      clearInterval(timeout);
    };
  }, []);

  return (
    <>
      <div className="section section-dark text-center section-social" id="social">
        <Container>
          <div className="title text-left">
            <h2>{t('socialsite')}</h2>
          </div>
          {
            renderSocialRow(local, page)
          }
          {
            renderPagination(local, page, setPage)
          }
        </Container>
      </div>
    </>
  );
}

export default SectionSocial;
