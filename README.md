# Patient Management System

A modern, full-stack Patient Management System web application that helps manage patients, doctors, appointments, medical records, prescriptions, and billing in a secure and user-friendly way.

![image](https://github.com/user-attachments/assets/705fe411-300d-423d-b127-c0b33030ee5c)


## About

This Patient Management System provides a comprehensive solution for hospitals and clinics to efficiently manage patient records, appointments, billing, and doctor-patient interactions. It includes role-based access for **Admin**, **Doctor**, and **Patient** users.


## Features

- User Authentication & Role-based Authorization (Admin, Doctor, Patient)
- Appointment Booking & Management
- Medical Records & Prescriptions Management
- Billing & Payment Tracking
- Responsive and modern UI with React and Tailwind CSS
- RESTful API backend built with Node.js and Express.js
- MySQL database for persistent storage


## Technology Stack

| Layer           | Technology                |
|-----------------|---------------------------|
| Frontend        | React, Tailwind CSS       |
| Backend         | Node.js, Express.js       |
| Database        | MySQL                     |
| API Client      | Axios                     |
| Authentication  | JWT / Local Storage       |
| Version Control | Git & GitHub              |


## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MySQL](https://www.mysql.com/downloads/)
- [Git](https://git-scm.com/)

## Configure environment variables

Create .env files in the backend folder with your DB credentials and JWT secrets, e.g.:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=patient_management
JWT_SECRET=your_jwt_secret_key
```

## Usage
- Register as Patient, Doctor, or Admin (Admin accounts may be created manually in the DB)
- Patients can book appointments, view medical records, and prescriptions
- Doctors can manage appointments, update medical records, and write prescriptions
- Admins can monitor all data, manage users, appointments, and billing

