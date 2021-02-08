
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'projectone',
    password: 'projectone',
    database: 'projectone',
    entities: [__dirname + '/../**/*.entity.js'],
    synchronize: true,
};