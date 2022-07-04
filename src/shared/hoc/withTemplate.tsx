import React from 'react';
import { IProps } from 'shared/components/template/Template';

export function withTemplate(WrappedComponent: any, type: IProps) {
  return class extends React.Component {
    constructor(props: any) {
      super(props);
    }

    render() {
      return <WrappedComponent {...this.props} {...type} />;
    }
  };
}
