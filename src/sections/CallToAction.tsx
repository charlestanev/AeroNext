import Image from "next/image";
import SVGIMG from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";


export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#d2dCff] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
          </p>
          <Image src={starImage}
            alt="Star Image"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
          />
          <Image src={springImage}
            alt="Spring Image"
            width={360}
            className="absolute -right-[330px] -top-[20px]"
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <SVGIMG className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
