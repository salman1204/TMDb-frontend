import styles from './youtubeEmbed.module.css'
interface Props {
  embedId: string
}
const YoutubeEmbed: React.FC<Props> = ({ embedId }) => (
  <div className={styles.video__responsive}>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
)

export default YoutubeEmbed
