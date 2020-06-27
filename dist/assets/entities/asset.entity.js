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
exports.Asset = void 0;
const graphql_1 = require("@nestjs/graphql");
const workspace_entity_1 = require("../../workspaces/entities/workspace.entity");
let Asset = class Asset {
};
__decorate([
    graphql_1.Field((type) => graphql_1.ID),
    __metadata("design:type", String)
], Asset.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], Asset.prototype, "title", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Asset.prototype, "description", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Asset.prototype, "uri", void 0);
__decorate([
    graphql_1.Field((type) => [workspace_entity_1.Workspace]),
    __metadata("design:type", workspace_entity_1.Workspace)
], Asset.prototype, "workspace", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Date)
], Asset.prototype, "createdAt", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", Date)
], Asset.prototype, "updatedAt", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", Date)
], Asset.prototype, "deletedAt", void 0);
Asset = __decorate([
    graphql_1.ObjectType()
], Asset);
exports.Asset = Asset;
//# sourceMappingURL=asset.entity.js.map