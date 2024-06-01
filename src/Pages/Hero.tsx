import styled from "styled-components";
import bg from "../Assets/conferenceimage2.jpg"
const Hero = () => {
  return (
    <div>
        <MainBody>
            <MainBodyWrapp>
                <Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. In exercitationem neque ad expedita dolorum officia, debitis labore corrupti laudantium, incidunt perspiciatis voluptatem minus illum ipsa adipisci quod impedit quam optio.
                </Text>
            </MainBodyWrapp>
        </MainBody>
    </div>
  )
}

export default Hero

const Text = styled.div`
font-size: 50px;
font-weight: bold;

`;
const MainBodyWrapp = styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
const MainBody = styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-image: url(${bg});
background-size: cover;

/* ::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
} */
`;