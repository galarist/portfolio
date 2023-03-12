import TypeAnimation from 'react-type-animation';
export default function About () {
    return (
        <>
            <article>
                <div className="container__text">
                    <div>
                        <div style={{ width: '100%' }} >
                        <TypeAnimation
                        cursor={true}
                        sequence={['Hi 👋! I am Cristovao aka Chris ...', 1500, 'Web Developer & Designer', 3000]}
                        wrapper="h1"
                        repeat={Infinity}
                        />
                        </div>
                    </div>
                </div>
                <div className="container__animation">
                    <div className="shape"></div>
                </div>
                <div className="scroll__down"></div>
            </article>
            <article>
                <header>
                    More about me
                </header>
                <p>
                    I enjoy designing websites, applications and everything that is front-end. Minimalism also inspires me.
                    A nice cup of tea always helps me keep in focus 🍵
                </p>
                <p>
                    During my studies I have encountered hardships especially in 2021 and 2022. Thanks to my problem solving skills,
                    I have quickly carried through myself those situations and managed to accomplish greater things.
                </p>
                <p>
                    In my free time, I love working on my hobby porjects that usually involves front-end development but, I am not afraid of making 
                    full-stack projects as I am willing to be challenged. Additionally, I revel in the art of Photography.
                </p>
            </article>
        </>
    )
}