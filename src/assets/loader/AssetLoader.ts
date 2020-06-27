import { Injectable } from "@nestjs/common";
import { Asset } from "@test/assets/entities/asset.entity";
import { AssetService } from "@test/assets/asset.service";
import { OrderedNestDataLoader } from "nestjs-graphql-dataloader";

@Injectable()
export class AssetLoader extends OrderedNestDataLoader<Asset["id"], Asset> {
  constructor(private readonly assetService: AssetService) {
    super();
  }

  protected getOptions = () => ({
    query: (keys: Array<Asset["id"]>) =>
      this.assetService.findByIds(keys as string[]),
  });
}
