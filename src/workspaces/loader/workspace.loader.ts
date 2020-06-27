import { Injectable } from "@nestjs/common";
import { Workspace } from "@test/workspaces/entities/workspace.entity";
import { WorkspaceService } from "@test/workspaces/workspace.service";
import { OrderedNestDataLoader } from "nestjs-graphql-dataloader";

@Injectable()
export class WorkspaceLoader extends OrderedNestDataLoader<
  Workspace["id"],
  Workspace
> {
  constructor(private readonly workspaceService: WorkspaceService) {
    super();
  }

  protected getOptions = () => ({
    query: (keys: Array<Workspace["id"]>) =>
      this.workspaceService.findByIds(keys),
  });
}
