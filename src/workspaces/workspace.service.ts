import { Injectable } from "@nestjs/common";
import { Workspace } from "@test/workspaces/entities/workspace.entity";

@Injectable()
export class WorkspaceService {
  workspaces = [];

  constructor() {
    const a = new Workspace();
    a.id = "a";
    this.workspaces.push(a);
    const b = new Workspace();
    b.id = "b";
    this.workspaces.push(b);
  }

  async findOneOrFail(id: string): Promise<Workspace> {
    return this.workspaces.find((e) => e.id === id);
  }

  async findOne(id: string): Promise<Workspace> {
    return this.workspaces.find((e) => e.id === id);
  }

  async findAll(): Promise<Workspace[]> {
    return this.workspaces;
  }

  async findByIds(ids: String[]) {
    const workspaces = [];
    ids.forEach((id) => {
      const e = this.workspaces.find((e) => e.id === id);
      if (e) {
        workspaces.push(e);
      }
    });
    return workspaces;
  }
}
