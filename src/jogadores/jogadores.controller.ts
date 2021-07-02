import { Body, Controller, Post, Put } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';

@Controller('api/v1/jogadores')
export class JogadoresController {
    
    @Post()
    async post(@Body() dto: CriarJogadorDto) {
        return dto
    }

    @Put('/:id')
    async put() {
    return JSON.stringify({
        "nome": "Diego"
    })
    }
    
}
