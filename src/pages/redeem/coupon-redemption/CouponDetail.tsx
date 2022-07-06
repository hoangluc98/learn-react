import React from 'react';
import { useStyles } from './style';
import { useTranslation } from 'react-i18next';
import Template from 'shared/components/template/Template';
import ButtonNumber from 'shared/components/common/ButtonNumber';
import ButtonGradient, { useFooterStyles } from 'shared/components/common/ButtonGradient';
import { StyledHeader, useHeaderStyles } from 'shared/components/template/style';

import IconLeft from 'shared/components/icon/ArrowLeft';
import iconStar from 'assets/imgs/redeem/star-score.svg';
import iconHeart from 'assets/imgs/redeem/heart.png';
import imgBurger from 'assets/imgs/redeem/burger.svg';

const Header = () => {
  const headerStyles = useHeaderStyles();

  function onBack() {
    console.log('back');
  }

  return (
    <StyledHeader>
      <IconLeft className={headerStyles.left} onClick={onBack} />
      <span className={headerStyles.title}>McDonald&apos;s</span>
    </StyledHeader>
  );
};

const Footer = () => {
  const { t } = useTranslation();
  const classes = useFooterStyles();

  return (
    <ButtonGradient color="secondary" className={classes.button}>
      {t('RedeemPoints')}
    </ButtonGradient>
  );
};

const CardInformation = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Template header={<Header />} footer={<Footer />} className={classes.template}>
      <div className={classes.scoreItem}>
        <div className={classes.scoreElement}>
          <img src={iconStar} alt="Close" loading="lazy" />
          <span className={`${classes.scoreText} ${classes.scoreTextBold}`}>111</span>
        </div>
        <div className={classes.scoreElement}>
          <span className={classes.scoreNumber}>3000</span>
          <span className={classes.scoreText}>Text</span>
        </div>
      </div>

      <div className={classes.cardContainer}>
        <img src={imgBurger} alt="Burger" loading="lazy" className={classes.cardImage} />
        <div className={classes.cardInfo}>
          <div className={classes.cardTitleGroup}>
            <span className={classes.cardTitle}>
              McDonald’s ซื้อ 1 ชุด แถม 1 ชุด แมคฟิช หรือ ชีสเบอร์เกอร์ มูลค่า 175 บาท
            </span>
            <img src={iconHeart} alt="Heart" loading="lazy" className={classes.cardIcon} />
          </div>
          <div className={`${classes.cardTitle} ${classes.cardSubTitle}`}>
            ซื้อแฮมเบอร์เกอร์+เฟรนช์ฟรายส์+โค้กรีฟีล ชุดใหญ่ (L) หรือใหญ่ พิเศษ (XL) รับฟรีอีก 1
            ชิ้น
          </div>
          <span className={classes.cardDate}>01-30 มิ.ย. 64</span>
          <div className={classes.cardPointGroup}>
            <span dangerouslySetInnerHTML={{ __html: t('UseNumberPoints', { number: 111 }) }} />
            <ButtonNumber disabled />
          </div>
        </div>
      </div>

      <div className={classes.detailContainer}>
        <div className={classes.detailHeader}>{t('DetailsAndConditions')}</div>
        <div className={classes.detailGroup}>
          <div>
            <div className={classes.detailTitle}>{t('TermsOfUse')}</div>
            <ol className={classes.termContainer}>
              <li className={classes.detailItem}>{t('Redeem_Term1')}</li>
              <li className={classes.detailItem}>{t('Redeem_Term2')}</li>
              <li className={classes.detailItem}>{t('Redeem_Term3')}</li>
            </ol>
          </div>
          <div>
            <div className={classes.detailTitle}>{t('Details')}</div>
            <div className={classes.detailItem}>
              พิเศษ! ซื้อ 1 ชุด ฟรี 1 ชิ้น เสิร์ฟพร้อมเฟรนช์ฟรายส์ และ โค้กรีฟิล เริ่มต้นเพียงชุดละ
              189 บาท จากปกติเริ่มต้น 258 บาท ถึงสิ้นเดือนนี้เท่านั้น
              ชุดเบอร์เกอร์เนื้อที่ร่วมรายการ *เฉพาะชุดขนาดใหญ่ (L) และ ใหญ่พิเศษ (XL) เท่านั้น
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default CardInformation;
