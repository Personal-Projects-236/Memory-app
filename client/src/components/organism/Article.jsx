import useInfiniteScroll from "../../hooks/useInfiniteScroll";

const Article = () => {
	const data = useInfiniteScroll("/card");

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
