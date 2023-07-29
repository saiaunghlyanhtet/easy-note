import { Bucket, Table } from "sst/constructs";
import {Construct} from "constructs";

interface StorageStackProps {
  stack: Construct;
  app: any; 
}

export function StorageStack({ stack, app }: StorageStackProps) {
  const bucket = new Bucket(stack, "Uploads")

  const table = new Table(stack, "Notes", {
    fields: {
      userId: "string",
      noteId: "string",
    },
    primaryIndex: {
      partitionKey: "userId",
      sortKey: "noteId",
    },
  });

  
  return {
    bucket,
    table
  };
}
