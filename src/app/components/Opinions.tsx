
import Container from "./Container";
import OpinionSlider from "./OpinionSlider";
import MainTiltle from "./ui/MainTiltle";


const Opinions = () => {
  return (
    <Container className="sec-padding">
      <MainTiltle className="text-center">
        آراء <span>المتسابقين</span>
      </MainTiltle>
      <OpinionSlider />

    </Container>
  );
};

export default Opinions;
