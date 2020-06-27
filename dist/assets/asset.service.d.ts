import { Asset } from "./entities/asset.entity";
export declare class AssetService {
    private readonly logger;
    assets: any[];
    constructor();
    findAll(): Promise<Asset[]>;
    findByIds(ids: readonly string[]): Promise<any[]>;
}
