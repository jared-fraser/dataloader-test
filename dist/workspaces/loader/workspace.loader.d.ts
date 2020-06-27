import { Workspace } from "@test/workspaces/entities/workspace.entity";
import { WorkspaceService } from "@test/workspaces/workspace.service";
import { OrderedNestDataLoader } from "nestjs-graphql-dataloader";
export declare class WorkspaceLoader extends OrderedNestDataLoader<Workspace["id"], Workspace> {
    private readonly workspaceService;
    constructor(workspaceService: WorkspaceService);
    protected getOptions: () => {
        query: (keys: Array<Workspace["id"]>) => Promise<any[]>;
    };
}
