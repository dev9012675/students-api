import { Controller, Get } from '@nestjs/common';

@Controller('api/hello')
export class HelloController {
    @Get()
    async greeting():Promise<String> {
        return "Hello World"

    }
}
