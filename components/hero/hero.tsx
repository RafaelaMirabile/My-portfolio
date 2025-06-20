import FloatingFlower from './floatingFlowers'
import LayeredButtonGetInTouch from '../shared/LayerdButton';

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center border border-black-500 bg-gray-100 h-[153px] px-8 py-40 lg:px-[8vw] md:py-[12rem]">
      <FloatingFlower src="/images/flower1bgt.png" top="14%" left="78%" alt="flower1"/>
      <FloatingFlower src="/images/flower2bgt.png" top="45%" left="76%" alt="flower2"/>
      <FloatingFlower src="/images/flower3bgt.png" top="47%" right="28%" alt="flower3" />
      <FloatingFlower src="/images/flower4bgt.png" bottom="2%" right="75%" alt="flower4"/>
      <FloatingFlower src="/images/flower5bgt.png" bottom="50%" right="75%" alt="flower5"/>
      <FloatingFlower src="/images/flower4bgt.png" bottom="75%" right="28%" alt="flower3" />

      <div className="z-10 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">Welcome to my floral universe.</h1>
        <p className="mt-4 text-lg text-gray-700">Flowers flowers flowers.</p>
        <LayeredButtonGetInTouch/>
      </div>
    </section>
  );
}
