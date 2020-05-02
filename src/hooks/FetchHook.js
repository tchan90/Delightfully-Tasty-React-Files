import { useState, useEffect } from "react";
import axios from "axios";

const FetchHook = (url, options) => {
	const [data, setData] = useState(null);
	const [noPost, setNoPost] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(async () => {
		setIsLoading(true);
		axios
			.get(url)
			.then((res) => {
				if (!res.data.length) {
					setNoPost(true);
					setIsLoading(false);
				} else {
					setData({ res: data });
					setIsLoading(false);
					setNoPost(false);
					setCurrentPage(1);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, [url]);
	return { data, noPost, isLoading, currentPage };
};
export default FetchHook;

// let { catId } = useParams();
// 	const res = FetchHook(
// 		`https://www.delightfullytastymelb.com/wp-json/wp/v2/posts?per_page=8&categories=${catId}`
// 	);
// 	if (!res.data) {
// 		return <div>Loading...</div>;
// 	}
// 	const posts = res.data.data;
// 	console.log(posts);
