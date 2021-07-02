import { Body, Controller, Post, Put } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { JogadoresService } from './jogadores.service';

@Controller('api/v1/jogadores')
export class JogadoresController {

    constructor(private readonly service: JogadoresService){}
    
    @Post()
    async post(@Body() dto: CriarJogadorDto) {
        return this.service.save(dto);
    }

    @Put('/:id')
    async put() {
    return JSON.stringify({
        "nome": "Diego"
    })
    }
    
}
