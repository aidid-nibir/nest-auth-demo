import { AppService } from "./app.service";
import { LocalAuthGuard } from "./auth/local-auth.guard";
import { Controller, Get, Post, UseGuards, Request } from "@nestjs/common";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Login Route
  @UseGuards(LocalAuthGuard)
  @Post("login")
  login(@Request() req): any {
    return req.user;
  }

  // Protected Routes
  @Get("protected")
  getHello(): string {
    return this.appService.getHello();
  }
}
