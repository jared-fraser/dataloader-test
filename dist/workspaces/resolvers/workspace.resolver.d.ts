import { WorkspaceService } from "@test/workspaces/workspace.service";
import { Workspace } from "@test/workspaces/entities/workspace.entity";
export declare class WorkspaceResolver {
    private readonly workspaceService;
    constructor(workspaceService: WorkspaceService);
    getWorkspaces(ids: string[]): Promise<Workspace[]>;
}
