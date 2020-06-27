import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

import { WorkspaceModule } from "@test/workspaces/workspace.module";
import { AssetModule } from "@test/assets/asset.module";

import { APP_INTERCEPTOR } from "@nestjs/core";
import { DataLoaderInterceptor } from "nestjs-graphql-dataloader";

@Module({
  imports: [
    AssetModule,
    WorkspaceModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: "schema.graphql",
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: DataLoaderInterceptor,
    },
  ],
})
export class AppModule {}
