import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(phone: string): Promise<any> {
    const user = await this.authService.validateUser(phone);

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
