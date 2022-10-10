import React from "react";

import { CollectibleName } from "features/game/types/craftables";
import { MysteriousHead } from "./components/MysteriousHead";

interface Prop {
  name: CollectibleName;
  id: string;
}

export const COLLECTIBLE_COMPONENTS: Record<CollectibleName, React.FC> = {
  // TODO
  "Mysterious Head": MysteriousHead,
} as Record<CollectibleName, React.FC>;

export const Collectible: React.FC<Prop> = ({ name, id }) => {
  const CollectiblePlaced = COLLECTIBLE_COMPONENTS[name];

  return <CollectiblePlaced key={id} />;
};