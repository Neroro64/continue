import { RerankerName } from "../..";
import { CohereReranker } from "./cohere";
import { FreeTrialReranker } from "./freeTrial";
import { LLMReranker } from "./llm";
import { LocalReranker } from "./localReranker";
import { VoyageReranker } from "./voyage";

export const AllRerankers: { [key in RerankerName]: any } = {
  cohere: CohereReranker,
  llm: LLMReranker,
  voyage: VoyageReranker,
  "free-trial": FreeTrialReranker,
  "localReranker": LocalReranker
};
