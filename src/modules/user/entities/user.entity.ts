import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  username: string;

  @Column({ length: 20 })
  password: string;

  @Column({ length: 20 })
  phone: string

  @Column({ length: 50 })
  email: string

  @Column("int")
  role: number;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @Column({ default: true })
  isActive: boolean;
}