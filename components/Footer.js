import Container from "./Container"
import Paragraph from "./Paragraph"
import styles from './footer.module.scss'

const Footer = () => {
    return <footer className={styles.footer}>
        <Container>
            <Paragraph>
                Copyright 2020-23, Syracuse Restaurants.
            </Paragraph>
        </Container>
    </footer>
}

export default Footer