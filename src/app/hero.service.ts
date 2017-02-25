import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes.ts';
import { Hero } from './hero';

@Injectable()
export class HeroService {
	getHeroes(): Promise<Hero[]> {
		return Promise.resolve(HEROES);
	} 
}