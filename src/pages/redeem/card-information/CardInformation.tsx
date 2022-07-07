import React from 'react';
import Template from 'containers/template/Template';
import IconClose from 'shared/components/icon/Close';
import { useStyles } from './style';
import { StyledHeader, useHeaderStyles } from 'containers/template/style';
import { useTranslation } from 'react-i18next';
import imgCardInfo from 'assets/imgs/redeem/card-maai.svg';
import imgNoPoints from 'assets/imgs/redeem/no-points.svg';

const Header = () => {
  const { t } = useTranslation();
  const headerStyles = useHeaderStyles();

  function onClose() {
    console.log('close');
  }

  return (
    <StyledHeader>
      <span className={headerStyles.title}>{t('CardInfo')}</span>
      <IconClose className={headerStyles.right} onClick={onClose} />
    </StyledHeader>
  );
};

const CardInformation = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  const items = [
    {
      date: '01/01/2022',
      number: '100,000'
    },
    {
      date: '02/01/2022',
      number: '100,000'
    },
    {
      date: '03/01/2022',
      number: '100,000'
    }
  ];

  return (
    <Template header={<Header />} className={classes.template}>
      <div className={classes.cardContainer}>
        <img src={imgCardInfo} alt="Card MAAI" loading="lazy" className={classes.cardImage} />
        <div className={classes.cardMaai}>
          <span className={classes.maaiText}>Maai point</span>
          <span className={classes.maaiNum}>100,000</span>
        </div>
        <div className={classes.cardInfo}>
          <span className={`${classes.infoNum} ${classes.infoText}`}>Maai point</span>
          <span className={classes.infoNum}>100,000</span>
        </div>
      </div>

      <div className={classes.expireContainer}>
        <div className={classes.expire}>
          <span className={classes.expireText}>{t('ExpirationDate')}</span>
          <span className={classes.expireText}>{t('Score')}</span>
        </div>

        {items.length ? (
          items.map((item) => {
            return (
              <div className={`${classes.expire} ${classes.expireItem}`} key={item.date}>
                <span className={classes.expireItemText}>{item.date}</span>
                <span className={classes.expireItemNum}>{item.number}</span>
              </div>
            );
          })
        ) : (
          <div className={classes.noPointsContainer}>
            <div className={classes.noPoints}>
              <img src={imgNoPoints} alt="No points yet" loading="lazy" />
              <span className={classes.noPointsText}>{t('NoPointsYet')}</span>
            </div>
          </div>
        )}
      </div>
    </Template>
  );
};

export default CardInformation;
