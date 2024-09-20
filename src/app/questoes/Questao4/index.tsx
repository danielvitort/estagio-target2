import { Container } from "@/app/components/Container";

const Questao4 = () => {

    return (
        <section>
            <Container>
                <h1 className="text-2xl p-5 ml-5">Questão 4</h1>
                <p>Descubra a lógica e complete o próximo elemento:</p>
                <ul className="gap-3 flex flex-col justify-center">
                    <li className="flex items-center">a) 1, 3, 5, 7, <span className="bg-slate-800 text-sky-500 p-1 px-2 flex items-center rounded-md">9</span></li>
                    <li className="flex items-center">b) 2, 4, 8, 16, 32, 64, <span className="bg-slate-800 text-sky-500 p-1 px-2 flex items-center rounded-md">128</span></li>
                    <li className="flex items-center">c) 0, 1, 4, 9, 16, 25, 36, <span className="bg-slate-800 text-sky-500 p-1 px-2 flex items-center rounded-md">49</span></li>
                    <li className="flex items-center">d) 4, 16, 36, 64, <span className="bg-slate-800 text-sky-500 p-1 px-2 flex items-center rounded-md">100</span></li>
                    <li className="flex items-center">e) 1, 1, 2, 3, 5, 8, <span className="bg-slate-800 text-sky-500 p-1 px-2 flel items-center rounded-md">13</span></li>
                    <li className="flex items-center">f) 2,10, 12, 16, 17, 18, 19, <span className="bg-slate-800 text-sky-500 p-1 px-2 flex items-center rounded-md">200</span></li>
                </ul>

            </Container>
        </section>
    )
}

export default Questao4;