import Container from '../../../parts/Container';
import Heading from '../../../parts/Heading';
import Flex, { Column } from '../../../parts/Flex';
import CountDown from '../../../parts/CountDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player';
import * as Card from '../../../parts/Card';


const Section = () => {
  return (
    <>
      <Container full fullVertical>
        <ReactPlayer url="https://media.niftygateway.com/video/upload/v1622040138/Max/CamHicks/CAM_d8n2hz.mp4" width="100%" height="100%" loop={true} playing={true} />
      </Container>
      <Container full>
        <Flex>
          <CountDown header="Next Drop" targetDate={new Date(`Jan 1, ${new Date().getFullYear() + 1} 00:00:00`).getTime()} size="15px"></CountDown>
        </Flex>
      </Container>
      <Container>
        <Container small full>
          <Flex>
            <Column three>
              <Card.Wrapper>
                <Card.Header>
                  <Card.Heading>Card Header</Card.Heading>
                </Card.Header>
                <Card.Body>
                  <Card.Image src="https://media.niftygateway.com/image/upload/q_auto:good,w_500/v1588356480/Jon%20Burgerman/Anish_Kapoor_-_Cloud_Gate_i3hidp.png"></Card.Image>
                  <Card.FieldSet>
                    <Card.Options>
                      <Card.OptionsItem>
                        <Card.Icon big>
                          <FontAwesomeIcon icon={faCoffee} />
                        </Card.Icon>
                      </Card.OptionsItem>
                      <Card.OptionsItem>
                        <Card.Icon big>
                          <FontAwesomeIcon icon={faCoffee} />
                        </Card.Icon>
                      </Card.OptionsItem>
                      <Card.OptionsItem>
                        <Card.Icon big>
                          <FontAwesomeIcon icon={faCoffee} />
                        </Card.Icon>
                      </Card.OptionsItem>
                    </Card.Options>
                  </Card.FieldSet>
                  <Card.FieldSet>
                    <Card.Button type="button">Test Button</Card.Button>
                  </Card.FieldSet>
                </Card.Body>
              </Card.Wrapper>
            </Column>
            <Column three>
              <Card.Wrapper>
                <Card.Header>
                  <Card.Heading>Card Header</Card.Heading>
                </Card.Header>
                <Card.Body>
                  <Card.Image src="https://media.niftygateway.com/image/upload/q_auto:good,w_500/v1621606107/Max/CamHicks/Animorph_r0cszy.jpg"></Card.Image>
                  <Card.FieldSet>
                    <Card.Options>
                      <Card.OptionsItem>
                        <Card.Icon big>
                          <FontAwesomeIcon icon={faCoffee} />
                        </Card.Icon>
                      </Card.OptionsItem>
                      <Card.OptionsItem>
                        <Card.Icon big>
                          <FontAwesomeIcon icon={faCoffee} />
                        </Card.Icon>
                      </Card.OptionsItem>
                      <Card.OptionsItem>
                        <Card.Icon big>
                          <FontAwesomeIcon icon={faCoffee} />
                        </Card.Icon>
                      </Card.OptionsItem>
                    </Card.Options>
                  </Card.FieldSet>
                  <Card.FieldSet>
                    <Card.Button type="button">Test Button</Card.Button>
                  </Card.FieldSet>
                </Card.Body>
              </Card.Wrapper>
            </Column>
            <Column three>
              <Card.Wrapper>
                <Card.Header>
                  <Card.Heading>Card Header</Card.Heading>
                </Card.Header>
                <Card.Body>
                  <ReactPlayer url="https://media.niftygateway.com/video/upload/v1622040138/Max/CamHicks/CAM_d8n2hz.mp4" width="100%" height="100%" loop={true} playing={true} />
                  <Card.FieldSet>
                    <Card.Options>
                      <Card.OptionsItem>
                        <Card.Icon big>
                          <FontAwesomeIcon icon={faCoffee} />
                        </Card.Icon>
                      </Card.OptionsItem>
                      <Card.OptionsItem>
                        <Card.Icon big>
                          <FontAwesomeIcon icon={faCoffee} />
                        </Card.Icon>
                      </Card.OptionsItem>
                      <Card.OptionsItem>
                        <Card.Icon big>
                          <FontAwesomeIcon icon={faCoffee} />
                        </Card.Icon>
                      </Card.OptionsItem>
                    </Card.Options>
                  </Card.FieldSet>
                  <Card.FieldSet>
                    <Card.Button type="button">Test Button</Card.Button>
                  </Card.FieldSet>
                </Card.Body>
              </Card.Wrapper>
            </Column>
            <Column three>
              <Card.Wrapper>
                <Card.Header>
                  <Card.Heading>Card Header</Card.Heading>
                </Card.Header>
                <Card.Body>
                  <ReactPlayer url="https://media.niftygateway.com/video/upload/v1622040138/Max/CamHicks/CAM_d8n2hz.mp4" width="100%" height="100%" loop={true} playing={true} />
                  <Card.FieldSet>
                    <Card.Options>
                      <Card.OptionsItem>
                        <Card.Icon big>
                          <FontAwesomeIcon icon={faCoffee} />
                        </Card.Icon>
                      </Card.OptionsItem>
                      <Card.OptionsItem>
                        <Card.Icon big>
                          <FontAwesomeIcon icon={faCoffee} />
                        </Card.Icon>
                      </Card.OptionsItem>
                      <Card.OptionsItem>
                        <Card.Icon big>
                          <FontAwesomeIcon icon={faCoffee} />
                        </Card.Icon>
                      </Card.OptionsItem>
                    </Card.Options>
                  </Card.FieldSet>
                  <Card.FieldSet>
                    <Card.Button type="button">Test Button</Card.Button>
                  </Card.FieldSet>
                </Card.Body>
              </Card.Wrapper>
            </Column>
          </Flex>
        </Container>
      </Container>
    </>
  )
}

export default Section
