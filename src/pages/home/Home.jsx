import { Card, CardBody, Tabs, Tab, CardHeader } from "@nextui-org/react";
import SliderBanks from "./components/SliderBanks";
import { UrlsBanks } from "./components/UrlBanks";
import Acordeon from "./components/Acordeon";
const Home = () => {
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
      <div>
        <SliderBanks />
      </div>
      <div>
        <Card>
          <CardHeader>
            <div className="flex w-full flex-col items-center">
              <Tabs aria-label="Options">
                {listTiposBancos.map(({ id, nombre }) => (
                  <Tab key={id} title={nombre}>
                    <Card>
                      <CardBody>
                        <div className="flex items-center">
                          <div className="flex-1 p-4 bg-blue-300">
                            <p>
                            Desarrollo
                            </p>
                            <Acordeon/>
                          </div>
                          <div className="flex-1 p-4 bg-green-300">
                            <p>
                            Testing
                            </p>
                            <Acordeon/>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Tab>
                ))}
              </Tabs>
            </div>
          </CardHeader>
        </Card>
      </div>
    </>
  );
};

export default Home;
