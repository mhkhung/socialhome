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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

import _ from 'lodash';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';

// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselCaption
} from "reactstrap";

import { useTranslation } from 'react-i18next';

// core components
const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

const renderLinks = (links) => {
  return (
    <>
    {
      Object.keys(links).map(key => {
        const link = links[key];
        const href = _.get(link, "zh", _.get(link, "en"));
        if (key === 'wikipedia') {
          return(<CardLink target="_blank" href={href}><FontAwesomeIcon icon={brands('wikipedia-w')} /></CardLink>)
        }
        else if (key === 'thecfhk') {
          return(<CardLink target="_blank" href={href}><FontAwesomeIcon icon={solid('fire')} /></CardLink>)
        }
        else {
          return(<CardLink target="_blank" href={href}>{key}</CardLink>)
        }
      })
    }
    </>
  );  
}

function SectionCarousel() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const [prisoners, setPrisoners] = useState([]);

  useEffect(() => {
    const url = "https://api.hongkongers.net/ppdb";
    //const url = 'http://localhost:3030/ppdb';
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setPrisoners(json);
        setActiveIndex(_.random(0, json.length, false));
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === prisoners.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? prisoners.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  // eslint-disable-next-line no-unused-vars
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const ppdb = prisoners;
  const pp = ppdb != null ? ppdb[activeIndex] : null;
  const name = _.get(pp, 'name', '');
  const cname = _.get(pp, 'translations.zh_HK.name', '');
  const title = _.get(pp, 'title', '');
  const ctitle =_.get(pp, 'translations.zh_HK.title', ''); 
  const summary = _.get(pp, 'summary');
  const csummary = _.get(pp, 'translations.zh_HK.summary', '');
  const links = _.get(pp, "links", {});
  return (
    <>
      <div className="section pt-o" id="carousel">
        <Container>
          <div className="title text-left">
            <h2>{t('political_prisoners')}</h2>
          </div>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <Card className="page-carousel">
                <Carousel
                  activeIndex={activeIndex}
                  interval={8000}
                  next={next}
                  previous={previous}
                >
                  {ppdb.map((item) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={ppdb.name}
                      >
                        <img 
                          src={item.image || item.image_copyrighted} 
                          alt={item.name} 
                          style={{ aspectRatio: 2.5/2, 'object-fit': 'cover' }}
                        />
                        <CarouselCaption
                          className="font-weight-bold bg-dark"
                          captionText={item.status}
                          captionHeader={item.name +' ' + item.translations.zh_HK.name}
                        />
                      </CarouselItem>
                    );
                  })}
                  { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </Carousel>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="4">
              <Card className="text-center">
                <CardBody>
                  <a href={"profile/" + encodeURIComponent(name) } >
                    <CardTitle>{name} {cname}</CardTitle><br/>
                    {title || ctitle ? <><CardSubtitle>{title} {ctitle}</CardSubtitle><br/></> : ''}
                    <CardText><ResponsiveEllipsis text={summary} maxLine={6} /></CardText>
                    <CardText><ResponsiveEllipsis text={csummary} maxLine={6} /></CardText>
                  </a>
                  {
                    renderLinks(links)
                  }
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionCarousel;
