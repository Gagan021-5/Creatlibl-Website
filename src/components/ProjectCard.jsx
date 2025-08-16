

const ProjectCard = ({ title, description, image}) => {
  return (
    <div className="bg-gradient-to-tr from-sky-900 hover:scale-105 all delay-100 cursor-pointer ease-in-out to-black/80 rounded-xl shadow-lg p-4 w-80 hover:shadow-xl transition duration-300">
      <img src={image} alt={title} className="rounded-lg h-48 w-full object-cover mb-4" />
      <h3 className="text-xl  text-white/90 font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
     
    </div>
  );
};


export default ProjectCard;