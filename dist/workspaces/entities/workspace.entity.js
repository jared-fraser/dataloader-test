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
exports.Workspace = void 0;
const graphql_1 = require("@nestjs/graphql");
const asset_entity_1 = require("../../assets/entities/asset.entity");
let Workspace = class Workspace {
};
__decorate([
    graphql_1.Field((type) => graphql_1.ID),
    __metadata("design:type", String)
], Workspace.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], Workspace.prototype, "title", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Date)
], Workspace.prototype, "createdAt", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", Date)
], Workspace.prototype, "updatedAt", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", Date)
], Workspace.prototype, "deletedAt", void 0);
Workspace = __decorate([
    graphql_1.ObjectType()
], Workspace);
exports.Workspace = Workspace;
//# sourceMappingURL=workspace.entity.js.map