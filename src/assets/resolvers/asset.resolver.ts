import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from "@nestjs/graphql";
import { Asset } from "@test/assets/entities/asset.entity";
import { AssetService } from "@test/assets/asset.service";
import { Workspace } from "@test/workspaces/entities/workspace.entity";
import { Loader } from "nestjs-graphql-dataloader";
import { WorkspaceLoader } from "@test/workspaces/loader/workspace.loader";
import DataLoader from "dataloader";

@Resolver((of) => Asset)
export class AssetResolver {
  constructor(private readonly assetService: AssetService) {}

  @Query((returns) => [Asset])
  getAssets(): Promise<Asset[]> {
    return this.assetService.findAll();
  }

  @ResolveField((returns) => Workspace)
  async workspace(
    @Parent() asset: Asset,
    @Loader(WorkspaceLoader)
    workspaceLoader: DataLoader<Workspace["id"], Workspace>
  ) {
    return workspaceLoader.loadMany(asset.workspace.id);
  }
}
