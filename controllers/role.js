const Role = require('../models/role');

const createRole = async (req, res) => {
  try {
    const { name, description } = req.body;
    const role = new Role({ name, description });
    await role.save();
    res.status(201).json({ message: 'Role created', role });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.json(roles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createRole, getAllRoles };