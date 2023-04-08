import styles from './styles.module.scss';

type Props = {
  title: string;
  description: string;
} & Omit<JSX.IntrinsicElements['a'], 'children'>;

export const Card: React.FC<Props> = ({ title, description, ...props }) => (
  <a {...props} className={styles.card}>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.description}>{description}</p>
  </a>
);
