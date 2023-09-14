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
/*eslint-disable*/
import React from "react";
import { useTranslation } from 'react-i18next';

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/hkbackground.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">{t('hometitle')}</h1>
            </div>
            <h2 className="presentation-subtitle text-center">
              {t('homesubtitle')}  
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        />
        <h6 className="category category-absolute">
          {t('site_admin_by')} {t('admin_name')}
        </h6>
      </div>
    </>
  );
}

export default IndexHeader;
