import { Asset } from "./entities/asset.entity";
import { Injectable, Inject, Logger } from "@nestjs/common";
import { WorkspaceService } from "@test/workspaces/workspace.service";
import { Workspace } from "@test/workspaces/entities/workspace.entity";

@Injectable()
export class AssetService {
  private readonly logger = new Logger("AssetService");
  assets = [];
  constructor() {
    const a = new Asset();
    a.id = "a";
    const w = new Workspace();
    w.id = "a";
    a.workspace = w;
    this.assets.push(a);
  }

  async findAll(): Promise<Asset[]> {
    return this.assets;
  }

  async findByIds(ids: readonly string[]) {
    const assets = [];
    ids.forEach((id) => {
      const e = this.assets.find((e) => e.id === id);
      if (e) {
        assets.push(e);
      }
    });
    return assets;
  }
}
