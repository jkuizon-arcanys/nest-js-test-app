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
exports.DogsController = void 0;
const common_1 = require("@nestjs/common");
const create_dog_dto_1 = require("../../dto/create-dog-dto/create-dog-dto");
const dogs_service_1 = require("../../services/dogs/dogs.service");
let DogsController = class DogsController {
    constructor(dogsService) {
        this.dogsService = dogsService;
    }
    create(createDogDto) {
        this.dogsService.create(createDogDto);
    }
    findAll() {
        return this.dogsService.findAll();
    }
    findWildcard() {
        return 'This route uses a wildcard';
    }
    getDocs(version) {
        if (version && version === '5') {
            return { url: 'https://docs.nestjs.com/v5/' };
        }
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dog_dto_1.CreateDogDto]),
    __metadata("design:returntype", void 0)
], DogsController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DogsController.prototype, "findAll", null);
__decorate([
    common_1.Get('ab*cd'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DogsController.prototype, "findWildcard", null);
__decorate([
    common_1.Get('docs'),
    common_1.Redirect('https://docs.nestjs.com', 302),
    __param(0, common_1.Query('version')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DogsController.prototype, "getDocs", null);
DogsController = __decorate([
    common_1.Controller('dogs'),
    __metadata("design:paramtypes", [dogs_service_1.DogsService])
], DogsController);
exports.DogsController = DogsController;
//# sourceMappingURL=dogs.controller.js.map