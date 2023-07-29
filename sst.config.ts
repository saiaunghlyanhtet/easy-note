import { SSTConfig } from "sst";
import { ApiStack } from "./stacks/ApiStack";
import { AuthStack } from "./stacks/AuthStack";
import {StorageStack}  from "./stacks/StorageStack";

const config: SSTConfig = {
  config(globals: any): any {
    return {
      // Configuration options specific to the module/framework
      // Modify this section based on the actual options required
      name: "sst-notes",
      region: "ap-northeast-1",
    };
  },
  stacks(app) {
    app.stack(StorageStack).stack(ApiStack).stack(AuthStack);
  },
};

export default config;
