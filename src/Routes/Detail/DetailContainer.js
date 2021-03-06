import React from "react";
import DetailPresenter from "./DetailPresenter";
import { tvApi, movieApi } from "api";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
	constructor(props) {
		super(props);
		const {
			location: { pathname },
		} = props;
		this.state = {
			result: null,
			loading: true,
			error: null,
			isMovie: pathname.includes("/movie/"),
		};
	}

	async componentDidMount() {
		const {
			match: {
				params: { id },
			},
			history: { push },
		} = this.props;

		const { isMovie } = this.state;

		const parsedId = parseInt(id);
		if (isNaN(parsedId)) {
			return push("/");
		}

		let result = null;
		try {
			if (isMovie) {
				({ data: result } = await movieApi.movieDetail(parsedId));
			} else {
				({ data: result } = await tvApi.showDetail(parsedId));
			}
			console.log(result);
		} catch {
			this.setState({
				error: "Can't find anything.",
			});
		} finally {
			this.setState({
				loading: false,
				result,
			});
		}
	}

	render() {
		console.log(this.state);
		const { result, loading, error } = this.state;
		return <DetailPresenter result={result} loading={loading} error={error} />;
	}
}
