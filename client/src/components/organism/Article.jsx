import useInfiniteScroll from "../../hooks/useInfiniteScroll";

const Article = () => {
	const data = useInfiniteScroll("/card");

	if (data.length == 0) {
		return <h1>Loading...</h1>;
	}

	console.log("data", data);

	return (
		<>
			<ul className="list-group-ul">
				{data.map(({ id, title }) => (
					<li
						className="list-group-li"
						style={{ marginBottom: "80px" }}
						key={id}
					>
						<a href="article.url" target="_blank">
							{title}
						</a>
					</li>
				))}
			</ul>
		</>
	);
};

export default Article;
