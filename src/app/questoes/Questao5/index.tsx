import { Container } from "@/app/components/Container";

const Questao5 = () => {


    return (
        <section className="">
            <Container>
                <h1 className="text-2xl p-5 ml-5">Questão 5</h1>
                <p>Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?</p>

                <div className="bg-slate-800  p-4 flex flex-col items-center rounded-md my-5">
                    <h2 className="my-2 text-xl">Solução da questão</h2>
                    <div className="text-sky-500">
                        <p className="my-3">Primeira ida aos interruptores:</p>
                        <ul className="list-disc ml-6">
                            <li>Ligue o interruptor 1 e deixe-o ligado por cerca de 10 minutos.</li>
                            <li>Depois, desligue o interruptor 1 e ligue o interruptor 2.</li>
                            <li>Deixe o interruptor 2 ligado e mantenha o interruptor 3 desligado.</li>
                        </ul>
                        <p className="my-3">Primeira ida à sala das lâmpadas:</p>
                        <li className="list-disc ml-2">Vá até a sala onde as lâmpadas estão.</li>
                        <p>Agora, observe as lâmpadas:</p>
                        <ul className="list-disc ml-6">
                            <li>A lâmpada que está ligada corresponde ao interruptor 2 (porque você deixou esse interruptor ligado).</li>
                            <li>A lâmpada que está desligada, mas quente corresponde ao interruptor 1 (porque estava ligada por 10 minutos antes de você desligá-la).</li>
                            <li>A lâmpada que está desligada e fria corresponde ao interruptor 3.</li>
                        </ul>
                        Assim, você pode identificar qual interruptor controla cada lâmpada com apenas duas idas.
                    </div>
                </div>
            </Container>
        </section >
    )
}

export default Questao5;