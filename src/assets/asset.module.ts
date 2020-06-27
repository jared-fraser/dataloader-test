import { Module } from "@nestjs/common";
import { AssetResolver } from "@test/assets/resolvers/asset.resolver";
import { AssetService } from "@test/assets/asset.service";
import { WorkspaceModule } from "@test/workspaces/workspace.module";

@Module({
  providers: [AssetResolver, AssetService],
  imports: [WorkspaceModule],
})
export class AssetModule {}
