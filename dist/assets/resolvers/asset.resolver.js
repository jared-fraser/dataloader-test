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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const asset_entity_1 = require("../entities/asset.entity");
const asset_service_1 = require("../asset.service");
const workspace_entity_1 = require("../../workspaces/entities/workspace.entity");
const nestjs_graphql_dataloader_1 = require("nestjs-graphql-dataloader");
const workspace_loader_1 = require("../../workspaces/loader/workspace.loader");
const dataloader_1 = require("dataloader");
let AssetResolver = class AssetResolver {
    constructor(assetService) {
        this.assetService = assetService;
    }
    getAssets() {
        return this.assetService.findAll();
    }
    async workspace(asset, workspaceLoader) {
        return workspaceLoader.loadMany(asset.workspace.id);
    }
};
__decorate([
    graphql_1.Query((returns) => [asset_entity_1.Asset]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AssetResolver.prototype, "getAssets", null);
__decorate([
    graphql_1.ResolveField((returns) => workspace_entity_1.Workspace),
    __param(0, graphql_1.Parent()),
    __param(1, nestjs_graphql_dataloader_1.Loader(workspace_loader_1.WorkspaceLoader)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [asset_entity_1.Asset,
        dataloader_1.default]),
    __metadata("design:returntype", Promise)
], AssetResolver.prototype, "workspace", null);
AssetResolver = __decorate([
    graphql_1.Resolver((of) => asset_entity_1.Asset),
    __metadata("design:paramtypes", [asset_service_1.AssetService])
], AssetResolver);
exports.AssetResolver = AssetResolver;
//# sourceMappingURL=asset.resolver.js.map