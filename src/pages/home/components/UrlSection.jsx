import { Card, CardBody, Tabs, Tab, CardHeader } from "@nextui-org/react";
import { UrlsBanks } from "./UrlBanks";
import Acordeon from "./Acordeon";
const UrlSection = () => {
  // const listDesa = UrlsBanks.filter((banco) => banco.entorno === "desarrollo")
  const listTest = UrlsBanks.filter((banco) => banco.entorno === "testing");
  const listTiposBancos = [
    {
      id: 1,
      nombre: "Banca Individuo",
    },
    {
      id: 2,
      nombre: "Banca Empresa",
    },
    {
      id: 3,
      nombre: "BackOffice Comercial",
    },
    {
      id: 4,
      nombre: "BackOffice Gestión",
    },
  ];
  return (
<>
<div id="seccion-servicios" className="flex items-center justify-center py-10">
        <h1 className="text-4xl font-bold">Accesos WEB</h1>
     </div>
    <div id="seccion-accesos" className="flex flex-col items-center max-w-screen-lg mx-auto px-20">
              <Tabs aria-label="Options" fullWidth={true} className="justify-center mt-2">
                {listTiposBancos.map(({ id, nombre }) => (
                  <Tab key={id} title={nombre}>
                    <Card fullWidth={true}>
                      <CardBody>
                        <div className="flex flex-row justify-between w-full">
                          <div className="flex-1 justify-center p-4">
                              <p className="text-center">Desarrollo </p>
                          </div>
                          <div className=" flex-1 justify-center p-4 ">
                              <p className="text-center">Testing</p>
                          </div>
                        </div>
                      <hr/>
                      <div className="flex flex-row justify-between w-full">
                          <div className="flex-1 justify-center  ">
                          <Acordeon />
                          </div>
                          <div className=" flex-1 justify-center">
                          <Acordeon />
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Tab>
                ))}
              </Tabs>
    </div>
</>
  );
};

export default UrlSection;