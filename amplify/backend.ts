import { defineBackend } from "@aws-amplify/backend";
import { myFirstFunction } from "./functions/my-first-function/resource";

export const backend = defineBackend({
  functions: {
    myFirstFunction,
  },
});