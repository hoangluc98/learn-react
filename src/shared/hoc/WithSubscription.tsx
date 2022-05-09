import React from 'react';

type SubProps = {
  children: React.ReactNode;
};

function withSubscription<T>(WrappedComponent: React.ComponentType<T>) {
  return class WithSubscription extends React.Component {
    constructor(props: SubProps) {
      super(props);

      this.state = {
        data: 'Ahihi'
      };
    }

    render() {
      return <WrappedComponent {...(this.props as T)} />;
    }
  };
}

export default withSubscription;
