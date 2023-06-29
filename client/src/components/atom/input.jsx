import styles from "../../styles/components/atom/input.module.css";

export const input = (register, item, type) => (
	<input
		type={type}
		className={styles.input}
		placeholder={item}
		{...register(item, { required: true })}
	/>
);
