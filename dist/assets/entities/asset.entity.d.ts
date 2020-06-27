import { Workspace } from "@test/workspaces/entities/workspace.entity";
export declare class Asset {
    id: String;
    title: String;
    description: String;
    uri: String;
    workspace: Workspace;
    createdAt: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
