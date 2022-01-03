import { DiskStorageAdapter } from "@/shared/infra/storage/implementations";
import { IController } from "@/shared/protocols";

import { UsersRepository } from "../../infra/typeorm/repositories";
import { UpdateUserAvatarController } from "./UpdateUserAvatarController";
import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";

export const makeUpdateUserAvatarController = (): IController => {
    const usersRepository = new UsersRepository();
    const storage = new DiskStorageAdapter();
    const updateUserAvatarUseCase = new UpdateUserAvatarUseCase(
        usersRepository,
        storage
    );
    const updateUserAvatarController = new UpdateUserAvatarController(
        updateUserAvatarUseCase
    );

    return updateUserAvatarController;
};
