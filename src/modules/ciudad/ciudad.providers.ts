import { DataSource } from "typeorm";
import { Ciudad } from "./ciudad.entity";

export const ciudadProviders = [
    {
        provide: 'CIUDAD_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(Ciudad),
        inject: ['DATA_SOURCE']
    }
]