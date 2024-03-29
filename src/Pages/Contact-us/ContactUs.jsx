import {
    Button,
    Card,
    Input,
    Typography
} from "@material-tailwind/react";

const ContactUs = () => {
    return (<div className="flex flex-col justify-center items-center">
        <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Contact Us
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to send message.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3 ">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Type your message
          </Typography>
          <textarea placeholder="Your message" className="textarea textarea-bordered textarea-sm w-full " ></textarea>
        </div>
        <Button className="mt-6" fullWidth>
          Send
        </Button>
      </form>
    </Card>
    </div>
    );
};

export default ContactUs;