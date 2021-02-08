import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { HolidaysType } from "./holiday-type.enum";

@Entity()
export class Holiday extends BaseEntity {
 @PrimaryGeneratedColumn()
 id: number;

 @Column()
 name: string;

 @Column()
 date: Date;

 @Column()
 type: HolidaysType;

}