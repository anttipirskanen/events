import { EtappiPage } from './app.po';

describe('etappi App', () => {
  let page: EtappiPage;

  beforeEach(() => {
    page = new EtappiPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
