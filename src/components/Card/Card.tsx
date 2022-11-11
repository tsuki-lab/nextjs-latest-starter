import Styles from './card.module.scss'

type Props = {
  title: string
  description: string
} & Omit<JSX.IntrinsicElements['a'], 'children'>

export const Card: React.FC<Props> = ({ title, description, ...props }) => (
  <a {...props} className={Styles.card}>
    <h2 className={Styles.title}>{title}</h2>
    <p className={Styles.description}>{description}</p>
  </a>
)
