import { CTA } from "site/sections/Welcome.tsx";

interface Props {
    cta?: CTA[];
}

export default function TeenSection({ cta }: Props) {
    return (
        <div>
            <br />
            <section class="gap-4 items-center justify-center px-8 lg:px-32">
                <div class="bg-[#7d6c57] text-white font-black p-8 lg:mx-72 rounded-3xl flex flex-col justify-center items-center">
                    <strong class="text-2xl">
                        Tenha tudo que você precisa em
                        um só lugar!
                    </strong>
                    <strong class="py-4 text-xl">
                        Veja tudo que você vai receber:
                    </strong>
                    <div class="text-2xl m-4 text-start list-image-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNCAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjMzhiZGY4Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy42ODUuMTUzYS43NTIuNzUyIDAgMCAxIC4xNDMgMS4wNTJsLTggMTAuNWEuNzUuNzUgMCAwIDEtMS4xMjcuMDc1bC00LjUtNC41YS43NS43NSAwIDAgMSAxLjA2LTEuMDZsMy44OTQgMy44OTMgNy40OC05LjgxN2EuNzUuNzUgMCAwIDEgMS4wNS0uMTQzWiIgLz48L3N2Zz4=')]">
                        <li>
                            50 modelos de posts editáveis
                        </li>
                        <li>
                            Stories editáveis
                        </li>
                        <li>
                            Capa Facebook editável
                        </li>
                        <li>
                            Destaques Editáveis
                        </li>
                        <li>
                            Apostila Branding Pessoal
                        </li>
                        <li>
                            Mega Kit de produção de conteúdo
                        </li>
                        <li>
                            Gerador de legendas automáticas
                        </li>
                    </div>
                    <div>
                        <div>
                            Apenas hoje você vai pagar
                        </div>
                        <div class="font-black text-2xl">
                            De: R$99,90
                        </div>
                        <strong class="text-5xl text-[#b3ff43]">
                            R$47,90
                        </strong>
                        <div class="font-black text-xl">
                            em até 4x R$12,88
                        </div>
                    </div>
                    <div class="text-2xl m-4 text-start list-image-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNCAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjMzhiZGY4Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy42ODUuMTUzYS43NTIuNzUyIDAgMCAxIC4xNDMgMS4wNTJsLTggMTAuNWEuNzUuNzUgMCAwIDEtMS4xMjcuMDc1bC00LjUtNC41YS43NS43NSAwIDAgMSAxLjA2LTEuMDZsMy44OTQgMy44OTMgNy40OC05LjgxN2EuNzUuNzUgMCAwIDEgMS4wNS0uMTQzWiIgLz48L3N2Zz4=')]">
                        <li>
                            Pagamento único
                        </li>
                        <li>
                            Acesso a todas as artes
                        </li>
                        <li>
                            Use o Canva Grátis
                        </li>
                        <li>
                            Suporte via WhatsApp
                        </li>
                    </div>
                    <div class="flex items-center gap-3 my-8">
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
            </section>
        </div>
    );
}