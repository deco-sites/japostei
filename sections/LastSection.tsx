import { ImageWidget } from "apps/admin/widgets.ts";
import { CTA } from "site/sections/Welcome.tsx";

interface Props {
    /**
    * @description The description of name.
    */
    image: ImageWidget;
    cta?: CTA[];
}

export default function LastSection({ image, cta }: Props) {
    return (
        <section  style="overflow-x: hidden;">
            <div class="gap-4 items-center justify-center text-center px-16 lg:px-32 mt-8 font-sans">
                <strong class="text-3xl font-black">
                    Tem alguma dúvida?
                </strong>
                <div class="text-xl">
                    Abaixo listei as principais perguntas que recebo dos novos clientes.
                </div>
            </div>
            <div class="text-lg m-16 lg:mx-60 gap-2 justify-center grid grid-cols-2 grid-rows-3 text-lg">
                <div class="lg:mx-4 my-2">
                    <strong>
                        Preciso da versão paga do Canva para usar?
                    </strong>
                    <div>
                        Não. Você pode usar, editar e salvar suas postagens pela versão gratuita.
                    </div>
                </div>
                <div class="lg:mx-4 my-2">
                    <strong>
                        Posso usar pelo celular?
                    </strong>
                    <div>
                        Sim! Você pode utilizar tanto pelo celular quanto pelo computador ou tablet.
                    </div>
                </div>
                <div class="lg:mx-4 my-2">
                    <strong>
                        Como vou receber o acesso?
                    </strong>
                    <div>
                        Você vai receber um e-mail com acesso a nossa área de membros, onde todos os templates estarão disponíveis via link.
                    </div>
                </div>
                <div class="lg:mx-4 my-2">
                    <strong>
                        Tem suporte para dúvidas?
                    </strong>
                    <div>
                        Claro! Se você tiver qualquer dúvida, poderá entrar em contato com o nosso suporte direto por e-mail ou WhatsApp.
                    </div>
                </div>
                <div class="lg:mx-4 my-2">
                    <strong>
                        Recebo todos os modelos?
                    </strong>
                    <div>
                        Sim! Você vai receber acesso a todos os criativos e a outros bônus!
                    </div>
                </div>
                <div class="lg:mx-4 my-2">
                    <strong>
                        Por quanto tempo terei acesso?
                    </strong>
                    <div>
                        Você terá acesso vitalício ao Pack.
                    </div>
                </div>
            </div>
            <div class="flex flex-col lg:flex-row font-sans justify-evenly m-8">
                <div class="lg:w-[700px] flex">
                    <div class="flex flex-col justify-around text-2xl">
                    <div class="text-6xl mb-4">
                        Quem é a <br /><strong>Gabi do Marketing?</strong>
                    </div>
                        <div class="lg:text-3xl sm:m-4">
                            Gabriela Borges Rodrigues é graduada em marketing e proprietária de duas empresas: Já Postei e Exdi.
                        </div>
                        <div class="lg:text-3xl sm:m-4">
                            Durante a pandemia de 2020, ela assumiu a gestão de redes sociais de sua empresa, aprofundando-se em estratégias de conversão online.
                        </div>
                        <div class="lg:text-3xl sm:m-4">
                            Gabriela vê o marketing como uma forma de fazer amigos e ajudar as pessoas a alcançarem seus objetivos.
                        </div>
                    </div>
                </div>
                <div class="rounded-xl bg-[url('gabi.png')] bg-no-repeat lg:w-[500px] h-[700px] lg:m-4 sm:mt-4"></div>
            </div>
            <div class="bg-[#553410] text-white font-black lg:p-8 text-3xl text-center p-8">
                <div class="flex flex-col justify-center align-center lg:flex lg:flex-row lg:justify-evenly">
                    <div class="text-start md:p-4">
                        Tenha um perfil altamente profissional. <br /> Encante seus seguidores e conquiste novos <br /> clientes todos os dias.
                    </div>
                    <div class="flex items-center gap-3 lg:mx-4 mt-4">
                        {cta?.map((item) => (
                            <a
                                key={item?.id}
                                id={item?.id}
                                href={item?.href}
                                target={item?.href.includes("http") ? "_blank" : "_self"}
                                class={`text-2xl font-bold text-accent h-24 btn btn-lg btn-secondary rounded-xl ${item.outline && "btn-outline"
                                    } lg:text-5xl`}    
                            >
                                {item?.text}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center bg-[#1d2f06]">
                <div class="flex space-x-6 m-4">
                    <a href="https://wa.me/554891912797" class="w-12 h-12 bg-[url('whatsapp-brands-solid.svg')] bg-no-repeat"></a>
                    <a href="https://www.instagram.com/gabiportom1/" class="w-12 h-12 bg-[url('instagram-brands-solid.svg')] bg-no-repeat"></a>
                    <a href="https://www.linkedin.com/in/gabidomarketing/" class="w-12 h-12 bg-[url('linkedin-brands-solid.svg')] bg-no-repeat"></a>
                </div>
                <div class="bg-white h-[2px] w-[900px]"></div>
                <div class="text-white font-black text-xl m-4">
                    Todos os direitos reservados | Landing page canva 2024.
                </div>
            </div>
        </section>
    );
}