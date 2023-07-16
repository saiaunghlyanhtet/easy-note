import { SSTConfig } from "sst";
import { API } from "./stacks/MyStack";

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
    app.stack(API);
  },
};

export default config;
