// src/users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  create(createUserDto: CreateUserDto): User {
    const newUser: User = {
      userId: this.users.length + 1,
      ...createUserDto, // Incluirá username e password
    };
    this.users.push(newUser);
    return newUser; // Retorna o usuário completo
  }

  findAll(): User[] {
    return this.users; // Retorna todos os campos dos usuários
  }

  findOne(id: number): User {
    const user = this.users.find(user => user.userId === id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  findOneByUsername(username: string): User {
    const user = this.users.find(user => user.username === username);
    if (!user) {
      throw new NotFoundException(`User with username ${username} not found`);
    }
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto): User {
    const userIndex = this.users.findIndex(user => user.userId === id);
    if (userIndex === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    const updatedUser = { ...this.users[userIndex], ...updateUserDto };
    this.users[userIndex] = updatedUser;
    return updatedUser;
  }

  remove(id: number): { message: string } {
    const userIndex = this.users.findIndex(user => user.userId === id);
    if (userIndex === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    this.users.splice(userIndex, 1);
    return { message: `User with ID ${id} was successfully removed` };
  }
}
