import { Button } from "react-bootstrap";

import styles from "../../styles/components/atom/btn.module.css";

export const btn = (variant, title) => (
	<Button className={styles.btn} type="submit" variant={variant}>
		{title}
	</Button>
);
