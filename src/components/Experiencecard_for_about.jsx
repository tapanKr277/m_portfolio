// const Experiencecard_for_about = ({ job }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-3 hover:scale-[1.03] border border-gray-100 overflow-hidden">
//       <div className="p-5">
//         <h3 className="text-xl font-bold mb-1 text-black">{job.title}</h3>
//         <p className="text-sm font-medium text-gray-600">{job.company}</p>
//         <div className="text-sm text-gray-500 mb-2">
//           {job.start} – {job.end} • {job.location}
//         </div>
//         <p className="text-base text-gray-800">{job.discription}</p>
//       </div>
//     </div>
//   );
// };

// export default Experiencecard_for_about;

const Experiencecard_for_about = ({ job }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-3 hover:scale-[1.03] border border-gray-100 overflow-hidden">
      <div className="p-5">
        <h2 className="text-xl font-semibold">{job.title}</h2>
        <p className=" text-gray-600">
          {job.company} • {job.location}
        </p>
        <p className=" text-gray-500">
          {job.start} – {job.end}
        </p>
        <ul className="mt-4 list-disc list-inside space-y-1 text-gray-800 text-sm">
          {job.discription.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Experiencecard_for_about;
