import { Token } from "../models/token.model";

class TokenRepository {
  public async create(dto: any): Promise<any> {
    return await Token.findOne(dto);
  }
}

export const tokenRepository = new TokenRepository();
