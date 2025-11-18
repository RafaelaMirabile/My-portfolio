import FloatingFlower from './floatingFlowers';
import AboutMe from '@/app/about/page';

export default function Hero() {
  return (
    <div className="relative w-full">
      <FloatingFlower src="/images/flower1bgt.png" top="9%" left="78%" alt="flower1" zIndex="20" />
      <FloatingFlower src="/images/flower2bgt.png" top="25%" left="76%" alt="flower2" zIndex="20" />
      <FloatingFlower src="/images/flower3bgt.png" top="17%" right="28%" alt="flower3" zIndex="20" />
      <FloatingFlower src="/images/flower4bgt.png" top="10%" right="75%" alt="flower4" zIndex="20" />
      <FloatingFlower src="/images/flower5bgt.png" bottom="80%" right="75%" alt="flower5" zIndex="20" />
      <FloatingFlower src="/images/flower4bgt.png" bottom="92%" right="28%" alt="flower3" zIndex="20"/>
      <section className="flex flex-col items-center justify-center border border-black bg-gray-100 px-8 py-12 lg:px-[8vw] md:py-24 w-full z-10">
        <div className="text-center">
          <h1 className="text-3xl">Hi, I'm Rafa.</h1>
          <p className="mt-6 text-3xl text-gray-800">CMS Editor & Web Developer</p>
        </div>
      </section>
      <div className="w-full z-10 border-black border-t-2">
        <AboutMe /> 
      </div>
    </div>
  )
}
