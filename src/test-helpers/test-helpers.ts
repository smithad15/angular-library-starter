import { Type } from '@angular/core';
import {
  TestModuleMetadata,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

export function setupComponentFixture<T>(
  moduleMetadata: TestModuleMetadata,
  component: Type<T>,
): Promise<ComponentFixture<T>> {
  return TestBed.configureTestingModule(moduleMetadata)
    .compileComponents()
    .then(() => TestBed.createComponent(component))
    .then(fixture => {
      fixture.autoDetectChanges();
      return fixture;
    })
    .catch(error => {
      throw error;
    });
}
