import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoriesService {

  constructor(
    @InjectRepository(Category)
    private readonly repository: Repository<Category>
  ){

  }

  create(dto: CreateCategoryDto) {
    const Category = this.repository.create(dto);
    return this.repository.save(Category);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: String) {
    return this.repository.findOneBy({id});
  }

  async update(id: String, dto: UpdateCategoryDto) {
    const category = await this.repository.findOneBy({id});
    this.repository.merge(category,dto);
    return this.repository.save(category);
  }

  async remove(id: String) {
      const category = await this.repository.findOneBy({id});
      return this.repository.remove(category);
  }
}