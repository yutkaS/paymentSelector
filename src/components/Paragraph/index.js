import './index.css'

export const Paragraph = ({text, styles}) => <h5 className={'paragraph'} style={styles}>{text}</h5>

Paragraph.defaultProps = {
    text: '',
    styles:{},
}