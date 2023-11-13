import {
  Card,
  CardBody,
  Tabs,
  Tab,
} from "@nextui-org/react";
import Acordeon from "./Acordeon";
import { useState } from "react";
import { listTiposBancos } from "../../../components/utilities";


const UrlSection = () => {
  // const listDesa = UrlsBanks.filter((banco) => banco.entorno === "desarrollo")

  const [selected, setSelected] = useState("bi");

  return (
    <>
      <div className="flex items-center justify-center py-10">
        <h1 className="text-4xl font-bold">Accesos WEB</h1>
      </div>
      <div
        id="seccion-accesos"
        className="flex flex-col items-center max-w-screen-lg mx-auto px-20"
      >
        <Tabs
          selectedKey={selected}
          onSelectionChange={setSelected}
          aria-label="Options"
          fullWidth={true}
          className="justify-center mt-2"
        >
          {listTiposBancos.map(({ key, nombre,listaDesa,listaTest }) => (
            <Tab key={key} title={nombre} listaDesa={listaDesa} listaTest={listaTest}>
              <Card fullWidth={true}>
                <CardBody>
                  <div className="flex flex-row justify-between w-full">
                    <div className="flex-1 justify-center p-4">
                      <p className="text-center">Desarrollo</p>
                    </div>
                    <div className=" flex-1 justify-center p-4 ">
                      <p className="text-center">Testing</p>
                    </div>
                  </div>
                  <hr />
                  <div className="flex flex-row justify-between w-full">
                    <div className="flex-1 justify-center  ">
                        <Acordeon UrlsBankss={listaDesa} />
                    </div>
                    <div className="flex-1 justify-center">
                        <Acordeon UrlsBankss={listaTest} />
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
