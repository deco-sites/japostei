import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
    /**
    * @description The description of name.
    */
    image: ImageWidget;
}

export default function FiveSection({ image }: Props) {
    return (
        <div>
            <br />
            <section class="flex flex-col gap-4 items-center justify-center text-center lg:px-32 m-4 font-sans">

                <h1 class="text-[#553410]  text-3xl"><strong>Adquira hoje e receba um bônus exclusivo!</strong></h1>
                <h1 class="text-[#553410]  text-3xl">Adquirindo o Canva Imobiliária HOJE você ainda ganha
                    o <strong>MEGA KIT INSTAGRAM TRANSFORMADO!</strong></h1>
                <div class="">
                <img class="rounded-t-lg" src="lp-7.png" alt="" />
                </div>
                <div class="list-image-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNCAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjMzhiZGY4Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy42ODUuMTUzYS43NTIuNzUyIDAgMCAxIC4xNDMgMS4wNTJsLTggMTAuNWEuNzUuNzUgMCAwIDEtMS4xMjcuMDc1bC00LjUtNC41YS43NS43NSAwIDAgMSAxLjA2LTEuMDZsMy44OTQgMy44OTMgNy40OC05LjgxN2EuNzUuNzUgMCAwIDEgMS4wNS0uMTQzWiIgLz48L3N2Zz4=')] text-start bg-[#553410] rounded-3xl p-16">
                    <li class="text-white text-3xl">
                        Descubra como montar a sua biografia ideal </li>
                    <li class="text-white text-3xl">
                        Descubra como escolhar as fontes ideias para os seus projetos
                    </li>
                    <li class="text-white text-3xl">
                        Acesse nossa pasta exclusiva no Pinterest
                    </li>
                    <li class="text-white text-3xl">
                        Descubra como se posicionar no Instagram
                    </li>
                    <div class="font-bold text-3xl mt-8 text-white">
                        De: 47,90
                    </div>
                    <div class="font-bold text-3xl mt-8 text-[#b3ff43]">
                        Hoje você não vai pagar nada!
                    </div>
                </div>
                <strong class="text-[#553410] text-3xl font-black">
                    E pro seu conteúdo ficar completo, você também vai ganhar + GERADOR AUTOMÁTICO DE LEGENDAS COM IA
                </strong>
                <div class="list-image-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNCAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjMzhiZGY4Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy42ODUuMTUzYS43NTIuNzUyIDAgMCAxIC4xNDMgMS4wNTJsLTggMTAuNWEuNzUuNzUgMCAwIDEtMS4xMjcuMDc1bC00LjUtNC41YS43NS43NSAwIDAgMSAxLjA2LTEuMDZsMy44OTQgMy44OTMgNy40OC05LjgxN2EuNzUuNzUgMCAwIDEgMS4wNS0uMTQzWiIgLz48L3N2Zz4=')] text-start bg-[#553410] rounded-3xl p-16">
                    <li class="text-white text-3xl">
                        Além de ter as postagens prontas em menos de 1 minutos, basta <br/> colocar o tema ou assunto do seu post que o Gerados Automático de <br /> Legendas te dará várias opções de legendas em menos de 10 segundos!

                    </li>
                    <div class="text-white text-3xl mt-8">
                        É compatível com todos os tipos de assuntos!
                    </div>

                    <div class="font-bold text-3xl mt-8 text-white">
                        De: 47,90
                    </div>
                    <div class="font-bold text-3xl mt-8 text-[#b3ff43]">
                        Hoje você não vai pagar nada!
                    </div>
                </div>
            </section>
        </div>
    );
}