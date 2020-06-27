"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceModule = void 0;
const common_1 = require("@nestjs/common");
const workspace_service_1 = require("./workspace.service");
const workspace_resolver_1 = require("./resolvers/workspace.resolver");
const workspace_loader_1 = require("./loader/workspace.loader");
let WorkspaceModule = class WorkspaceModule {
};
WorkspaceModule = __decorate([
    common_1.Module({
        providers: [workspace_service_1.WorkspaceService, workspace_resolver_1.WorkspaceResolver, workspace_loader_1.WorkspaceLoader],
        imports: [],
        exports: [workspace_service_1.WorkspaceService, workspace_loader_1.WorkspaceLoader],
    })
], WorkspaceModule);
exports.WorkspaceModule = WorkspaceModule;
//# sourceMappingURL=workspace.module.js.map