import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('decimal')
    price: number;

    @Column('int')
    quantity:number;

    @CreateDateColumn({ name: 'created_at'})
    created_at:Date;

    @UpdateDateColumn({ name: 'updated_at'})
    updated_at: Date;
}
export default Product;