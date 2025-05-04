import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {LocaleService} from "./application/services/locale.service";
import {LocaleMiddleware} from "./infrastructure/locale.middleware";

@Module({
providers:[
LocaleService
]
})
export class CommonModule implements NestModule{
    configure(consumer: MiddlewareConsumer): any {
        consumer
            .apply(LocaleMiddleware)
            .forRoutes('*')
    }
}
