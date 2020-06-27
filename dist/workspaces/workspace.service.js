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
exports.WorkspaceService = void 0;
const common_1 = require("@nestjs/common");
const workspace_entity_1 = require("./entities/workspace.entity");
let WorkspaceService = class WorkspaceService {
    constructor() {
        this.workspaces = [];
        const a = new workspace_entity_1.Workspace();
        a.id = "a";
        this.workspaces.push(a);
        const b = new workspace_entity_1.Workspace();
        b.id = "b";
        this.workspaces.push(b);
    }
    async findOneOrFail(id) {
        return this.workspaces.find((e) => e.id === id);
    }
    async findOne(id) {
        return this.workspaces.find((e) => e.id === id);
    }
    async findAll() {
        return this.workspaces;
    }
    async findByIds(ids) {
        const workspaces = [];
        ids.forEach((id) => {
            const e = this.workspaces.find((e) => e.id === id);
            if (e) {
                workspaces.push(e);
            }
        });
        return workspaces;
    }
};
WorkspaceService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], WorkspaceService);
exports.WorkspaceService = WorkspaceService;
//# sourceMappingURL=workspace.service.js.map