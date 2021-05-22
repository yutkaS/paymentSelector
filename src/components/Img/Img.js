export const Img = ({src, styles}) => (
    <img alt={'10'} style={styles} src={'./images/arrow.png'}/>
)
Img.defaultProps = {
    src:'',
    styles:{width:'15px', height:'15px', position:'relative', },
}