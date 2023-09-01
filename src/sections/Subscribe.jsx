import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us">
      <h3 className="text-4xl font-bold font-palanquin leading-[68px] lg:max-w-md">
        Sign up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-center items-center max-sm:w-full">
          <Button label="Sign Up" iconURL={arrowRight} fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
