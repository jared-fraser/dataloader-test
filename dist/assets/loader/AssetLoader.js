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
exports.AssetLoader = void 0;
const common_1 = require("@nestjs/common");
const asset_entity_1 = require("../entities/asset.entity");
const asset_service_1 = require("../asset.service");
const nestjs_graphql_dataloader_1 = require("nestjs-graphql-dataloader");
let AssetLoader = class AssetLoader extends nestjs_graphql_dataloader_1.OrderedNestDataLoader {
    constructor(assetService) {
        super();
        this.assetService = assetService;
        this.getOptions = () => ({
            query: (keys) => this.assetService.findByIds(keys),
        });
    }
};
AssetLoader = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [asset_service_1.AssetService])
], AssetLoader);
exports.AssetLoader = AssetLoader;
//# sourceMappingURL=AssetLoader.js.map