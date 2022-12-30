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
                無論在海外定係在香港，有關生活/留學/工作/旅遊/旅居/問題，想識同路人想講故事想問想呻想分享想鬧想讚，我們都是香港人。
                <br/><br/>
                我的前生是 ⎡香港網台⎦ app。香港網台 app 在網台百花盛放之黃金年代 (2005-2017?) 擔任了向公眾推介的工作，把各個不同網台節目集合在一個方便使用的手機 app，聽眾可以選擇下載或直接收聽各台節目。
                <br/><br/>
                香港的網台界自 2015 年後慢慢走下坡。網台如政黨般經過無數分裂，剩下的主要用 YouTube 作廣播，賺取 YouTube 少許廣告費，網台 app 漸漸變成網台 YouTube 分類，我就開始思想新的傳訊方式。
                自 2019 後，我們面對更加嚴苛嘅問題：FaceBook 只發放消息給少量人, YouTube 黃標； 網台界走得走，義士傑斯和快必就入獄。
                <br/><br/>
                在這個嚴苛嘅世代，我未有能力建設一個革命性的新平台，但在 Elon Musk 剛剛入主 Twitter 之後，我發現這個和我幻想世界接近一點的 OpenSource 萬象軟件，我就毫不猶疑地把這個建立起來。
                <br/><br/>
                這個《香港萬象》像當年⎡香港網台⎦ 一樣，會搜羅香港人有關的資訊，把內容加到平台中。如果閣下是我複製的對象而不想繼續的話，可以直接聯絡我，不過我更希望你可以加入我們直接發貼，無論在這個平台或其他萬象系統中。
                <br/><br/>
                我們雖然是香港人主導，但也歡迎所有人加入，新手可以先到上邊的『萬象社交網』link 瀏覽我們的資訊。
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
