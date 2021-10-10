import { getRepository } from "typeorm";
import { hash } from 'bcryptjs'
import { User } from "../models/User";

interface UserData {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {

    public async execute({ name, email, password }: UserData) {

        const usersRepository = getRepository(User);

        const checkUserExists = await usersRepository.findOne({ email })

        if (checkUserExists) {
            throw new Error('Email adress alread exist');
        }

        const hashedPassowrd = await hash(password, 8);

        const user = {
            name,
            email,
            password: hashedPassowrd
        }

        await usersRepository.save(user);

        return user;

    }

}

export { CreateUserService }