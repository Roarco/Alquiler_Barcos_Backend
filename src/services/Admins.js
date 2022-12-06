const mongoose = require("mongoose");
const Admin = require("../models/Admin");

class AdminServices {
    constructor() {
    }

    // Get all admins
    async getAdmins() {
        return await Admin.find();
    }

    // Get admin by id
    async getAdminById(id) {
    }

    // Create admin
    async createAdmin(admin) {
    }

    // Update admin
    async updateAdmin(id, admin) {

    }

    // Delete admin
    async deleteAdmin(id) {

    }
}

module.exports = AdminServices;