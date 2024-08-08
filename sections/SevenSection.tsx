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
            <section class="text-[#553410] flex flex-col gap-4 items-center justify-center text-center px-32">
                <h1 class="text-3xl"><strong>Essa é a hora de sair do amadorismo com o seu Instagram!</strong></h1>
                <div class="text-2xl">Um perfil profissional sem dúvidas colocará <strong>MUITO DINHEIRO NO SEU BOLSO 
                e você vai ter tudo que precisa para impactar novos clientes em um só lugar!</strong></div>
                <div class="">
                    <Image
                        src={image || ""}
                        alt={""}
                        height={450}
                        width={650}
                    />
                </div>
            </section>
        </div>
    );
}