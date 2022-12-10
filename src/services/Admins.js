const mongoose = require("../lib/mongo");
const boom = require("@hapi/boom");
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
        const admin = await Admin.findById(id);
        if (!admin) {
            throw boom.notFound("Admin not found");
        }
        return admin;
    }

    // Create admin
    async createAdmin(admin) {
        const existAdmin = await Admin.findOne({
            email: admin.email,
        });

        if (existAdmin) {
            throw boom.conflict("this email is already registered");
        }

        const newAdmin = new Admin(admin);
        return await newAdmin.save();
    }

    // Update admin
    async updateAdmin(id, admin) {
        const findAdmin = await this.getAdminById(id);

        if (!findAdmin) {
            throw boom.notFound("Admin not found");
        }

        const updatedAdmin = await Admin.findByIdAndUpdate(id, admin, {
            new: true,
        });
        return updatedAdmin;

    }

    // Delete admin
    async deleteAdmin(id) {
        const admin = await this.getAdminById(id);

        if (!admin) {
            throw boom.notFound("Admin not found");
        }

        await Admin.findByIdAndDelete(id);
        return { message: "Admin deleted" };
    }
}

module.exports = AdminServices;