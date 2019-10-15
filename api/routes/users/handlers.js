const Usuario = require('../../models/usuario');
const sendEmail = require('../../utils/email');
const random = require('../../utils/random');

const find = (req, res) => {
  Usuario.find({})
    .populate('usuarioPerfilId')
    .exec((err, users) => {
      if (err) throw err;
      const filteredUsers = users.map(user => {
        const {
          _id,
          usuarioNombre,
          usuarioEmail,
          usuarioPerfilId,
          createdAt,
          updatedAt,
        } = user;
        return {
          _id,
          usuarioNombre,
          usuarioEmail,
          usuarioPerfilId,
          createdAt,
          updatedAt,
        };
      });
      res.json(filteredUsers);
    });
};

const findActivos = (req, res) => {
  Usuario.find({ usuarioActivo: true })
    .populate('usuarioPerfilId')
    .exec((err, users) => {
      if (err) throw err;
      const filteredUsers = users.map(user => {
        const {
          _id,
          usuarioNombre,
          usuarioEmail,
          usuarioPerfilId,
          createdAt,
          updatedAt,
        } = user;
        return {
          _id,
          usuarioNombre,
          usuarioEmail,
          usuarioPerfilId,
          createdAt,
          updatedAt,
        };
      });
      res.json(filteredUsers);
    });
};

const findOne = (req, res) => {
  Usuario.findById(req.params.id)
    .populate('usuarioPerfilId')
    .exec((err, user) => {
      if (user !== undefined && user !== null) {
        const {
          _id,
          usuarioNombre,
          usuarioEmail,
          usuarioPerfilId,
          createdAt,
          updatedAt,
        } = user;
        res.json({
          _id,
          usuarioNombre,
          usuarioEmail,
          usuarioPerfilId,
          createdAt,
          updatedAt,
        });
      } else {
        res.sendStatus(404);
      }
    });
};

const buscarPorPerfil = (req, res) => {
  Usuario.find(
    {
      perfil: req.params.usuarioPerfilId,
    },
    (err, query_response) => {
      if (err) {
        res.status(404).json({
          error: 'Producto no encontrado.',
        });
      } else {
        res.json(query_response);
      }
    },
  );
};
const create = (req, res) => {
  const {
    usuarioNombre,
    usuarioEmail,
    usuarioPassword,
    usuarioPerfilId,
  } = req.body;
  const user = new Usuario({
    usuarioActivo: true,
    usuarioNombre,
    usuarioEmail,
    usuarioPassword,
    usuarioPerfilId,
    usuarioFechaCreacion: Date.now(),
  });
  user.save(err => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(201).json({
        usuarioNombre,
        usuarioEmail,
      });
    }
  });
};

const uncreate = (req, res) => {
  Usuario.deleteOne(
    {
      _id: req.params.id,
    },
    err => {
      if (err) {
        res.sendStatus(404);
      }
      res.sendStatus(200);
    },
  );
};

const update = (req, res) => {
  Usuario.update(
    {
      _id: req.params.id,
    },
    {
      $set: req.body,
    },
    err => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.sendStatus(200);
      }
    },
  );
};

const changePassword = (req, res) => {
  Usuario.findById(req.params.id, (err, u) => {
    if (u !== undefined && u !== null) {
      const user = u;
      user.usuarioPassword = req.body.newPassword;
      user.save(error => {
        if (error) {
          res.sendStatus(400);
        } else {
          res.json(user);
        }
      });
    }
  });
};

const forgotPassword = (req, res) => {
  Usuario.findOne(
    {
      usuarioEmail: req.body.usuarioEmail,
    },
    (err, user) => {
      if (err) {
        res.sendStatus(400);
      }
      if (user) {
        const code = random(99999);
        const codeStr = `${code}`.padStart(5, '0');
        sendEmail(
          {
            recipient: user.usuarioEmail,
            subject: 'Recuperación de contraseña',
            text: `Tu código es:\n${codeStr}`,
          },
          error => {
            if (error) {
              res.sendStatus(500);
            }
            user.passwordRecoveryCode = codeStr;
            user.save();
            res.sendStatus(200);
          },
        );
      } else {
        res.sendStatus(400);
      }
    },
  );
};

const resetPassword = (req, res) => {
  const { usuarioEmail, code, usuarioPassword } = req.body;
  Usuario.findOne(
    {
      usuarioEmail,
    },
    (err, user) => {
      if (err) {
        res.sendStatus(400);
      }
      if (user && code === user.passwordRecoveryCode) {
        user.usuarioPassword = usuarioPassword;
        user.passwordRecoveryCode = null;
        user.save();
        res.sendStatus(200);
      } else {
        res.sendStatus(400);
      }
    },
  );
};

const teapot = (req, res) => res.sendStatus(418);

module.exports = {
  find,
  findActivos,
  findOne,
  create,
  uncreate,
  update,
  changePassword,
  teapot,
  forgotPassword,
  resetPassword,
  buscarPorPerfil,
};
