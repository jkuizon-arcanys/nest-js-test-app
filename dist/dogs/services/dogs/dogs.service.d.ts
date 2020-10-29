import { Dog } from '../../interfaces/dog.interface';
export declare class DogsService {
    private readonly dogs;
    create(dog: Dog): void;
    findAll(): Dog[];
}
