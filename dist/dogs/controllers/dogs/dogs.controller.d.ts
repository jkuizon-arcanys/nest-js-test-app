import { CreateDogDto } from '../../create-dog-dto/create-dog-dto';
import { DogsService } from '../../services/dogs/dogs.service';
export declare class DogsController {
    private dogsService;
    constructor(dogsService: DogsService);
    create(createDogDto: CreateDogDto): void;
    findAll(): import("../../interfaces/dog.interface").Dog[];
    findWildcard(): string;
    getDocs(version: any): {
        url: string;
    };
}
