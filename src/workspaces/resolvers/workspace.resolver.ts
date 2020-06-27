import { Resolver, Query, Args } from "@nestjs/graphql";
import { WorkspaceService } from "@test/workspaces/workspace.service";
import { Workspace } from "@test/workspaces/entities/workspace.entity";

@Resolver((of) => Workspace)
export class WorkspaceResolver {
  constructor(private readonly workspaceService: WorkspaceService) {}

  @Query(() => [Workspace])
  public getWorkspaces(
    @Args({ name: "ids", type: () => [String] }) ids: string[]
  ) {
    return this.workspaceService.findAll();
  }
}
