const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const portfolioSchema = new Schema({
  projectTitle: {
    type: String,
    required: true,
    trim: true,
  },
  projectDescription: {
    type: String,
    required: true,
  },
  projectCategory: {
    type: String, 
    required: true,
  },
  technologiesUsed: [
    {
      type: String, 
    },
  ],
  startDate: {
    type: Date,
    required: true,
  },
  deployDate: {
    type: Date,
    required: true,
  },
  projectURL: {
    type: String, 
    required: true,
  },
  githubRepo: {
    type: String, 
  },
  employees: [
    {
      employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", 
      },
      name: {
        type: String,
        required: true,
      },
      role: {
        type: String, 
        required: true,
      },
    },
  ],
  managers: [
    {
      managerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      name: {
        type: String,
        required: true,
      },
      position: {
        type: String, 
      },
    },
  ],
  projectStatus: {
    type: String,
    enum: ["In Progress", "Completed", "Deployed", "Archived"],
    default: "Completed",
  },
  projectThumbnail: {
    type: String, 
  },
  clientName: {
    type: String, 
  },
  feedback: {
    type: String, 
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Portfolio", portfolioSchema);
