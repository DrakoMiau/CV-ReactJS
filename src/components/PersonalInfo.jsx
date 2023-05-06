function PersonalInfo() {
    return (
        <div className="border-2 border-slate-700 w-1/3 rounded-2xl shadow-gray-900 shadow-sm ml-5 mt-4 h-5/6 float-left">
            <div className="object-top flex justify-center items-center">
                <img src="/src/components/Todoroki_Kun.jpg" className="rounded-full mb-6 w-52 "></img>
            </div>
            <section>
                <h1 className="font-bold font-serif mb-4 text-xl">About me</h1>
                <p className="text-sm">
                    I&apos;m a Computer Science student at Universidad Nacional
                    de Colombia, I&apos;m a curious person who is always finding
                    new knowledge and acquiring new skills.
                </p>
            </section>
            <section className="mt-10">
                <h1 className="text-xl">Languages</h1>
                <ul>
                    <li>Spanish(target language)</li>
                    <li>English B2</li>
                    <li>French A1</li>
                </ul>
            </section>
        </div>
    );
}

export default PersonalInfo;
