import { UrlsBanks_BE_DESA } from "./UrlBanks_be_desa";
import { UrlsBanks_BE_TEST } from "./UrlBanks_be_test";
import { UrlsBanks_BI_DESA } from "./UrlBanks_bi_desa";
import { UrlsBanks_BI_TEST } from "./UrlBanks_bi_test";
import { UrlsBanks_BOGC_DESA } from "./UrlBanks_bogc_desa";
import { UrlsBanks_BOGC_TEST } from "./UrlBanks_bogc_test";
import { UrlsBanks_BOMA_DESA } from "./UrlBanks_boma_desa";
import { UrlsBanks_BOMA_TEST } from "./UrlBanks_boma_test";

export const listTiposBancos = [
    {
      key: "bi",
      nombre: "Banca Individuo",
      listaDesa:UrlsBanks_BI_DESA,
      listaTest:UrlsBanks_BI_TEST
    },
    {
      key: "be",
      nombre: "Banca Empresa",
      listaDesa:UrlsBanks_BE_DESA,
      listaTest:UrlsBanks_BE_TEST
    },
    {
      key: "bogc",
      nombre: "Gestión Comercial",
      listaDesa:UrlsBanks_BOGC_DESA,
      listaTest:UrlsBanks_BOGC_TEST
    },
    {
      key: "boma",
      nombre: "Mesa de Ayuda",
      listaDesa:UrlsBanks_BOMA_DESA,
      listaTest:UrlsBanks_BOMA_TEST
    }
]