import React, { Component } from "react";

type WithFetchProps<T> = {
  url: string;
};

type WithFetchState<T> = {
  data: T | null; 
};

function withFetchHoc<T>(WrappedComponent: React.ComponentType<{ data: T | null; }>) {
  
  return class extends Component<WithFetchProps<T>, WithFetchState<T>> {
    state: WithFetchState<T> = {
      data: null
    };

    componentDidMount() {
      this.fetchData();
    }

    fetchData = async () => {
         const { url } = this.props;       
        const response = await fetch(url);      
        const data = await response.json();
        this.setState({ data });      
    };

    render() {
      const { data } = this.state;
      return <WrappedComponent data={data}  />;
    }
  };
}

export default withFetchHoc;