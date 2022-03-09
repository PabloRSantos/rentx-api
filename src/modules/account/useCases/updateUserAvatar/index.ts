import { DiskStorageAdapter } from "@/shared/infra/storage/implementations";
import { IController } from "@/shared/protocols";

import { makeUsersRepository } from "../../repositories/factories";
import { UpdateUserAvatarController } from "./UpdateUserAvatarController";
import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";

export const makeUpdateUserAvatarController = (): IController => {
    const storage = new DiskStorageAdapter();
    const updateUserAvatarUseCase = new UpdateUserAvatarUseCase(
        makeUsersRepository(),
        storage
    );
    const updateUserAvatarController = new UpdateUserAvatarController(
        updateUserAvatarUseCase
    );

    return updateUserAvatarController;
};
