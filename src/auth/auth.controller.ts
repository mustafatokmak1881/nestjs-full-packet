import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';


// INTERFACES
import { ILogin } from '../auth/interfaces/login/login.interface';

@Controller('auth')
export class AuthController {
    private readonly testUser: string = 'testuser';
    private readonly testPass: string = 'testpass';

    @Get()
    login() {
        return 'Auth Page';
    }

    @Post('/login')
    loginFunc(@Req() req: Request, @Res() res: Response) {
        const { username, password }: ILogin = req.body;

        if (username !== this.testUser || password !== this.testPass) {
            return res.status(401).send('Wrong username or password');
        }

        res.status(200).json({ status: true, msg: 'Access Granted' });
    }
}
