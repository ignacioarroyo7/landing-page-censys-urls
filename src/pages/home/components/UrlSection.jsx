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

            <div className="flex w-full flex-col items-center">
              <Tabs aria-label="Dynamic tabs" className="justify-center mt-2">
                {listTiposBancos.map(({ id, nombre }) => (
                  <Tab key={id} title={nombre}>
                    <Card fullWidth={true}>
                      <CardHeader>
                        <div className="flex flex-row justify-between w-full">
                          <div className="flex-1 justify-center p-4 bg-blue-300">
                              <p className="text-center">Desarrollo </p>
                          </div>
                          <div className=" flex-1 justify-center p-4 bg-blue-300">
                              <p className="text-center">Testing</p>
                          </div>
                        </div>
                      </CardHeader>
                      <hr/>
                      <CardBody>
                      <div className="flex flex-row justify-between w-full">
                          <div className="flex-1 justify-center p-4 bg-blue-300">
                          <Acordeon />
                          </div>
                          <div className=" flex-1 justify-center p-4 bg-blue-300">
                          <Acordeon />
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Tab>
                ))}
              </Tabs>
            </div>
  );
};

export default UrlSection;