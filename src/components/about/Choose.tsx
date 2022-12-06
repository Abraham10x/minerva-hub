import { FC } from "react";
import Image from "next/image";
import { AiFillDatabase } from "react-icons/ai";
import { MdComputer } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";

const BenefictsData = [
  {
    image: (
      <AiFillDatabase size={40} color="#4F46BA" className="mx-auto my-auto" />
    ),
    header: "Database Management",
    body: `
      We design and manage database and other backend services 
      to our clients.
    `,
  },
  {
    image: <MdComputer color="#4F46BA" size={40} className="mx-auto my-auto" />,
    header: "Software Development",
    body: `
      We help digitalize businesses by render web development, 
      mobile app development, software tools development, 
      API development.`,
  },
  {
    image: <GiTeacher size={40} color="#4F46BA" className="mx-auto my-auto" />,
    header: "I.T Training",
    body: `
      We provide I.T training (virtual and in-person) to both corporate 
      organizations and individuals based on their needs.`,
  },
  {
    image: (
      <SiGoogleclassroom
        size={40}
        color="#4F46BA"
        className="mx-auto my-auto"
      />
    ),
    header: "Coding Bootcamps",
    body: `
      We provide coding bootcamps to corporate organizations, 
      schools and individuals for all age brackets.`,
  },
];

const Choose: FC = () => {
  return (
    <div className="container sm:px-10 2xl:px-0 pt-8">
      <div className="relative py-16 flex flex-col items-center bg-[#F3F7FA] m-auto rounded-lg">
        <Image
          className="absolute left-9 top-[-30px]"
          alt="logo"
          src="/img/about/46.svg"
          width={100}
          height={100}
        />
        <span className="font-bold text-[#3734A9] text-lg">WHY MINERVAHUB</span>
        <h2 className="mt-3 text-5xl font-bold">Why Choose Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 lg:px-20 pt-20">
          {BenefictsData.map((data, index) => (
            <div
              data-aos="flip-down"
              className="flex flex-row bg-white py-10 px-6 rounded-lg"
              key={index}
            >
              <div className="w-32 h-14 mr-6  flex rounded-full bg-[#F7ECFD]">
                {data.image}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{data.header}</h3>
                <span className="text-lg text-[#757095]">{data.body}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Choose;
