import { AgilePage } from './app.po';

describe('agile App', () => {
  let page: AgilePage;

  beforeEach(() => {
    page = new AgilePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
