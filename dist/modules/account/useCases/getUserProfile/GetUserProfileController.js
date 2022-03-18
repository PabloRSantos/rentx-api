"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetUserProfileController = void 0;

var _helpers = require("@/shared/helpers");

var _mapper = require("../../mapper");

class GetUserProfileController {
  constructor(getUserProfileUseCase) {
    this.getUserProfileUseCase = getUserProfileUseCase;
  }

  async handle({
    userId
  }) {
    const user = await this.getUserProfileUseCase.execute({
      userId
    });

    const userFormatted = _mapper.UserMap.toDTO(user);

    return (0, _helpers.ok)(userFormatted);
  }

}

exports.GetUserProfileController = GetUserProfileController;