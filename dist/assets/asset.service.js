"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetService = void 0;
const asset_entity_1 = require("./entities/asset.entity");
const common_1 = require("@nestjs/common");
const workspace_service_1 = require("../workspaces/workspace.service");
const workspace_entity_1 = require("../workspaces/entities/workspace.entity");
let AssetService = class AssetService {
    constructor() {
        this.logger = new common_1.Logger("AssetService");
        this.assets = [];
        const a = new asset_entity_1.Asset();
        a.id = "a";
        const w = new workspace_entity_1.Workspace();
        w.id = "a";
        a.workspace = w;
        this.assets.push(a);
    }
    async findAll() {
        return this.assets;
    }
    async findByIds(ids) {
        const assets = [];
        ids.forEach((id) => {
            const e = this.assets.find((e) => e.id === id);
            if (e) {
                assets.push(e);
            }
        });
        return assets;
    }
};
AssetService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], AssetService);
exports.AssetService = AssetService;
//# sourceMappingURL=asset.service.js.map