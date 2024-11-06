import { before } from "node:test";
import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";

const{nanoid} = require("nanoid")


@Entity('categories')
export class Category {

    @PrimaryColumn()
    id: String;

    @Column()
    nome : string;

    @Column()
    email : string;

    @BeforeInsert()
    genereteId(){
        this.id = nanoid;
    }
}
