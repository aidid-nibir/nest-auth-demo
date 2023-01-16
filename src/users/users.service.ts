import { Injectable } from "@nestjs/common";

export type User = {
  id: number;
  phone: string;
  userName: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      phone: "+8801795514777",
      userName: "Fardin Rahman",
      password: "fardin@eyecloset",
    },
    {
      id: 2,
      phone: "+8801843139922",
      userName: "Munir Hassan Khan",
      password: "munir@eyecloset",
    },
    {
      id: 3,
      phone: "+8801634922661",
      userName: "Aidid Nibir",
      password: "nibir@eyecloset",
    },
  ];

  async findIfUserExist(phone: string): Promise<User | undefined> {
    return this.users.find((user) => user.phone === phone);
  }
}
