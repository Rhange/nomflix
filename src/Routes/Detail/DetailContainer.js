import React from "react";
import DetailContainer from "./DetailContainer";

export default class extends React.Component {
  state = {
    result: null,
    loading: true,
    error: null
  };

  render() {
    const { result, loading, error } = this.state;
    return <DetailContainer result={result} loading={loading} error={error} />;
  }
}
