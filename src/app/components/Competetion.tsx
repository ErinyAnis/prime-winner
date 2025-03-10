import Container from "./Container";
import CountdownTimer from "./ui/CountdownTimer";
import CounterCard from "./ui/CounterCard";
import MainTiltle from "./ui/MainTiltle";

const Competetion = () => {
  return (
    <Container className="sec-padding">
      <MainTiltle className="text-center">
        تبدأ المسابقة بعد
      </MainTiltle>
      <div className="grid grid-cols-4">
        <CountdownTimer title="يـــوم" />
        <CountdownTimer title="ساعة" />
        <CountdownTimer title="دقيقة" />
        <CountdownTimer title="ثانيـــة" />
      </div>

      <div className="grid md:grid-cols-4 mt-4 md:gap-3 gap-2">
        <CounterCard num="$20,000" title="مجموع الجوائز" />
        <CounterCard num="$4,000" title="المركز الأول" />
        <CounterCard num="36" title="عدد الرابحين" />
        <CounterCard num="10" title="أيام تداول" />
      </div>
    </Container>
  );
};

export default Competetion;
