import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    @Column()
    fathername : string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    nature: string

    @Column()
    message: string;

}
