const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Git & GitHub']

function Skills() {
    return (
        <section id="skills" className='max-w-3xl mx-auto px-6 py-12 text-center"'>
            <h2 className="text-3xl font-bold">Skills</h2>
        <div className=" flex flex-wrap justify-center gap-3 mt-6">
            {skills.map((skill, index) => (
                <span key={skill} className="px-4 py-2 rounded-full bf-purple-900 text-white">
                    {skill}
                    </span>

                
            ))}
        </div>
        </section>
    )
}
export default Skills