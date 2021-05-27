import Carousel from 'styled-components-carousel';
import Container from '../../../parts/Container';
import Flex, { Column } from '../../../parts/Flex';
import ReactPlayer from 'react-player';
import Heading from '../../../parts/Heading';
import * as Card from '../../../parts/Card';

const Section = () => {
  return (
    <>
      <Container full fullVertical>
        <Flex justifyCenter alignCenter>
          <Carousel
            center
            infinite
            showArrows
            showIndicator
            swipeable
            slidesToShow={3}
            breakpoints={[
              {
                size: 200,
                settings: {
                  slidesToShow: 1,
                  showArrows: true,
                  infinite: true,
                  showIndicator: true
                }
              },
              {
                size: 200,
                settings: {
                  slidesToShow: 2,
                  showArrows: true,
                  infinite: true
                }
              },
              {
                size: 200,
                settings: {
                  slidesToShow: 3,
                  showArrows: true,
                  infinite: true
                }
              }
            ]}>
            <div>
              <Card.Wrapper width="100%">
                <Card.Header>
                  <Card.Heading>Collection 1</Card.Heading>
                </Card.Header>
                <Card.Body>
                  <ReactPlayer url="/videos/test-video-1.mp4" width="100%" height="500px" loop={true} playing={true} />
                  <Card.FieldSet>
                  </Card.FieldSet>
                </Card.Body>
              </Card.Wrapper>
            </div>
            <div>
              <Card.Wrapper width="100%">
                <Card.Header>
                  <Card.Heading>Collection 2</Card.Heading>
                </Card.Header>
                <Card.Body>
                  <Card.Image src="/images/test-image-1.jpg" />
                  <Card.FieldSet>
                  </Card.FieldSet>
                </Card.Body>
              </Card.Wrapper>
            </div>
            <div>
              <Card.Wrapper width="100%">
                <Card.Header>
                  <Card.Heading>Collection 3</Card.Heading>
                </Card.Header>
                <Card.Body>
                  <ReactPlayer url="/videos/test-video-2.mp4" width="100%" height="500px" loop={true} playing={true} />
                  <Card.FieldSet>
                  </Card.FieldSet>
                </Card.Body>
              </Card.Wrapper>
            </div>
          </Carousel>
        </Flex>
      </Container>
    </>
  )
}

export default Section
