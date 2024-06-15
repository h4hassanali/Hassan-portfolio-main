import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import SectionWrapper from "./SectionWrapper";
interface Inputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function Contact() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:akdevjs@gmail?subject=${formData.subject}&body=Hi, My name is ${formData.name}. ${formData.message}. \n(${formData.email})`;
  };
  return (
    <SectionWrapper heading="Contact">
      <div className="flex flex-col pt-2 sm:pt-10 space-y-2 sm:space-y-10">
        <h4 className="text-lg sm:text-2xl md:text-4xl font-semibold text-center sm:whitespace-nowrap whitespace-break-spaces">
          I have got just what you need.{" \n"}
          <span className="underline decoration-[#F7AB0A]/50">Lets Talk</span>
        </h4>

        <div className="space-y-2 sm:space-y-5 md:space-y-10">
          <div className="flex item-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse " />
            <p>+92 341 4307524</p>
          </div>
          <div className="flex item-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse " />
            <p>akdevjs@outlook.com</p>
          </div>
          <div className="flex item-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse " />
            <p>Kahuta, Rwp, Pakistan</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-full sm:w-fit sm:px-0 px-3 mx-auto"
        >
          <div className="flex flex-col  sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
            <input
              {...register("name")}
              placeholder="Name"
              className="contact-input"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contact-input"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="subject"
            className="contact-input"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contact-input"
          />
          <button
            type="submit"
            className="bg-[#f7ab0a] py-2 sm:py-5 sm:px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
}

export default Contact;
