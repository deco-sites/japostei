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
            <section class="text-[#553410] flex flex-col gap-4 items-center justify-center text-center lg:px-32">
                <h1 class="text-3xl">Confira algumas <strong>artes do pacote para destaques:</strong></h1>
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