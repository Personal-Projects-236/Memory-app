import { Button } from "react-bootstrap";

export const btn = (variant, title) => (
	<Button type="submit" variant={variant}>
		{title}
	</Button>
);
