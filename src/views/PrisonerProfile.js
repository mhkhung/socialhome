import React, { useEffect, useState }  from "react";
import { useParams } from 'react-router-dom';
import _ from 'lodash';

// reactstrap components
import {
  Container,
  Row,
  Col,
  CardLink,
} from "reactstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

import useBreadcrumbs from "use-react-router-breadcrumbs";
import { useTranslation } from 'react-i18next';

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import HkersFooter from "components/Footers/HkersFooter.js";

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

const renderCharges = (charges, t) => {

  return (
    <>
    {
      charges.map((charge) => {
        const chargetext = _.get(charge, 'charge', '');
        const incident = _.get(charge, 'incident', '');
        const sentencing = _.get(charge, 'sentencing', '');
        return (
          <>
            <p>{chargetext ? t('charge') + ': ' + chargetext : ''}</p>
            <p>{incident ? t('incident') + ': ' + incident : ''}</p>
            <p>{sentencing ? t('sentencing') + ': ' + sentencing : ''}</p>
            <br/>
          </>
        )
      })
    }
    </>
  );
}

function PrisonerProfile() {
  const [activeTab, setActiveTab] = React.useState("1");
  const { t } = useTranslation();
  const { handle } = useParams();
  const [prisoners, setPrisoners] = useState([]);

  useEffect(() => {
    const url = "https://api.hongkongers.net/ppdb";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setPrisoners(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const ppdb = prisoners;
  const pp = _.find(ppdb, (p) => { return p.name === handle });
  const name = _.get(pp, 'name', '');
  const cname = _.get(pp, 'translations.zh_HK.name', '');
  const status = _.get(pp, "status", '');
  const title = _.get(pp, 'title', '');
  const ctitle =_.get(pp, 'translations.zh_HK.title', ''); 
  const summary = _.get(pp, 'summary');
  const csummary = _.get(pp, 'translations.zh_HK.summary', '');
  const links = _.get(pp, "links", {});
  const image = _.get(pp, "image", _.get(pp, "image_copyrighted", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg"));
  const charges = _.get(pp, "charges", []);
  // eslint-disable-next-line no-unused-vars
  const breadcrumbs = useBreadcrumbs();

  // eslint-disable-next-line no-unused-vars
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <IndexNavbar />
      <ProfilePageHeader />

      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                className="img-circle img-no-padding img-responsive"
                src={image}
                alt={name}
              />
            </div>
            <h2>{status}</h2>
            <br />
            <div className="name">
              <h4 className="title">
                {name} {cname} <br />
              </h4>
              { renderLinks(links) }
              <h6 className="description">{title}</h6>
              <br/>
              <h6 className="description">{ctitle}</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <p>
                {summary}
              </p>
              <br/>
              <p>
                {csummary}
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <br/>
              {renderCharges(charges, t)}
            </Col>
          </Row>
        </Container>
      </div>
      <HkersFooter />
    </>
  );
}

export default PrisonerProfile;
