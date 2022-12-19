import classNames from 'classnames/bind'

import Button from './Button'
import Container from './Container'
import styles from './Showcase.module.scss'
import Heading from './Heading'
import Paragraph from './Paragraph'

let cx = classNames.bind(styles);

const Showcase = ({
    backgroundImage='/images/dishes.jpeg',
    cta,
    description,
    halfHeight,
    title,
    }) => {
        let showcaseClasses = cx({
            showcase: true,
            'half-height': halfHeight
        });
    return <section
    className={styles.showcase}
    style={{backgroundImage: `url(${backgroundImage})`}}
    >
        <Container>
            {title && 
                <Heading level="2" marginBottom='1'>
                    {title}
                </Heading>
            }
            {description &&
                <Paragraph marginBottom='1'>
                    {description}
                </Paragraph>
            }
            {cta &&
            <Button label={cta}/>
            }   
        </Container>
    </section>
}
export default Showcase