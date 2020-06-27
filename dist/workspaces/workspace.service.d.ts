import { Workspace } from "@test/workspaces/entities/workspace.entity";
export declare class WorkspaceService {
    workspaces: any[];
    constructor();
    findOneOrFail(id: string): Promise<Workspace>;
    findOne(id: string): Promise<Workspace>;
    findAll(): Promise<Workspace[]>;
    findByIds(ids: String[]): Promise<any[]>;
}
