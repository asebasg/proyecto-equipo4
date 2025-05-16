/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User, Prisma } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() data: Prisma.UserCreateInput): Promise<User> {
    return this.userService.createUser(data);
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User | null> {
    return this.userService.getUserById(parseInt(id));
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() data: Prisma.UserUpdateInput): Promise<User> {
    return this.userService.updateUser(parseInt(id), data);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return this.userService.deleteUser(parseInt(id));
  }
}
