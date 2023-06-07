export const alert = (msg, status) => (
	<>
		{status === 200 ? (
			<div className="alert alert-primary" role="alert">
				{msg}
			</div>
		) : (
			<div className="alert alert-danger" role="alert">
				{msg}
			</div>
		)}
	</>
);
