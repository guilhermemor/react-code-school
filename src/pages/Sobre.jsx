import Cabeca from "../Cabeca"
import Rodape from "../Rodape"

function Sobre(){
    return(
        <div className="site">
            <Cabeca/>
            <div className="conteudosobre">
                <div className="conts">
                    <div className="txts">
                        <h2>Code.School</h2>
                        <p className="ps">Bem-vindo à nossa empresa de ensino de lógica de programação! Estamos felizes em ser o seu parceiro confiável quando se trata de suprir todas as suas necessidades relacionadas à tecnologia e programação. Com o compromisso de oferecer um ensino de qualidade e satisfazer os nossos alunos, estamos aqui para ajudá-lo a encontrar soluções que atendam às suas demandas na área da tecnologia. Desde a nossa fundação, nos dedicamos a proporcionar serviços excepcionais aos nossos alunos. Nossa equipe é formada por profissionais apaixonados e especialistas em programação, sempre prontos para compartilhar conhecimento e orientá-lo para que você faça as melhores escolhas. Se você está procurando cursos de programação, treinamentos, tutoriais ou qualquer outro recurso relacionado à lógica de programação, você está no lugar certo. Acreditamos que a lógica de programação tem o poder de transformar vidas, impulsionar carreiras e promover o desenvolvimento pessoal e profissional. É por isso que nos esforçamos para fornecer uma ampla variedade de cursos, abrangendo as últimas tecnologias e metodologias do mercado. Mantemos um currículo diversificado para garantir que você encontre exatamente o que procura, independentemente de ser um entusiasta da programação, estudante em busca de aprendizado ou profissional buscando atualização de habilidades..</p>
                    </div>
                    <div className="imgs">
                        <img src="https://www.alura.com.br/artigos/assets/hello-world-em-varias-linguagens/imagem1.gif" alt="" />
                    </div>   
                </div>

                <div className="conts2">
                    <div className="imgs">
                        <img src="https://media.giphy.com/media/SWoSkN6DxTszqIKEqv/giphy.gif?cid=ecf05e4724r849cemoqqiqbe2s63q4nr0cfncd94l5usl1ap&rid=giphy.gif&ct=g" alt="" />
                    </div>   
                    <div className="txts2">
                        <h2>O que mais?</h2>
                        <p className="ps">Além disso, acreditamos que a excelência no atendimento ao cliente é essencial. Nossa equipe está sempre pronta para ajudar, seja respondendo a perguntas, fornecendo orientação técnica ou auxiliando com qualquer problema que você possa enfrentar. Nosso objetivo é tornar a sua experiência de compra o mais fácil e agradável possível.

Também oferecemos serviços de assistência técnica especializada, garantindo que você possa contar com nossa ajuda mesmo após a compra. Nossos técnicos altamente qualificados estão prontos para lidar com reparos, upgrades, configurações e qualquer outra necessidade que você possa ter. Queremos que você tenha tranquilidade sabendo que pode contar conosco para manter seus dispositivos funcionando perfeitamente.

Na nossa loja de informática, valorizamos a honestidade, a transparência e a integridade. Estamos comprometidos em fornecer informações precisas e precisas sobre nossos produtos e serviços, para que você possa tomar decisões informadas. Acreditamos que uma relação de confiança com nossos clientes é fundamental para o sucesso mútuo.

Em resumo, estamos aqui para fornecer a você uma experiência de compra de informática excepcional, combinada com um serviço de alta qualidade e suporte técnico confiável. Seja você um entusiasta, estudante ou profissional, estamos prontos para ajudá-lo a encontrar as melhores soluções tecnológicas para suas necessidades.

Visite nossa loja hoje mesmo e descubra o mundo emocionante da tecnologia! Estamos ansiosos para atendê-lo e ser a sua loja de informática de confiança.</p>
                    </div>
                </div>
            </div>
            <Rodape/>
        </div>
    )
}

export default Sobre