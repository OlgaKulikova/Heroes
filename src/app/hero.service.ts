import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes.ts';

@Injectable()
export class HeroService {
	getHeroes(): Hero[] {
		return HEROES;
	} 
}