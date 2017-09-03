import { HelloModule } from './hello.module';

describe('HelloModule', () => {
  let module: HelloModule;

  beforeEach(() => {
    module = new HelloModule();
  });

  it('should exist', () => {
    expect(module).toBeTruthy();
  });
});
