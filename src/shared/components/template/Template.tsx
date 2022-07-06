import React from 'react';
import { useStyles } from './style';

export interface IProps {
  // Components
  header?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;

  // Show section
  hideFooterShadow?: boolean;

  // Style
  headerHigh?: string;
  className?: string;
}

const Template = (props: IProps) => {
  const classes = useStyles();

  const headerStyle = {
    height: props.headerHigh || '52px'
  };

  return (
    <div id="maai-template" className={`${classes.container} ${props.className}`}>
      {props.header && (
        <header style={headerStyle} className={`${classes.header} ${classes.headerFooter}`}>
          {props.header}
        </header>
      )}
      <main className={classes.main}>{props.children}</main>
      {props.footer && (
        <footer
          className={`${classes.footer} ${classes.headerFooter} ${
            props.hideFooterShadow ? classes.boxShowNone : ''
          }`}>
          {props.footer}
        </footer>
      )}
    </div>
  );
};

export default Template;
