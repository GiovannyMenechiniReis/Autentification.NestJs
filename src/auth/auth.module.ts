import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module'; // Importe o UsersModule corretamente
import { JwtModule } from '@nestjs/jwt'; // Certifique-se de importar JwtModule

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'defaultSecret', // Use a chave secreta adequada
      signOptions: { expiresIn: '60s' }, // Configure o tempo de expiração
    }),
  ],
  providers: [AuthService],
  exports: [AuthService], // Exporte AuthService se for necessário em outros módulos
})
export class AuthModule {}
