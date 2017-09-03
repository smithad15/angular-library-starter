import { ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HelloComponent } from './hello.component';
import { setupComponentFixture } from '../test-helpers';

describe('HelloComponent', () => {
  let component: ComponentFixture<HelloComponent>;

  beforeEach(
    async(() => {
      setupComponentFixture(
        { declarations: [HelloComponent] },
        HelloComponent,
      ).then(comp => (component = comp));
    }),
  );

  it('should exist', () => {
    expect(component).toBeTruthy();
  });

  it('should render a Hello message', () => {
    const expected = 'Hello!';
    const actual = component.debugElement.query(By.css('h1')).nativeElement
      .textContent;
    expect(actual).toEqual(expected);
  });
});
