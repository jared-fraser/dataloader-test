import { Asset } from "@test/assets/entities/asset.entity";
import { AssetService } from "@test/assets/asset.service";
import { Workspace } from "@test/workspaces/entities/workspace.entity";
import DataLoader from "dataloader";
export declare class AssetResolver {
    private readonly assetService;
    constructor(assetService: AssetService);
    getAssets(): Promise<Asset[]>;
    workspace(asset: Asset, workspaceLoader: DataLoader<Workspace["id"], Workspace>): Promise<(Error | Workspace)[]>;
}
