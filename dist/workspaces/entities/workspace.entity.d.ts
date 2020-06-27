import { Asset } from "@test/assets/entities/asset.entity";
export declare class Workspace {
    id: string;
    title: string;
    assets: Asset[];
    createdAt: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
