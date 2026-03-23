function SkillCard({ icon, title, percent }) {
  return (
    <div className="skill-card bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
      <div className="relative mb-4 w-fit">
 <div className="absolute inset-0 rounded-full border-2 border-orange-200 animate-ping"></div>
      <div className="text-orange-500 mb-4">
        {icon}
      </div>
      </div>

      <h4 className="font-semibold mb-2">{title}</h4>

      <p className="text-gray-500 text-sm">
        Skill proficiency
      </p>

      <div className="mt-4 text-lg font-bold text-orange-500">
        {percent}
      </div>

    </div>
  );
}

export default SkillCard;