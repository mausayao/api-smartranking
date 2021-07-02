import { Module, Post } from '@nestjs/common';
import { JogadoresController } from './jogadores.controller';

@Module({
  controllers: [JogadoresController]
})
export class JogadoresModule {

  @Post()
  async post() {
    return JSON.stringify({
      "nome": "Diego"
    })
  }

  @Post('/:id')
  async put() {
    return JSON.stringify({
      "nome": "Diego"
    })
  }
}
