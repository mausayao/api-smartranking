import { Injectable } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';

@Injectable()
export class JogadoresService {

    async save(dto: CriarJogadorDto): Promise<CriarJogadorDto> {
        console.log(dto);
        return dto;
    }
}
