const path = require('path');
const ghpages = require('gh-pages');
const dist = path.resolve(process.cwd(), './docs/dist');
ghpages.publish(
  dist,
  // {
  //   repo: 'https://github.com/webfansplz/fs-ui.git'
  // },
  e => {
    if (e) {
      console.log(e);
      return false;
    }
    console.log(123);
    // console.log('docs upload success');
  }
);
