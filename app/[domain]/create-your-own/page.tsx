import { ArrowRight } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Stage } from "@/components/stage"

export const metadata = {
  title: "Criar sua própria comunidade",
  description: "Hosteie sua ferramenta",
}

export default function CommunityPage() {
  return (
    <main className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-4">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Crie um @ de comunidade <br className="hidden sm:inline" />
          para sua comunidade
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Quer um @ personalizado de comunidade, como
          @cunil.com.br ou @matilha.co? Siga
          essas passos para conseguir um próprio.
        </p>
      </div>
      <div>
        <Stage title="Buy a domain" number={1}>
          <p className="max-w-lg">
            Compre um domínio, costumamos usar{" "}
            <a
              href="https://godaddy.com"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GoDaddy
            </a>
            , porém isso não importa qual você use pra comprar. Apenas confira se você
            consegue mudar os Servidores de nomes do seu domínio.
          </p>
        </Stage>
        <Stage title="Host the Community Handles tool" number={2} last>
          <p className="max-w-lg">Você precisa hostear esta ferramenta.</p>
          <p className="mt-4 max-w-lg">
            Se você quiser hostear você mesmo,{" "}
            <a
              href="https://github.com/mozzius/community-handles"
              className="underline"
            >
              Dê um fork neste projeto no GitHub
            </a>
            . É um projeto em Next.js, então você consegue dar deploy do jeito que quiser.
            Leia o README para solução recomendada, utilizando Vercel e
            Railway.
          </p>
        </Stage>
      </div>
    </main>
  )
}
