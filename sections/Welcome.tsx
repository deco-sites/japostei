import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

  interface Props {
    /**
    * @description The description of name.
    */
    welcomeImage: ImageWidget;
    cta?: CTA[];
  }

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}


export default function Welcome({ welcomeImage, cta }: Props) {
  return <div>
    <section>
      <br />
      <div class="flex flex-col gap-4 items-center justify-center text-center">
        <div class="bg-[#553410] w-96 text-white font-black text-3xl p-8 rounded-3xl">
          Transforme seu Perfil Ainda Hoje e Veja Seus Resultados Decolarem na Internet!
        </div>
        <div class="bg-[#553410] w-96 text-white font-black p-8 text-xl text-center rounded-3xl">
          Tenha Posts Profissionais em menos de 1 Minuto
          e Torne o seu Perfil Impecável.
        </div>
        <div class="">
        <Image
            src={welcomeImage || ""}
            alt={""}
            height={850}
            width={850}
          />
        </div>
        <div class="flex items-center gap-3">
              {cta?.map((item) => (
                <a
                  key={item?.id}
                  id={item?.id}
                  href={item?.href}
                  target={item?.href.includes("http") ? "_blank" : "_self"}
                  class={`font-bold text-accent btn btn-lg btn-secondary rounded-xl ${
                    item.outline && "btn-outline"
                  }`}
                >
                  {item?.text}
                </a>
              ))}
            </div>
      </div>
    </section>
  </div>
}