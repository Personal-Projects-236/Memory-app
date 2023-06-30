import { Button } from "react-bootstrap";

import styles from "../../styles/components/atom/btn.module.css";

export const btn = (variant, title, clickHandler) => (
	<Button
		className={styles.btn}
		type="submit"
		variant={variant}
		onClick={clickHandler}
	>
		{title}
	</Button>
);
