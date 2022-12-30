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
import useBreadcrumbs from "use-react-router-breadcrumbs";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import HkersFooter from "components/Footers/HkersFooter.js";

// index sections
import SectionEvents from "views/index-sections/SectionEvents.js";
import SectionSocial from "views/index-sections/SectionSocial.js";
import SectionSocialAccounts from "views/index-sections/SectionSocialAccounts.js";
import SectionHiring from "views/index-sections/SectionHiring.js";

import SectionButtons from "views/index-sections/SectionButtons.js";
import SectionNavbars from "views/index-sections/SectionNavbars.js";
import SectionNavigation from "views/index-sections/SectionNavigation.js";
import SectionProgress from "views/index-sections/SectionProgress.js";
import SectionNotifications from "views/index-sections/SectionNotifications.js";
import SectionTypography from "views/index-sections/SectionTypography.js";
import SectionJavaScript from "views/index-sections/SectionJavaScript.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";
import SectionDark from "views/index-sections/SectionDark.js";
import SectionLogin from "views/index-sections/SectionLogin.js";
import SectionExamples from "views/index-sections/SectionExamples.js";
import SectionDownload from "views/index-sections/SectionDownload.js";

function Index() {
  const { t } = useTranslation();
  const breadcrumbs = useBreadcrumbs();
  document.documentElement.classList.remove("nav-open");
  return (
    <>
      <IndexNavbar />
      <IndexHeader />

      <div className="main">
        <SectionEvents />
        <SectionSocial />
        <SectionSocialAccounts />

        {/* <SectionHiring />
        <SectionButtons />
        <SectionNavbars />
        <SectionNavigation />
        <SectionProgress />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavaScript />
        <SectionCarousel />
        <SectionNucleoIcons />
        <SectionDark />
        <SectionLogin />
        <SectionExamples />
        <SectionDownload /> */}

        <HkersFooter />
      </div>
    </>
  );
}

export default Index;
