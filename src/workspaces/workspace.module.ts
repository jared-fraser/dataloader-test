import { Module } from "@nestjs/common";
import { WorkspaceService } from "@test/workspaces/workspace.service";
import { WorkspaceResolver } from "@test/workspaces/resolvers/workspace.resolver";
import { WorkspaceLoader } from "@test/workspaces/loader/workspace.loader";

@Module({
  providers: [WorkspaceService, WorkspaceResolver, WorkspaceLoader],
  imports: [],
  exports: [WorkspaceService, WorkspaceLoader],
})
export class WorkspaceModule {}
