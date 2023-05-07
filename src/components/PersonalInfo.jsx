function PersonalInfo() {
    return (
        <div className="w-1/3 rounded-l-2xl shadow-gray-900 h-full float-left flex flex-col bg-cyan-900">
            <div className="object-top flex justify-center items-center mt-5">
                <img
                    src="src\assets\Me.jpeg"
                    className="rounded-full mb-6 w-52 "
                ></img>
            </div>
            <div className="bg-slate-800 flex-grow rounded-bl-xl text-slate-200">
                <section>
                    <h1 className="font-bold font-serif mb-4 ml-2 mt-5 text-xl">
                        About me
                    </h1>
                    <p className="text-sm ml-3 mr-1">
                        I&apos;m a Computer Science student at Universidad
                        Nacional de Colombia, I&apos;m a curious person who is
                        always finding new knowledge and acquiring new skills.
                        <br />
                        I am a good co-worker and leader when the situation
                        requires, concerned to be up to date with all
                        responsabilities.
                        <br />
                    </p>
                </section>
                <section className="mt-10">
                    <h1 className="font-bold font-serif mb-4 ml-2 mt-5 text-xl">
                        Languages
                    </h1>
                    <ul className="text-sm ml-3 mr-1">
                        <li>Spanish(target language)</li>
                        <li>English B2</li>
                        <li>French A1</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default PersonalInfo;
