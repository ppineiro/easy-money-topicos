const handlers = require('./handlers');
const validators = require('./validators');
//const authorization = require('../../middlewares/authorization');

module.exports = router => {
  router.post(
    '/propuestas',
    //authorization,
    validators.create,
    handlers.create,
  );
  router.get('/propuestas', validators.find, handlers.find);
  router.get('/propuestas/:id', validators.findOne, handlers.findOne);

  router.delete(
    '/propuestas/:id',
    //authorization,
    validators.uncreate,
    handlers.uncreate,
  );
  router.patch(
    '/propuestas/:id',
    //authorization,
    validators.update,
    handlers.update,
  );

  return router;
};
