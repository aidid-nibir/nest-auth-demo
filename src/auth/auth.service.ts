import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(phone: string): Promise<any> {
    const user = await this.usersService.findIfUserExist(phone);
    if (user && user.phone === phone) {
      return user;
    }
    return `Opps! No User Data Found with ${phone}`;
  }
}
