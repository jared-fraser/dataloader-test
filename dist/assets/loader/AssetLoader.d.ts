import { Asset } from "@test/assets/entities/asset.entity";
import { AssetService } from "@test/assets/asset.service";
import { OrderedNestDataLoader } from "nestjs-graphql-dataloader";
export declare class AssetLoader extends OrderedNestDataLoader<Asset["id"], Asset> {
    private readonly assetService;
    constructor(assetService: AssetService);
    protected getOptions: () => {
        query: (keys: Array<Asset["id"]>) => Promise<any[]>;
    };
}
