import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { CTA } from "site/sections/Welcome.tsx";

interface Props {
    /**
    * @description The description of name.
    */
    image: ImageWidget;
    iconImage: ImageWidget;
    cta?: CTA[];
}

export default function ThirdSection({ image, iconImage, cta }: Props) {
    return (
        <div class="bg-[#553410] text-white flex flex-col items-center justify-center text-center">
            <section>
                <div>
                    <br />
                    <div class="text-bold text-3xl">
                        Transforme seu Instagram hoje mesmo!
                    </div>
                    <div class="text-bold text-2xl">
                        É FÁCIL, RÁPIDO E GARANTIA DE SUCESSO!
                    </div>
                </div>
                <div>
                    <div class="">
                        <Image
                            src={image || ""}
                            alt={""}
                            height={450}
                            width={650}
                        />
                    </div>
                </div>
                <div class="flex flex-col gap-4 items-center justify-center">
                    <div class="bg-white rounded-2xl size-full h-24 flex flex-row text-[#553410] justify-align items-center">
                        <div class="fixed-size-div font-bold text-7xl">
                            50
                        </div>
                        <div class="font-bold text-2xl text-left">
                            Criativos prontos para você <br /> editar e postar
                        </div>
                    </div>
                    <div class="bg-white rounded-2xl size-full h-24 flex flex-row text-[#553410] justify-align items-center">
                        <div class="icon-container">
                            <Image
                                src={iconImage || ""}
                                alt={""}
                                height={72}
                                width={83}
                                class="fixed-size-image"
                            />
                        </div>
                        <div class="font-bold text-2xl text-left">
                            Materiais desenvolvidos por agência de <br /> marketing
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </section>
            <div class="text-2xl">
                <br />
                Use pelo seu Celular, Computador ou Tablet, diretamente do aplicativo gratuito do Canva.
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
    );
}