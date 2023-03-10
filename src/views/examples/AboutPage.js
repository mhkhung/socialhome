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
import React from "react";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

import useBreadcrumbs from "use-react-router-breadcrumbs";
import { useTranslation } from 'react-i18next';

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import HkersFooter from "components/Footers/HkersFooter.js";

function AboutPage() {
  const [activeTab, setActiveTab] = React.useState("1");
  const { t } = useTranslation();
  const breadcrumbs = useBreadcrumbs();

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("about-page");
    return function cleanup() {
      document.body.classList.remove("about-page");
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
                src="https://files.hongkongers.net/accounts/avatars/109/383/902/627/129/123/original/3a0624f9a7da8d97.png"
              />
            </div>
            <div className="name">
              <h4 className="title">
                {t('admin_name')} <br />
              </h4>
              <h6 className="description">{t('hometitle')}</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
                ?????????????????????????????????????????????/??????/??????/??????/??????/????????????????????????????????????????????????????????????????????????????????????????????????
                <br/><br/>
                ??????????????? ?????????????????? app??????????????? app ???????????????????????????????????? (2005-2017?) ??????????????????????????????????????????????????????????????????????????????????????????????????? app?????????????????????????????????????????????????????????
                <br/><br/>
                ????????????????????? 2015 ????????????????????????????????????????????????????????????????????????????????? YouTube ?????????????????? YouTube ???????????????????????? app ?????????????????? YouTube ????????????????????????????????????????????????
                ??? 2019 ??????????????????????????????????????????FaceBook ???????????????????????????, YouTube ????????? ??????????????????????????????????????????????????????
                <br/><br/>
                ???????????????????????????????????????????????????????????????????????????????????? Elon Musk ???????????? Twitter ????????????????????????????????????????????????????????? OpenSource ????????????????????????????????????????????????????????????
                <br/><br/>
                ??????????????????????????????????????????????????? ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                <br/><br/>
                ???????????????????????????????????????????????????????????????????????????????????????????????????????????????link ????????????????????????
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <HkersFooter />
    </>
  );
}

export default AboutPage;
