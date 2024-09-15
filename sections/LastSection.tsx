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
        <section>
            <br />
            <br />
            <br />
            <div class="text-[#553410] gap-4 items-center justify-center text-center px-16 lg:px-32 mt-8">
                <strong class="text-3xl font-black">
                    Tem alguma dúvida?
                </strong>
                <div class="text-xl">
                    Abaixo listei as principais perguntas que recebo dos novos clientes.
                </div>
            </div>
            <div class="mx-9 justify-center grid grid-cols-2 lg:grid-cols-1 grid-rows-3 lg:gap-4">
                <div class="mx-8 my-4">
                    <strong>
                        Preciso da versão paga do Canva para usar?
                    </strong>
                    <div>
                        Não. Você pode usar, editar e salvar suas postagens pela versão gratuita.
                    </div>
                </div>
                <div class="mx-8 my-4">
                    <strong>
                        Posso usar pelo celular?
                    </strong>
                    <div>
                        Sim! Você pode utilizar tanto pelo celular quanto pelo computador ou tablet.
                    </div>
                </div>
                <div class="mx-8 my-4">
                    <strong>
                        Por quanto tempo terei acesso?
                    </strong>
                    <div>
                        Você terá acesso vitalício ao Pack.
                    </div>
                </div>
                <div class="mx-8 my-4">
                    <strong>
                        Como vou receber o acesso?
                    </strong>
                    <div>
                        Você vai receber um e-mail com acesso a nossa área de membros, onde todos os templates estarão disponíveis via link.
                    </div>
                </div>
                <div class="mx-8 my-4">
                    <strong>
                        Tem suporte para dúvidas?
                    </strong>
                    <div>
                        Claro! Se você tiver qualquer dúvida, poderá entrar em contato com o nosso suporte direto por e-mail ou WhatsApp.
                    </div>
                </div>
                <div class="mx-8 my-4">
                    <strong>
                        Recebo todos os modelos?
                    </strong>
                    <div>
                        Sim! Você vai receber acesso a todos os criativos e a outros bônus!
                    </div>
                </div>
            </div>
            <div class="mx-16 flex flex-col lg:flex-row">
                <div>
                    <div class="text-5xl">
                        Quem é a <br /><strong>Gabi do Marketing?</strong>
                    </div>
                    <div>
                        <div class="my-8">
                            Gabriela Borges Rodrigues é graduada em marketing e proprietária de duas empresas: Já Postei e Exdi.
                        </div>
                        <div class="my-8">
                            Durante a pandemia de 2020, ela assumiu a gestão de redes sociais de sua empresa, aprofundando-se em estratégias de conversão online.
                        </div>
                        <div class="my-8">
                            Gabriela vê o marketing como uma forma de fazer amigos e ajudar as pessoas a alcançarem seus objetivos.
                        </div>
                    </div>
                </div>
                <div class="m-8">
                </div>
                <img class="rounded-t-lg" src="gabi.png" alt="" />
            </div>
            <div class="mx-16 bg-[#553410] text-white font-black p-8 text-3xl text-center rounded-3xl">
                <div class="">
                    <div>
                        Tenha um perfil altamente profissional.
                        Encante seus seguidores e conquiste novos clientes todos os dias.
                    </div>
                    <div class="flex items-center gap-3">
                        {cta?.map((item) => (
                            <a
                                key={item?.id}
                                id={item?.id}
                                href={item?.href}
                                target={item?.href.includes("http") ? "_blank" : "_self"}
                                class={`font-bold text-accent btn btn-lg btn-secondary rounded-xl ${item.outline && "btn-outline"
                                    }`}
                            >
                                {item?.text}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}