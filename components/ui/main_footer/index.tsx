import Image from "next/image";
import logo from "@/public/logo_footer.png";
import qrcode from "@/public/qrcode.jpeg";

export function MainFooter() {
  return (
    <footer className="bg-[var(--primary-text-color)] w-full h-auto text-white py-4">
      <div className="w-full h-auto flex items-center justify-center">
        <Image
          src={logo}
          alt="Logo EducaMaisMinas"
          className="mx-auto mb-4"
          width={150}
          height={50}
        />
      </div>
      <div className="container mx-auto text-center mb-4">
        <ul>
          <li className="inline-block mx-2">
            <a
              href="/politicasCookies"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Política de Cookies
            </a>
          </li>
          <li className="inline-block mx-2">
            <a
              href="/politicaPrivacidade"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Política de Privacidade
            </a>
          </li>
          <li className="inline-block mx-2">
            <a
              href="/regulamentoMatriculaSorte"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Regulamento Matrícula da Sorte
            </a>
          </li>
        </ul>
      </div>
      <div className="container mx-auto text-center mb-4 flex flex-col gap-2">
        <p className="text-white font-medium">CADASTRO NO SISTEMA E-MEC</p>
        <Image
          alt="QR-CODE do E-MEC"
          src={qrcode}
          className="mx-auto mb-4"
          width={150}
          height={50}
        />
      </div>
      <div className="container mx-auto text-center mb-4 p-4 flex flex-col gap-2">
        <p className="text-sm tracking-tight">
          Rua Luiz Rodrigues dos Santos, nº 44, sala 204, Bairro Todos os Santos
        </p>
        <div className="flex items-center justify-center flex-col gap">
          <p className="text-sm tracking-tight">
            Coronel Fabriciano - Minas Gerais
          </p>
          <span className="text-sm tracking-tight"> CEP: 35170-061</span>
        </div>
        <div className="flex items-center justify-center flex-col gap">
          <p className="text-sm tracking-tight">Educa Mais Minas LTDA</p>
          <span className="text-sm tracking-tight">
            CNPJ: 46.713.585/0001-98
          </span>
        </div>
      </div>
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} EducaMaisMinas. Todos os direitos
          reservados.
        </p>
        <div className="flex gap-2 w-full items-center justify-center text-sm">
          <a href="/privacy-policy" className="text-gray-400 hover:text-white">
            Política de Privacidade
          </a>
          {" | "}
          <a
            href="/terms-of-service"
            className="text-gray-400 hover:text-white"
          >
            Política de Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}
