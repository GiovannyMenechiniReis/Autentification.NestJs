// src/app.module.ts
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module'; // Certifique-se de que está importando o AuthModule

@Module({
  imports: [
    UsersModule,
    AuthModule, // Importa o AuthModule
  ],
})
export class AppModule {}
