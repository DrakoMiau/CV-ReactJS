function PersonalInfo() {
    return (
        <div className="border-2 border-slate-700 w-1/3 rounded-2xl shadow-gray-900 shadow-sm ml-5 mt-4 h-5/6 float-left">
            <div className="object-top">
                <img src="/src/components/Todoroki_Kun.jpg" className="rounded-full mb-6 w-72"></img>
            </div>
            <section>
                <h1 className="font-bold font-serif mb-4">About me</h1>
                <p className="font-medium from-neutral-950">
                    I&apos;m a Computer Science student at Universidad Nacional
                    de Colombia, I&apos;m a curious person who is always finding
                    new knowledge and acquiring new skills.
                </p>
            </section>
            <section className="mt-10">
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
