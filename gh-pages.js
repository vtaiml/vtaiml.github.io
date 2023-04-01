var ghpages = require('gh-pages');

ghpages.publish(
    'static', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/vtaiml/vtaiml.github.io.git',
        user: {
            name: 'vtaiml',
            email: 'vtaimlclub@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)