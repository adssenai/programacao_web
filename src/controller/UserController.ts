import { Request, Response } from 'express';
import { User } from '../models/User';
import { CreateUserService } from '../services/CreateUserService';

class UserContreller {

    async create(request: Request, response: Response) {
        const userData = request.body

        const createUser = new CreateUserService

        const user = await createUser.execute(userData);

        return response.json(User);

    }

}

export { UserContreller };