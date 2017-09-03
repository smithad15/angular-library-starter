import { Component } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

import { setupComponentFixture } from './test-helpers';

@Component({
  template: `<h1>Mock</h1>`,
})
class MockComponent {}

describe('Test helpers', () => {
  describe('setupComponentFixture', () => {
    it('should configure a component fixture', () => {
      setupComponentFixture(
        { declarations: [MockComponent] },
        MockComponent,
      ).then(component => expect(component).toBeInstanceOf(ComponentFixture));
    });

    it('should throw an error if a component fixture is unable to be created', () => {
      setupComponentFixture({}, MockComponent).catch(error =>
        expect(error).toBeTruthy(),
      );
    });
  });
});
