import { SPFI } from "@pnp/sp";
import * as React from "react";
import { useEffect, useState } from "react";
import { getSP } from "../../../pnpjsConfig";
import { WebPartContext } from "@microsoft/sp-webpart-base";

interface IList {
  Title: string;
}

interface Props {
  context: WebPartContext;
}
export default function Sample({ context }: Props) {
  const [items, setItems] = useState<IList[]>([]);

  const LIST_NAME = "SampleList";
  const _sp: SPFI = getSP(context);

  useEffect(() => {
    (async () => {
      try {
        const getItems = await _sp.web.lists.getByTitle(LIST_NAME).items();
        setItems(getItems);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    })();
  }, []);

  console.log(items);

  return <h1>Hello world!!!!</h1>;
}
