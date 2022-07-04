import React from 'react';
import { useStyles } from './style';

export interface IProps {
  // Components
  header?: React.ReactNode;
  main?: React.ReactNode;
  footer?: React.ReactNode;

  // Show section
  hideHeader?: boolean;
  hideFooterShadow?: boolean;
  hideFooter?: boolean;

  // Style
  headerHigh?: string;
  footerHigh?: string;
}

const Template = (props: IProps) => {
  const classes = useStyles();

  const headerStyle = {
    height: props.headerHigh || '52px'
  };

  const footerStyle = {
    height: props.footerHigh || '65px'
  };

  return (
    <div id="maai-template" className={classes.container}>
      {!props.hideHeader && (
        <header style={headerStyle} className={`${classes.header} ${classes.headerFooter}`}>
          <div>{props.header || 'Header'}</div>
        </header>
      )}
      <main className={classes.main}>{props.main || 'Main'}</main>
      {!props.hideFooter && (
        <footer
          style={footerStyle}
          className={`${classes.footer} ${classes.headerFooter} ${
            props.hideFooterShadow ? classes.boxShowNone : ''
          }`}>
          {props.footer || 'Footer'}
        </footer>
      )}
    </div>
  );
};

export default Template;
